FinishPage = React.createClass({
  mixins: [BookletPage],

  render() {
    return (
        <div>
          <div id="jumbotron">
            <p><img src="ui/logo_transparent_white_340_shadow.png" className="logo"/></p>
          </div>
          <div className="bookletpage">

            {/* You’re done with your year planning :). */}
            <h3>{ this.text("T0137") }</h3>
            <p>{ this.text("T00138") }</p>
            <p>{ this.text("T00139") }</p>
            <p>{ this.text("T00140") }</p>
            <p>#yearcompass #yearbehind #yearplanning #yearahead</p>

            <p><i>{ this.text("T0141") }</i></p>
            <p><i>{ this.text("T0142") }</i></p>

          </div>
        </div>);
  }
});
