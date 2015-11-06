
Meteor.startup(function () {
  ReactDOM.render(<App />, document.getElementById("questions"));
});

App = React.createClass({
  getInitialState() {
    return {}
  },

  render() {
    return (
      <div className="container">
        Első kérdés
        <PlainTextQuestion question="elso" />
        Második kérdés
        <PlainTextQuestion question="masodik" />
        Harmadik kérdés
        <PlainTextQuestion question="harmadik" />
      </div>
    );
  }
});

