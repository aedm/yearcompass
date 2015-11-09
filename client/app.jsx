
Meteor.startup(function () {
  ReactDOM.render(<App />, document.getElementById("questions"));
});

App = React.createClass({
  getInitialState() {
    return {
      language: Object.keys(translations)[0]
    }
  },

  text(token) {
    return translations[this.state.language][token];
  },

  selectLanguage(lang, event) {
    event.preventDefault();
    this.setState({language: lang});
  },

  render() {
    return (
      <div className="container">
        <p>Languages:
          { Object.keys(translations).map((t) =>
            <a href="#" key={t} onMouseDown={this.selectLanguage.bind(this, t)}>{t} </a> )}
        </p>

        {/* The past year */}
        <h2>{ this.text("T0014") }</h2>


        {/* Going through your calendar */}
        <h3>{ this.text("T0015") }</h3>
        { this.text("T0016") }
        <PlainTextQuestion question="past-flyover" />


        {/* This is what my past year was about */}
        <h3>{ this.text("T0017") }</h3>
        <h4>{ this.text("T0018") }</h4>
        { this.text("T0021") }
        <PlainTextQuestion question="past-about-family" />
        { this.text("T0022") }
        <PlainTextQuestion question="past-about-work" />
        { this.text("T0023") }
        <PlainTextQuestion question="past-about-belongings" />
        { this.text("T0024") }
        <PlainTextQuestion question="past-about-hobbies" />
        { this.text("T0025") }
        <PlainTextQuestion question="past-about-friends" />
        { this.text("T0026") }
        <PlainTextQuestion question="past-about-health" />
        { this.text("T0027") }
        <PlainTextQuestion question="past-about-intellectual" />
        { this.text("T0028") }
        <PlainTextQuestion question="past-about-emotional" />
        { this.text("T0029") }
        <PlainTextQuestion question="past-about-finances" />
        { this.text("T0030") }
        <PlainTextQuestion question="past-about-bucketlist" />
        <p><i>{ this.text("T0019") }</i></p>
        <p><i>{ this.text("T0020") }</i></p>


        {/* 6 sentences about my past year */}
        <h3>{ this.text("T0031") }</h3>
        { this.text("T0032") }
        <PlainTextQuestion question="past-sixsenteces-decision" />
        { this.text("T0033") }
        <PlainTextQuestion question="past-sixsenteces-lesson" />
        { this.text("T0034") }
        <PlainTextQuestion question="past-sixsenteces-risk" />
        { this.text("T0035") }
        <PlainTextQuestion question="past-sixsenteces-surprise" />
        { this.text("T0036") }
        <PlainTextQuestion question="past-sixsenteces-service" />
        { this.text("T0037") }
        <PlainTextQuestion question="past-sixsenteces-completed" />

      </div>
    );
  }
});

