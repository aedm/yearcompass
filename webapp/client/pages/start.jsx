StartPage = React.createClass({
  mixins: [BookletPage],

  render() {
    return (
        <div>
          <h1><img src="ui/logo_transparent_black_340.png" className="logo" /></h1>

          <div className="bookletpage">
            {/* What is this? */}
            <h3>{ this.text("T0003") }</h3>
            <p>{ this.text("T0004") }</p>

            {/* Why is this good for me? */}
            <h3>{ this.text("T0005") }</h3>
            <p>{ this.text("T0006") }</p>

            {/* What do I need? */}
            <h3>{ this.text("T0007") }</h3>
            <h4>{ this.text("T0008") }</h4>
            <p>{ this.text("T0009") }</p>
            <h4>{ this.text("T0010") }</h4>
            <p>{ this.text("T0011") }</p>

            {/* Get ready */}
            <h3>{ this.text("T0013") }</h3>

            <button className="navbutton" onClick={this.props.onTurn}>Start</button>
          </div>
        </div>);
  }
});
