App = React.createClass({
  mixins: [ReactMeteorData],

  pages: {
    "past": "T0002",
    "next": "T0003",
    "finish": "T0192",
  },

  getInitialState() {
    return {
      language: Object.keys(translations)[0],
    }
  },

  getMeteorData() {
    if (Meteor.user() == undefined) return {};
    return {
      userId: Meteor.userId(),
      userPhoto: Meteor.user().profile.picture,
    };
  },

  text(token) {
    return translations[this.state.language][token];
  },

  selectLanguage(lang, event) {
    event.preventDefault();
    this.setState({language: lang});
  },

  logout(event) {
    event.preventDefault();
    Meteor.logout(() => FlowRouter.go("login"));
  },

  renderBooklet() {
    return (
        <div>
          { this.data.userId == null ? null :
              <div id="navigation">
                { Object.keys(this.pages).map((page) =>
                <button key={page} onClick={ () => FlowRouter.go(page) }
                        className={FlowRouter.getRouteName() == page ? "active" : ""}>
                  { this.text(this.pages[page]) }
                </button> )}
              </div>
          }
          <div className="booklet">
            { React.cloneElement(this.props.content, { language: this.state.language }) }
          </div>
        </div>
    );
  },

  renderMenu() {
    let logoutButton = this.data.userId == null ? null : (
        <li className="pure-menu-item">
          <a href="#" onClick={this.logout} className="pure-menu-link">{ this.text("T0193") }</a>
        </li>);

    return (
        <div className="menu pure-menu pure-menu-horizontal">
          <ul className="pure-menu-list">
            <li className="pure-menu-item pure-menu-has-children pure-menu-allow-hover">
              <a href="#" id="menuLink1" className="pure-menu-link">
                { this.data.userPhoto == undefined
                    ? <i className="fa fa-bars"></i>
                    : <img src={ this.data.userPhoto } alt="profile photo" className="photo"/> }
              </a>
              <ul className="pure-menu-children">
                { logoutButton }
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
              <a href={ this.text("T0171") }>
                <img src="ui/logotext_small_black.png" alt={ this.text("T0191") }/> </a>
            </div>
            { this.renderMenu() }
          </div>
          { this.renderBooklet() }
          <SyncStateDisplay />
        </div>
    );
  }
});

