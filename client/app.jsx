
Meteor.startup(function () {
  ReactDOM.render(<App />, document.getElementById("questions"));
});

Meteor.subscribe("answers");

App = React.createClass({
  mixins: [ReactMeteorData],

  getInitialState() {
    return {
      language: Object.keys(translations)[0]
    }
  },

  getMeteorData() {
    return {
      userId: Meteor.userId()
    };
  },

  text(token) {
    return translations[this.state.language][token];
  },

  selectLanguage(lang, event) {
    event.preventDefault();
    this.setState({language: lang});
  },

  renderBooklet() {
    return (
      <div className="booklet">
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

        {/*  */}
        <h3>{ this.text("T00") }</h3>
        <p>{ this.text("T00") }</p>

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

        {/* 6 questions about my past year */}
        <h3>{ this.text("T0038") }</h3>
        { this.text("T0039") }
        <PlainTextQuestion question="past-sixquestions-proud" />
        { this.text("T0040") }
        <PlainTextQuestion question="past-sixquestions-influencedby" />
        { this.text("T0041") }
        <PlainTextQuestion question="past-sixquestions-influence" />
        { this.text("T0042") }
        <PlainTextQuestion question="past-sixquestions-notaccomplish" />
        { this.text("T0043") }
        <PlainTextQuestion question="past-sixquestions-discover" />
        { this.text("T0044") }
        <PlainTextQuestion question="past-sixquestions-grateful" />

        {/* Best moments */}
        <h3>{ this.text("T0045") }</h3>
        { this.text("T0046") }
        <PlainTextQuestion question="past-bestmoments" />

        {/* My three greatest accomplishments */}
        <h3>{ this.text("T0047") }</h3>
        { this.text("T0048") }
        <PlainTextQuestion question="past-3accomplish-success" />
        { this.text("T0049") }
        <PlainTextQuestion question="past-3accomplish-achieve" />
        { this.text("T0050") }
        <PlainTextQuestion question="past-3accomplish-who" />

        {/* My three biggest challenges */}
        <h3>{ this.text("T0051") }</h3>
        { this.text("T0052") }
        <PlainTextQuestion question="past-3challenge-list" />
        { this.text("T0053") }
        <PlainTextQuestion question="past-3challenge-help" />
        { this.text("T0054") }
        <PlainTextQuestion question="past-3challenge-learned" />

        {/* Forgiveness */}
        <h3>{ this.text("T0055") }</h3>
        { this.text("T0056") }
        <PlainTextQuestion question="past-forgive" />
        <p><i>{ this.text("T0057") }</i></p>

        {/* Letting go */}
        <h3>{ this.text("T0058") }</h3>
        { this.text("T0059") }
        <PlainTextQuestion question="past-lettinggo" />

        {/* The past year in 3 words */}
        <h3>{ this.text("T0060") }</h3>
        { this.text("T0061") }
        <PlainTextQuestion question="past-3words" />

        {/* The book of my past year */}
        <h3>{ this.text("T0062") }</h3>
        { this.text("T0063") }
        <PlainTextQuestion question="past-book" />
        <p><i>{ this.text("T0064") }</i></p>

        {/* Farewell to your last year */}
        <h3>{ this.text("T0065") }</h3>
        { this.text("T0066") }
        <PlainTextQuestion question="past-farewell" />

        {/* You’re done with the past year :) */}
        <h3>{ this.text("T0067") }</h3>
        <p>{ this.text("T0068") }</p>
        <p>{ this.text("T0069") }</p>
        <p>{ this.text("T0070") }</p>
        <p>{ this.text("T0071") }</p>


        {/* The year ahead */}
        <h1>2016</h1>
        <h1>{ this.text("T0072") }</h1>

        {/* Dare to dream big */}
        <h3>{ this.text("T0073") }</h3>
        { this.text("T0074") }
        <PlainTextQuestion question="ahead-dreambig" />

        {/* This is what my next year is about */}
        <h3>{ this.text("T0075") }</h3>
        <h4>{ this.text("T0076") }</h4>
        { this.text("T0021") }
        <PlainTextQuestion question="ahead-about-family" />
        { this.text("T0022") }
        <PlainTextQuestion question="ahead-about-work" />
        { this.text("T0023") }
        <PlainTextQuestion question="ahead-about-belongings" />
        { this.text("T0024") }
        <PlainTextQuestion question="ahead-about-hobbies" />
        { this.text("T0025") }
        <PlainTextQuestion question="ahead-about-friends" />
        { this.text("T0026") }
        <PlainTextQuestion question="ahead-about-health" />
        { this.text("T0027") }
        <PlainTextQuestion question="ahead-about-intellectual" />
        { this.text("T0028") }
        <PlainTextQuestion question="ahead-about-emotional" />
        { this.text("T0029") }
        <PlainTextQuestion question="ahead-about-finances" />
        { this.text("T0030") }
        <PlainTextQuestion question="ahead-about-bucketlist" />
        <p><i>{ this.text("T0077") }</i></p>
        <p><i>{ this.text("T0078") }</i></p>

        {/* The year ahead of me */}
        <h3>{ this.text("T0081") }</h3>
        { this.text("T0082") }
        <PlainTextQuestion question="ahead-calendar" />

        {/* Magical tricola for the year ahead */}
        <h3>{ this.text("T0084") }</h3>
        { this.text("T0085") }
        <PlainTextQuestion question="ahead-triplets-lovemyself" />
        { this.text("T0086") }
        <PlainTextQuestion question="ahead-triplets-letgo" />
        { this.text("T0087") }
        <PlainTextQuestion question="ahead-triplets-achieve" />
        { this.text("T0088") }
        <PlainTextQuestion question="ahead-triplets-pillars" />
        { this.text("T0089") }
        <PlainTextQuestion question="ahead-triplets-discover" />
        { this.text("T0090") }
        <PlainTextQuestion question="ahead-triplets-sayno" />
        { this.text("T0091") }
        <PlainTextQuestion question="ahead-triplets-cozy" />
        { this.text("T0092") }
        <PlainTextQuestion question="ahead-triplets-morning" />
        { this.text("T0093") }
        <PlainTextQuestion question="ahead-triplets-pamper" />
        { this.text("T0094") }
        <PlainTextQuestion question="ahead-triplets-visit" />
        { this.text("T0095") }
        <PlainTextQuestion question="ahead-triplets-connect" />
        { this.text("T0096") }
        <PlainTextQuestion question="ahead-triplets-reward" />

        {/* 6 sentences about my next year */}
        <h3>{ this.text("T0097") }</h3>
        { this.text("T0098") }
        <PlainTextQuestion question="ahead-6sentences-finally" />
        { this.text("T0099") }
        <PlainTextQuestion question="ahead-6sentences-bravest" />
        { this.text("T0100") }
        <PlainTextQuestion question="ahead-6sentences-advise" />
        { this.text("T0101") }
        <PlainTextQuestion question="ahead-6sentences-habit" />
        { this.text("T0102") }
        <PlainTextQuestion question="ahead-6sentences-procrastinate" />
        { this.text("T0103") }
        <PlainTextQuestion question="ahead-6sentences-energy" />

        {/* 6 more sentences about my next year */}
        <h3>{ this.text("T0104") }</h3>
        { this.text("T0105") }
        <PlainTextQuestion question="ahead-6sentences-dream" />
        { this.text("T0106") }
        <PlainTextQuestion question="ahead-6sentences-plan" />
        { this.text("T0107") }
        <PlainTextQuestion question="ahead-6sentences-feeling" />
        { this.text("T0108") }
        <PlainTextQuestion question="ahead-6sentences-sayno" />
        { this.text("T0109") }
        <PlainTextQuestion question="ahead-6sentences-sayyes" />
        { this.text("T0110") }
        <PlainTextQuestion question="ahead-6sentences-special" />

        {/* 30 day challenge */}
        <h3>{ this.text("T0111") }</h3>
        { this.text("T0129") }
        <PlainTextQuestion question="ahead-30day" />

        {/* My word for the year ahead */}
        <h3>{ this.text("T0130") }</h3>
        { this.text("T0131") }
        <PlainTextQuestion question="ahead-myword" />

        {/* Secret wish */}
        <h3>{ this.text("T0132") }</h3>
        { this.text("T0133") }
        <PlainTextQuestion question="ahead-secretwish" />

        {/* I believe anything is possible this year. */}
        <h4><input type="checkbox" />{ this.text("T0134") }</h4>

        {/* You’re done with your year planning :). */}
        <h3>{ this.text("T0137") }</h3>
        <p>{ this.text("T00138") }</p>
        <p>{ this.text("T00139") }</p>
        <p>{ this.text("T00140") }</p>
        <p>#yearcompass #yearbehind #yearplanning #yearahead</p>

        <p><i>{ this.text("T0141") }</i></p>
        <p><i>{ this.text("T0142") }</i></p>

      </div>
    );
  },

  render() {
    return (
      <div className="container">
        <p>Languages:
          { Object.keys(translations).map((t) =>
            <a href="#" key={t} onMouseDown={this.selectLanguage.bind(this, t)}>{t} </a> )}
        </p>

        <LoginWrapper />
        <p>Meteor.userId: { this.data.userId } </p>

        { this.data.userId != null ? this.renderBooklet() : null }
      </div>
    );
  }
});

