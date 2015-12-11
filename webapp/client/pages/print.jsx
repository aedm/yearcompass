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
          <PastYearQuestions language={ this.state.language } print={ true } />
          <NextYearQuestions language={ this.state.language } print={ true } />
        </div>
    </div>
    );
  }
});

