PDFPrintPage = React.createClass({
  mixins: [ReactMeteorData],

  propTypes: {
    userId: React.PropTypes.string.isRequired
  },

  getMeteorData() {
    Meteor.subscribe("userAnswers", this.props.userId);
    return {
      x: Answers.find().fetch()
    };
  },

  render() {
    return (<div>
      { /*this.data.x.map((e) => <p>{e.answer}</p>)*/ }
      <PrintPage userId={ this.props.userId } />
    </div>);
    ;
  }
});
