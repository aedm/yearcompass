StartPage = React.createClass({
  mixins: [BookletPage],

  render() {
    return (
      <div className="bookletpage">
        {/* The past year */}
        <h1>{ this.text("T0014") }</h1>

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

        <button onClick={this.props.onTurn}>Start</button>
      </div>);
  }
});
