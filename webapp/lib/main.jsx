Meteor.startup(() => {
  Meteor.subscribe("answers");
  Meteor.subscribe("feedback");
});

