StartPage = React.createClass({
  mixins: [BookletPage],

  scrollTop() {
    window.scrollTo(0, 0);
  },

  render() {
    return (
        <div>
          <div id="jumbotron">
            <p className="logo">&nbsp;</p>
          </div>

          <div className="bookletpage">
            {/* What is this? */}
            <header>{ this.text("T0003") }</header>
            <p>{ this.text("T0004") }</p>

            {/* Why is this good for me? */}
            <header>{ this.text("T0005") }</header>
            <p>{ this.text("T0006") }</p>

            {/* What do I need? */}
            <header>{ this.text("T0007") }</header>
            <p>{ this.text("T0008") }</p>
            <label>{ this.text("T0009") }</label>
            <p>{ this.text("T0010") }</p>
            <label>{ this.text("T0011") }</label>

            {/* Get ready */}
            <header>{ this.text("T0013") }</header>

            <div className="navbutton">
              <button onClick={() => {Meteor.loginWithFacebook(this.scrollTop)}}>
                Login with Facebook
              </button>
            </div>
          </div>
        </div>);
  }
});
