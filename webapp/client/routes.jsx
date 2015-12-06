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

Accounts.onLogin(() => {
  FlowRouter.go("past");
});

// Routes which are only visible after logging in
let loggedInRoutes = FlowRouter.group({
  triggersEnter: [(context, redirect) => {
    // If a user is not logged in, throw her back to the login page
    if (!Meteor.loggingIn() && !Meteor.userId()) {
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
