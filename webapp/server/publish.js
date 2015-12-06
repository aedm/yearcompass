Meteor.startup(function () {
  Answers._ensureIndex("userId");
  Answers._ensureIndex("question");
  Feedback._ensureIndex("userId");
  Feedback._ensureIndex("question");
});

Meteor.publish('answers', function () {
  if (!this.userId) return [];
  return Answers.find({userId: this.userId});
});

Meteor.publish('feedback', function () {
  if (!this.userId) return [];
  return Feedback.find({userId: this.userId});
});

Accounts.onCreateUser(function (options, user) {
  if (options.profile) {
    let picture = "";
    if (user.services.google !== undefined) {
      picture = user.services.google.picture;
    }
    else if (user.services.twitter !== undefined) {
      picture = user.services.twitter.profile_image_url_https; // sudo param name
    }
    else if (user.services.facebook !== undefined) {
      picture =
          "http://graph.facebook.com/" + user.services.facebook.id + "/picture/?type=large";
    }
    options.profile.picture = picture;
    user.profile = options.profile;
  }
  return user;
});