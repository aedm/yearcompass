/**
 * Automatic redirectiong based on Meteor.userId() changes.
 * This is a client-side only function.
 */
Meteor.startup(() => {
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
