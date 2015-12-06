StartPage = React.createClass({
  mixins: [BookletPage],

  scrollTop() {
    window.scrollTo(0, 0);
  },

  render() {
    return (
        <div>
          <div id="jumbotron" className="login">
            <p>&nbsp;</p>
          </div>

          <div className="bookletpage">
            {/* What is this? */}
            <header>{ this.text("T0005") }</header>
            <p>{ this.text("T0007") }</p>

            {/* Why is this good for me? */}
            <header>{ this.text("T0008") }</header>
            <p>{ this.text("T0009") }</p>

            {/* What do I need? */}
            <header>{ this.text("T0010") }</header>
            <ul>
              <li><label>{ this.text("T0020") }</label></li>
              <li><label>{ this.text("T0021") }</label></li>
              <li><label>{ this.text("T0023") }</label></li>
            </ul>

            {/* Get ready */}
            <header>{ this.text("T0025") }</header>
            <p>{ this.text("T0026") }</p>
            <p>{ this.text("T0027") }</p>
            <p>{ this.text("T0028") }</p>
            <p>{ this.text("T0029") }</p>
            <p>{ this.text("T0030") }</p>

            {/* We'll remember it for you */}
            <header>{ this.text("T0176") }</header>
            <p>{ this.text("T0177") }</p>
            <div className="navbutton">
              <i onClick={() => {Meteor.loginWithFacebook(this.scrollTop)}}
                 className="fa fa-facebook-square"></i>
              <i onClick={() => {Meteor.loginWithGoogle(this.scrollTop)}}
                 className="fa fa-google-plus-square"></i>
            </div>
          </div>
        </div>);
  }
});
