
Meteor.methods({

  answerText(question, answer) {
    check(question, String);
    check(answer, String)
    Answers.upsert({
        userId: Meteor.userId(),
        question: question,
      }, {
        userId: Meteor.userId(),
        question: question,
        answer: answer
    });
  },

  rateQuestion(question, rating) {
    check(question, String);
    check(rating, Number)
    Feedback.upsert({
        userId: Meteor.userId(),
        question: question,
      }, {
        userId: Meteor.userId(),
        question: question,
        rating: rating
    });
  },
});