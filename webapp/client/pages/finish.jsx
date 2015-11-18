FinishPage = React.createClass({
  mixins: [BookletPage],

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

          </div>
        </div>);
  }
});
