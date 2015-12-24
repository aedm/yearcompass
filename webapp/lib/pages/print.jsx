PrintPage = React.createClass({
  mixins: [ReactMeteorData],

  getInitialState() {
    return {
      language: "en_us"
    }
  },

  getMeteorData() {
    let language = FlowRouter.getQueryParam("lang");
    return {
      language: language ? language : "en_us"
    }
  },

  render() {
    return (<div>
        <div className="bookletpage">
          <p className="printTitle">2015 - 2016</p>
          <PastYearQuestions language={ this.data.language } print={ true } userId={this.props.userId} />
          <NextYearQuestions language={ this.data.language } print={ true } userId={this.props.userId} />
        </div>
    </div>
    );
  }
});

