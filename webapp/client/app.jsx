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
    //$('html, body').animate({ scrollTop: 0 }, '2000', 'swing');
  },

  logout(event) {
    event.preventDefault();
    Meteor.logout();
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

  renderMenu() {
    return (
        <div className="menu pure-menu pure-menu-horizontal">
          <ul className="pure-menu-list">
            <li className="pure-menu-item"><LoginWrapper /></li>
            <li className="pure-menu-item pure-menu-has-children pure-menu-allow-hover">
              <a href="#" id="menuLink1" className="pure-menu-link">Menu</a>
              <ul className="pure-menu-children">
                <li className="pure-menu-item">
                  <a href="#" onClick={this.logout} className="pure-menu-link">Logout</a>
                </li>
                <li className="pure-menu-item">
                  <div id="menuLanguageSelector">
                    { Object.keys(translations).map((t) =>
                      <button key={t} onClick={this.selectLanguage.bind(this, t)}
                              className="lang">{t}</button> )}
                  </div>
                </li>
              </ul>
            </li>
          </ul>
        </div>
    );
  },

  render() {
    return (
        <div>
          <div id="header">
            <div className="title">
              <a href="http://yearcompass.com">
                <img src="ui/logotext_small_black.png" alt="YearCompass"/> </a>
            </div>
            { this.renderMenu() }
          </div>

          <div id="navigation">
            { Object.keys(this.pages).map((page) =><button key={page}
                                                           onClick={ () => this.turnPage(page)}
                                                           className={this.state.currentPage == page ? "active" : ""}>
              {this.pages[page]}
            </button> )}
          </div>

          { this.data.userId != null ? this.renderBooklet() : null }
        </div>
    );
  }
});

