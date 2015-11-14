Meteor.startup(function () {
  ReactDOM.render(<App />, document.getElementById("app"));
});

Meteor.subscribe("answers");
