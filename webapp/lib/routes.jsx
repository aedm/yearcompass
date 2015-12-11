
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

loggedInRoutes.route('/print', {
  name: "print",
  action() {
    ReactLayout.render(PrintPage);
  }
});

FlowRouter.route('/stats', {
  name: "stats",
  action() {
    ReactLayout.render(StatsPage);
  }
});

FlowRouter.route('/feedbacktext', {
  name: "feedbacktext",
  action() {
    ReactLayout.render(FeedbackTextsPage);
  }
});

FlowRouter.route('/pdfprint/:userId', {
  name: "pdfprint",
  action(params) {
    ReactLayout.render(PDFPrintPage, {userId: params.userId});
  }
});

