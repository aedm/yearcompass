
PlainTextQuestion = React.createClass({
  mixins: [ReactMeteorData],

  getInitialState() {
    return { value: "" };
  },

  getMeteorData() {
    let document = Answers.findOne({ question: this.props.question });
    if (!document) return {};

    /// Little hack to enable state updates inside getMeteorData() while avoiding infinite loops
    if (this.state.value != document.answer) {
      setTimeout(() => { this.setState({value: this.data.value}); }, 0);
    }
    return { value: document.answer };
  },

  onChange() {
    let answer = ReactDOM.findDOMNode(this.refs.answer).value;
    this.setState({value: answer});
    Meteor.call("answerText", this.props.question, answer);
  },

  render() {
    return (
      <div className="container">
        <input type="text" ref="answer" onChange={this.onChange} value={this.state.value} />
      </div>
    );
  }
});