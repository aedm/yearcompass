Meteor.startup(() => {
  // Automatic redirectiong based on Meteor.userId() changes
  let lastUserId = null;
  let loginStartup = true;
  Deps.autorun(() => {
    var userId = Meteor.userId();
    if (!loginStartup) {
      if (userId) {
        let redirectURL = Session.get("loginRedirect");
        if (redirectURL) {
          // User logged in after she was automatically logged out.
          // Redirect her to where she's left off.
          FlowRouter.go(redirectURL);
        }
        else if (FlowRouter.current().route.name === "login") {
          // User logged in from front page. Start with "past year".
          FlowRouter.go("past");
        }
      }
      else if (lastUserId) {
        // User was logged in. If she's currently on a page which requires
        // authorization, throw her back to the login page, but remember the page.
        if (FlowRouter.current().route.group &&
            FlowRouter.current().route.group.name === "loggedIn") {
          Session.set("loginRedirect", FlowRouter.current().path);
          FlowRouter.go("login");
        }
      }
    }
    lastUserId = userId;
    loginStartup = false;
  });
});


FlowRouter.route('/', {
  name: "login",
  action() {
    // If a user is logged in, redirect her to the first page
    if (Meteor.loggingIn() || Meteor.userId()) {
      FlowRouter.go("past");
      return;
    }
    ReactLayout.render(App, {content: <StartPage />});
  }
});

// Routes which are only visible after logging in
let loggedInRoutes = FlowRouter.group({
  name: "loggedIn",
  triggersEnter: [(context, redirect) => {
    // If a user is not logged in, throw her back to the login page
    if (!Meteor.loggingIn() && !Meteor.userId()) {
      Session.set("loginRedirect", FlowRouter.current().path);
      FlowRouter.go("login");
    }
    window.scrollTo(0, 0);
  }]
});

loggedInRoutes.route('/pastyear', {
  name: "past",
  action() {
    ReactLayout.render(App, {content: <PastYearPage />});
  }
});

loggedInRoutes.route('/nextyear', {
  name: "next",
  action() {
    ReactLayout.render(App, {content: <NextYearPage />});
  }
});

loggedInRoutes.route('/finish', {
  name: "finish",
  action() {
    ReactLayout.render(App, {content: <FinishPage />});
  }
});

loggedInRoutes.route('/feedback', {
  name: "feedback",
  action() {
    ReactLayout.render(App, {content: <FeedbackPage />});
  }
});

FlowRouter.route('/stats', {
  name: "stats",
  action() {
    ReactLayout.render(StatsPage);
  }
});
