FinishPage = React.createClass({
  mixins: [BookletPage],

  renderShare() {
    let url = this.text("T0171");
    let img = "http://www.yearcompass.com/wp-content/uploads/2014/12/zen_share1.png";
    let twitterText = this.text("T0205");
    let pinterestText = this.text("T0206");
    let whatsappText = this.text("T0209");

    return (
        <p className="share">
          <button className="social facebook"
                  onClick={ ()=> {this.go(`http://www.facebook.com/sharer/sharer.php?u=${url}`)}}>
            Facebook
          </button>
          <button className="social twitter"
                  onClick={ ()=> {this.go(`http://www.twitter.com/intent/tweet?url=${url}&text=${twitterText}`)}}>
            Twitter
          </button>
          <button className="social pinterest"
                  onClick={ ()=> {this.go(`http://pinterest.com/pin/create/button/?url=${url}&media=${img}&description=${pinterestText}`)}}>
            Pinterest
          </button>
          <button className="social google"
                  onClick={ ()=> {this.go(`http://plus.google.com/share?url=${url}`)}}>
            Google+
          </button>
          <button className="social reddit"
                  onClick={ ()=> {this.go(`http://www.reddit.com/submit?url=${url}`)}}>
            Reddit
          </button>
          <button className="social linkedin"
                  onClick={ ()=> {this.go(`http://www.linkedin.com/shareArticle?mini=true&url=${url}`)}}>
            LinkedIn
          </button>
          <button className="social whatsapp"
                  onClick={ ()=> {this.go(`whatsapp://send?text=${whatsappText}`)}}>
            WhatsApp
          </button>
        </p>
    );
  },

  go(url) {
    window.open(url);
  },

  render() {
    return (
        <div>
          <div id="jumbotron" className="finish">
            <p className="smalltext">&nbsp;</p>
          </div>
          <div className="bookletpage">

            <header>{ this.text("T0164") }</header>
            <p>
              <a className="final-link" href="/print" target="_blank">
                View all my answers on a printable page
              </a>

              {/* Take me to YearCompass.com */}
              <a className="final-link" href="http://yearcompass.com">
                { this.text("T0214") }
              </a>
            </p>

            {/* Share your achievement */}
            <header>{ this.text("T0178") }</header>
            <p>{ this.text("T0103") } { this.text("T0168") } { this.text("T0199") } { this.text("T0200") }</p>

            { this.renderShare() }

            <hr />

            {/* The small print */}
            <footer>{ this.text("T0170") }</footer>
            <footer>{ this.text("T0175") }</footer>
            <footer>{ this.text("T0174") }</footer>

            {/* Help us make YearCompass better. */}
            <header>{ this.text("T0179") }</header>
            <p>{ this.text("T0180") }</p>

            <div className="navbutton">
              <button onClick={ () => FlowRouter.go("feedback") }>
                { this.text("T0197") }
              </button>
            </div>
          </div>
        </div>);
  }
});
