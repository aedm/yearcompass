
Meteor.methods({

  setPlainTextAnswer(question, answer) {
    check(question, String);
    check(answer, String);
    Answers.upsert({
        question: question,
      }, {
        question: question,
        answer: answer,
    });
  },

});