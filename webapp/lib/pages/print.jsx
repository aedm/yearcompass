PrintPage = React.createClass({
  getInitialState() {
    return {
      language: "en_us"
    }
  },

  text(token) {
    return translations[this.state.language][token];
  },

  render() {
    return (<div>
        <div className="bookletpage">
          <p className="printTitle">2015 - 2016</p>
          <PastYearQuestions language={ this.state.language } print={ true } userId={this.props.userId} />
          <NextYearQuestions language={ this.state.language } print={ true } userId={this.props.userId} />
        </div>
    </div>
    );
  }
});

