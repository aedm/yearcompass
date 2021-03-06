import React from 'react';

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
            <p className="final-links">
              <em>
                <a href={`http://5.101.96.40/yearcompass?id=${Meteor.userId()}-${this.props.language}` }
                   target="_blank">
                  <i className="fa fa-download" />{ this.text("T0215") }
                </a>
              </em>
              <em>
                <a href={`/print?lang=${this.props.language}`} target="_blank">
                  <i className="fa fa-print" />{ this.text("T0210") }
                </a>
              </em>
              <em>
                <a href="/feedback">
                  <i className="fa fa-star-o" />{ this.text("T0180") }
                </a>
              </em>
              <em>
                <a href="http://yearcompass.com">
                  <i className="fa fa-link" />{ this.text("T0214") }
                </a>
              </em>
            </p>

            {/* Share your achievement */}
            <header>{ this.text("T0178") }</header>
            <p>{ this.text("T0103") } { this.text("T0168") } { this.text("T0199") } { this.text("T0200") }</p>

            { this.renderShare() }

            <hr />

            {/* The small print */}
            <footer>{ this.text("T0170") }</footer>
            <footer>{ this.text("T0175") + " " }
              <a href="http://creativecommons.org/choose/results-one?license_code=by-nc-sa&amp;jurisdiction=&amp;version=4.0&amp">
                <i className="fa fa-external-link" />
              </a>
            </footer>
            <footer>{ this.text("T0174") }</footer>
          </div>
        </div>);
  }
});
