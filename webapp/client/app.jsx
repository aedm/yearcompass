App = React.createClass({
  mixins: [ReactMeteorData],

  /// TODO: translate page names
  pages: {
    "start": "Start",
    "past": "2015",
    "next": "2016",
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
    window.scrollTo(0, 0);
  },

  renderBooklet() {
    let lang = this.state.language;
    let page;
    switch (this.state.currentPage) {
      case "start":
        page = <StartPage language={lang} onTurn={ () => this.turnPage("past") }/>;
        break;
      case "past":
        page = <PastYearPage language={lang} onTurn={ () => this.turnPage("next") }/>;
        break;
      case "next":
        page = <NextYearPage language={lang} onTurn={ () => this.turnPage("finish") }/>;
        break;
      case "finish":
        page = <FinishPage language={lang}/>;
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
        <div>
          <div id="header">
            <div className="menu">
              <LoginWrapper />
              &nbsp;{ Object.keys(translations).map((t) =>
                  <a href="#" key={t} onMouseDown={this.selectLanguage.bind(this, t)}>{t} </a> )}
            </div>
            <div className="title">
              <a href=""><img src="ui/logotext_small_black.png" alt="YearCompass"/></a>
            </div>
          </div>

          <div id="navigation">
            { Object.keys(this.pages).map((page) =>
                <button key={page} onClick={ () => this.turnPage(page)}
                        className={this.state.currentPage == page ? "active" : ""}>
                  {this.pages[page]}
                </button> )}
          </div>

          { this.data.userId != null ? this.renderBooklet() : null }
        </div>
    );
  }
});

