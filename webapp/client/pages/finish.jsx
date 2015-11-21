FinishPage = React.createClass({
  mixins: [BookletPage],

  renderShare() {
    let url = "http://yearcompass.com";
    let img = "http://www.yearcompass.com/wp-content/uploads/2014/12/zen_share1.png";
    let title = "YearCompass";

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
        </p>
    );
  },

  render() {
    return (
        <div>
          <div id="jumbotron">
            <p className="logo">&nbsp;</p>
          </div>
          <div className="bookletpage">

            {/* You’re done with your year planning :). */}
            <header>{ this.text("T0137") }</header>
            <p>{ this.text("T0138") }</p>
            <p>{ this.text("T0139") }</p>
            <p>{ this.text("T0140") }</p>
            <p>#yearcompass #yearbehind #yearplanning #yearahead</p>

            <footer>{ this.text("T0141") }</footer>
            <footer>{ this.text("T0142") }</footer>

            <header>Share it</header>
            { this.renderShare() }
          </div>
        </div>);
  }
});
