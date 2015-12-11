Meteor.publish("answers", function () {
  if (!this.userId) return [];
  return Answers.find({userId: this.userId});
});

Meteor.publish("feedback", function () {
  if (!this.userId) return [];
  return Feedback.find({userId: this.userId});
});

Meteor.publish("freetext-feedbacks", function () {
  if (!this.userId) return [];
  return Answers.find({question: "feedback"});
});

/**
 * For generating PDF files. This publication is accessed
 * by PDFPrintPage, which is only invoked by an external
 * URL to PDF service.
 */
Meteor.publish("userAnswers", function (userId) {
  return Answers.find({userId: userId});
});
