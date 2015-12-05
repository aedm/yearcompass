
/** Displays a plain text answer. Takes the value from the
 * 'Answers' Mongo collection. The actual rendering is performed by
 * a 'PlainTextQuestionCore' instance which is also responsible for
 * debouncing the response function.
 *
 * Note that this mechanism doesn't support concurrent editing.
 *
 * Props:
 *  'question': a token unique to the question
 */
TextQuestion = React.createClass({
  mixins: [ReactMeteorData],

  /** Forwards changes from 'Answers' to 'this.data' */
  getMeteorData() {
    let document = Answers.findOne({ question: this.props.question });
    if (!document) return {};
    return {
      answer: document.answer
    }
  },

  /** Updates the 'Answers' collection by invoking a method on the backend. */
  setAnswer(answer) {
    Meteor.call("answerText", this.props.question, answer);
  },

  /** Passes the answer to the actual editor */
  render() {
    return (<TextQuestionCore answer={this.data.answer} question={this.props.question}
                              onChange={this.setAnswer}/>);
  }
});


/** Lets the user enter a plain text answer. Performs debouncing
 * in order to go easy on MongoDB.
 *
 * Props:
 *   'answer': the current value of the answer in Mongo.
 *   'onChange': a callback called when the user changes the answer
 */
TextQuestionCore = React.createClass({
  mixins: [SyncStateSource],

  getInitialState() {
    return {
      value: this.props.answer,
    };
  },

  componentWillMount() {
    /** This should be performed for each instance, thus it's in 'componentWillMount' */
    this.notifyParentDebounce = _.debounce(this.notifyParent, 3000);
  },

  componentDidMount() {
    this.adjustTextareaHeight();
  },

  /** Called when the Mongo collection was updated by any of the clients */
  componentWillReceiveProps(nextProps) {
    this.setState({value: nextProps.answer});
  },

  notifyParent(answer) {
    this.props.onChange(answer);
    this.setSyncState(true);
  },

  onChange() {
    let answer = ReactDOM.findDOMNode(this.refs.answer).value;
    this.setState({value: answer});
    this.notifyParentDebounce(answer);
    this.adjustTextareaHeight();
    this.setSyncState(false);
  },

  /* JavaScript hack to adjust textarea height to fit content. */
  adjustTextareaHeight() {
    let element = ReactDOM.findDOMNode(this.refs.answer);
    element.style.height = "5px";
    element.style.height = (element.scrollHeight)+"px";
  },

  render() {
    return (
      <div className="answer">
        <textarea ref="answer" onChange={this.onChange} value={this.state.value} />
      </div>
    );
  }
});
