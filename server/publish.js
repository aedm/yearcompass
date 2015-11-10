
Meteor.publish('answers', function() {
  if (!this.userId) return [];
  return Answers.find({userId: this.userId});
});
