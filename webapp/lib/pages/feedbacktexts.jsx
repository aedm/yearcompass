import React from 'react';

FeedbackTextsPage = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    Meteor.subscribe("freetext-feedbacks");
    return {
      list: Answers.find({question: "feedback"}).fetch(),
      userId: Meteor.userId()
    }
  },

  render() {
    return (
        <div className="bookletpage">
          <header>{ this.data.userId == null ? "no auth, no party." : "Feedback:" }</header>
          { this.data.list.map((answer) =>
              <div key={answer.userId}>
                <p>{answer.answer}</p>
                <footer>&ndash; {answer.userId}</footer>
              </div>
              )}
        </div>
    );
  },
});

