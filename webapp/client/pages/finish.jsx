FinishPage = React.createClass({
  mixins: [BookletPage],

  renderShare() {
    let url = this.text("T0171");
    let img = "http://www.yearcompass.com/wp-content/uploads/2014/12/zen_share1.png";
    let title = this.text("T0191");

    return (
        <p className="share">
          <a href={`http://www.facebook.com/sharer/sharer.php?u=${url}&t=${title}`}
             className="share-button facebook" target="_blank">Facebook</a>
          <a href={`http://www.twitter.com/intent/tweet?url=${url}&text=${title}`}
             className="share-button twitter" target="_blank">Twitter</a>
          <a href={`http://pinterest.com/pin/create/button/?url=${url}&media=${img}&description=${title}`}
             className="share-button pinterest" target="_blank">Pinterest</a>
          <a href={`http://www.reddit.com/submit?url=${url}`}
             className="share-button reddit" target="_blank">Reddit</a>
          <a href={`http://plus.google.com/share?url=${url}`}
             className="share-button google" target="_blank">Google+</a>
          <a href={`http://www.linkedin.com/shareArticle?mini=true&url=${url}`}
             className="share-button linkedin" target="_blank">LinkedIn</a>
          <a href={`whatsapp://send?text=${url}`}
             className="share-button linkedin" target="_blank">WhatsApp</a>
        </p>
    );
  },

  render() {
    return (
        <div>
          <div id="jumbotron" className="finish">
            <p className="smalltext">{ this.text("T0164") }</p>
          </div>
          <div className="bookletpage">

            {/* Share your achievement */}
            <header>{ this.text("T0178") }</header>
            <p>{ this.text("T0103") }</p>
            <p>{ this.text("T0168") }</p>

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
