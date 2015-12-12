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
      <PrintPage userId={ this.props.userId } />
    </div>);
    ;
  }
});
