Meteor.startup(function () {
  Answers._ensureIndex("userId");
  Answers._ensureIndex("question");
  Feedback._ensureIndex("userId");
  Feedback._ensureIndex("question");
});
