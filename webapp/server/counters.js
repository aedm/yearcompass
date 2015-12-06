Meteor.publish("counters", function(questions) {
  Counts.publish(this, "userCount", Meteor.users.find());
  questions.forEach((question) => {
    Counts.publish(this, question, Answers.find({question}));
  });
});
