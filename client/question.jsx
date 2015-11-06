
PlainTextQuestion = React.createClass({
  mixins: [ReactMeteorData],

  getInitialState() {
    return {};
  },

  // Loads items from the Tasks collection and puts them on this.data.tasks
  getMeteorData() {
    let document = Answers.findOne({ question: this.props.question });
    if (!document) return {};
    return {
      value: document.answer,
      id: document._id
    }
  },

  onChange() {
    let answerDom = ReactDOM.findDOMNode(this.refs.answer);
    // TODO: Meteor.call()
    if (this.data.id) {
      Answers.update({ _id: this.data.id }, { $set: { answer: answerDom.value } });
    } else {
      Answers.insert({
        question: this.props.question,
        answer: answerDom.value
      });
    }
  },

  render() {
    // TODO: value should come from this.state, not this.data
    return (
      <div className="container">
        <input type="text" ref="answer" onChange={this.onChange} value={this.data.value} />
      </div>
    );
  }
});