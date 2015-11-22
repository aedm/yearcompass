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
            <p>{ this.text("T0013") }</p>

            <header>We'll remember it for you</header>
            <p>
              Your answers aren't just a shouting into the void. We keep them for you.
              But in order to do so, we must remember you as well. Please log in.
            </p>
            <div className="navbutton">
              <i onClick={() => {Meteor.loginWithFacebook(this.scrollTop)}}
                 className="fa fa-facebook-square"></i>
              <i onClick={() => {Meteor.loginWithGoogle(this.scrollTop)}}
                 className="fa fa-google-plus-square"></i>
              <i onClick={() => {Meteor.loginWithTwitter(this.scrollTop)}}
                 className="fa fa-twitter-square"></i>
            </div>
          </div>
        </div>);
  }
});
