PDFPrintPage = React.createClass({
  mixins: [ReactMeteorData],

  propTypes: {
    userId: React.PropTypes.string.isRequired
  },

  getMeteorData() {
    let userId = this.props.userId.split('-')[0];
    Meteor.subscribe("userAnswers", userId);
    return {};
  },

  render() {
    let userId = this.props.userId;
    let lang = "en_us";

    // This is an ugly hack. The Ruby-based PDF printer we use is buggy and crashes
    // when the query has GET parameters. So the language is encoded in the
    // userId prop. Meh.
    let paramsHack = userId.split('-');
    if (paramsHack.length == 2) {
      userId = paramsHack[0];
      lang = paramsHack[1];
    }

    return (<div>
      <div className="bookletpage">
        <p className="printTitle">2015 - 2016</p>
        <PastYearQuestions language={ lang } print={ true } userId={ userId }/>
        <NextYearQuestions language={ lang } print={ true } userId={ userId }/>
      </div>
    </div>);
  }
});
