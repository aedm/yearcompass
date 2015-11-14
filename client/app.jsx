App = React.createClass({
  mixins: [ReactMeteorData],

  /// TODO: translate page names
  pages: {
    "start": "Start",
    "past": "Past Year",
    "next": "The Year Ahead",
    "finish": "Finish"
  },

  getInitialState() {
    return {
      language: Object.keys(translations)[0],
      currentPage: "start"
    }
  },

  getMeteorData() {
    return {
      userId: Meteor.userId()
    };
  },

  text(token) {
    return translations[this.state.language][token];
  },

  selectLanguage(lang, event) {
    event.preventDefault();
    this.setState({language: lang});
  },

  turnPage(page) {
    this.setState({currentPage: page});
  },

  renderBooklet() {
    let lang = this.state.language;
    let page;
    switch (this.state.currentPage) {
      case "start":
        page = <StartPage language={lang} onTurn={ () => this.turnPage("past") } />;
        break;
      case "past":
        page = <PastYearPage language={lang} onTurn={ () => this.turnPage("next") } />;
        break;
      case "next":
        page = <NextYearPage language={lang} onTurn={ () => this.turnPage("finish") } />;
        break;
      case "finish":
        page = <FinishPage language={lang} />;
        break;
    }
    return (
      <div className="booklet">
        { page }
      </div>
    );
  },

  render() {
    return (
      <div className="container">
        <p>Languages:
          { Object.keys(translations).map((t) =>
            <a href="#" key={t} onMouseDown={this.selectLanguage.bind(this, t)}>{t} </a> )}
        </p>

        <LoginWrapper />
        <p>Meteor.userId: { this.data.userId } </p>

        { this.data.userId != null ? this.renderBooklet() : null }
      </div>
    );
  }
});

