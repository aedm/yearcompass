
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
        <TextQuestion question="past-flyover" />


        {/* This is what my past year was about */}
        <h3>{ this.text("T0017") }</h3>
        <h4>{ this.text("T0018") }</h4>
        { this.text("T0021") }
        <TextQuestion question="past-about-family" />
        { this.text("T0022") }
        <TextQuestion question="past-about-work" />
        { this.text("T0023") }
        <TextQuestion question="past-about-belongings" />
        { this.text("T0024") }
        <TextQuestion question="past-about-hobbies" />
        { this.text("T0025") }
        <TextQuestion question="past-about-friends" />
        { this.text("T0026") }
        <TextQuestion question="past-about-health" />
        { this.text("T0027") }
        <TextQuestion question="past-about-intellectual" />
        { this.text("T0028") }
        <TextQuestion question="past-about-emotional" />
        { this.text("T0029") }
        <TextQuestion question="past-about-finances" />
        { this.text("T0030") }
        <TextQuestion question="past-about-bucketlist" />
        <p><i>{ this.text("T0019") }</i></p>
        <p><i>{ this.text("T0020") }</i></p>


        {/* 6 sentences about my past year */}
        <h3>{ this.text("T0031") }</h3>
        { this.text("T0032") }
        <TextQuestion question="past-sixsenteces-decision" />
        { this.text("T0033") }
        <TextQuestion question="past-sixsenteces-lesson" />
        { this.text("T0034") }
        <TextQuestion question="past-sixsenteces-risk" />
        { this.text("T0035") }
        <TextQuestion question="past-sixsenteces-surprise" />
        { this.text("T0036") }
        <TextQuestion question="past-sixsenteces-service" />
        { this.text("T0037") }
        <TextQuestion question="past-sixsenteces-completed" />

        {/* 6 questions about my past year */}
        <h3>{ this.text("T0038") }</h3>
        { this.text("T0039") }
        <TextQuestion question="past-sixquestions-proud" />
        { this.text("T0040") }
        <TextQuestion question="past-sixquestions-influencedby" />
        { this.text("T0041") }
        <TextQuestion question="past-sixquestions-influence" />
        { this.text("T0042") }
        <TextQuestion question="past-sixquestions-notaccomplish" />
        { this.text("T0043") }
        <TextQuestion question="past-sixquestions-discover" />
        { this.text("T0044") }
        <TextQuestion question="past-sixquestions-grateful" />

        {/* Best moments */}
        <h3>{ this.text("T0045") }</h3>
        { this.text("T0046") }
        <TextQuestion question="past-bestmoments" />

        {/* My three greatest accomplishments */}
        <h3>{ this.text("T0047") }</h3>
        { this.text("T0048") }
        <TextQuestion question="past-3accomplish-success" />
        { this.text("T0049") }
        <TextQuestion question="past-3accomplish-achieve" />
        { this.text("T0050") }
        <TextQuestion question="past-3accomplish-who" />

        {/* My three biggest challenges */}
        <h3>{ this.text("T0051") }</h3>
        { this.text("T0052") }
        <TextQuestion question="past-3challenge-list" />
        { this.text("T0053") }
        <TextQuestion question="past-3challenge-help" />
        { this.text("T0054") }
        <TextQuestion question="past-3challenge-learned" />

        {/* Forgiveness */}
        <h3>{ this.text("T0055") }</h3>
        { this.text("T0056") }
        <TextQuestion question="past-forgive" />
        <p><i>{ this.text("T0057") }</i></p>

        {/* Letting go */}
        <h3>{ this.text("T0058") }</h3>
        { this.text("T0059") }
        <TextQuestion question="past-lettinggo" />

        {/* The past year in 3 words */}
        <h3>{ this.text("T0060") }</h3>
        { this.text("T0061") }
        <TextQuestion question="past-3words" />

        {/* The book of my past year */}
        <h3>{ this.text("T0062") }</h3>
        { this.text("T0063") }
        <TextQuestion question="past-book" />
        <p><i>{ this.text("T0064") }</i></p>

        {/* Farewell to your last year */}
        <h3>{ this.text("T0065") }</h3>
        { this.text("T0066") }
        <TextQuestion question="past-farewell" />

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
        <TextQuestion question="ahead-dreambig" />

        {/* This is what my next year is about */}
        <h3>{ this.text("T0075") }</h3>
        <h4>{ this.text("T0076") }</h4>
        { this.text("T0021") }
        <TextQuestion question="ahead-about-family" />
        { this.text("T0022") }
        <TextQuestion question="ahead-about-work" />
        { this.text("T0023") }
        <TextQuestion question="ahead-about-belongings" />
        { this.text("T0024") }
        <TextQuestion question="ahead-about-hobbies" />
        { this.text("T0025") }
        <TextQuestion question="ahead-about-friends" />
        { this.text("T0026") }
        <TextQuestion question="ahead-about-health" />
        { this.text("T0027") }
        <TextQuestion question="ahead-about-intellectual" />
        { this.text("T0028") }
        <TextQuestion question="ahead-about-emotional" />
        { this.text("T0029") }
        <TextQuestion question="ahead-about-finances" />
        { this.text("T0030") }
        <TextQuestion question="ahead-about-bucketlist" />
        <p><i>{ this.text("T0077") }</i></p>
        <p><i>{ this.text("T0078") }</i></p>

        {/* The year ahead of me */}
        <h3>{ this.text("T0081") }</h3>
        { this.text("T0082") }
        <TextQuestion question="ahead-calendar" />

        {/* Magical tricola for the year ahead */}
        <h3>{ this.text("T0084") }</h3>
        { this.text("T0085") }
        <TextQuestion question="ahead-triplets-lovemyself" />
        { this.text("T0086") }
        <TextQuestion question="ahead-triplets-letgo" />
        { this.text("T0087") }
        <TextQuestion question="ahead-triplets-achieve" />
        { this.text("T0088") }
        <TextQuestion question="ahead-triplets-pillars" />
        { this.text("T0089") }
        <TextQuestion question="ahead-triplets-discover" />
        { this.text("T0090") }
        <TextQuestion question="ahead-triplets-sayno" />
        { this.text("T0091") }
        <TextQuestion question="ahead-triplets-cozy" />
        { this.text("T0092") }
        <TextQuestion question="ahead-triplets-morning" />
        { this.text("T0093") }
        <TextQuestion question="ahead-triplets-pamper" />
        { this.text("T0094") }
        <TextQuestion question="ahead-triplets-visit" />
        { this.text("T0095") }
        <TextQuestion question="ahead-triplets-connect" />
        { this.text("T0096") }
        <TextQuestion question="ahead-triplets-reward" />

        {/* 6 sentences about my next year */}
        <h3>{ this.text("T0097") }</h3>
        { this.text("T0098") }
        <TextQuestion question="ahead-6sentences-finally" />
        { this.text("T0099") }
        <TextQuestion question="ahead-6sentences-bravest" />
        { this.text("T0100") }
        <TextQuestion question="ahead-6sentences-advise" />
        { this.text("T0101") }
        <TextQuestion question="ahead-6sentences-habit" />
        { this.text("T0102") }
        <TextQuestion question="ahead-6sentences-procrastinate" />
        { this.text("T0103") }
        <TextQuestion question="ahead-6sentences-energy" />

        {/* 6 more sentences about my next year */}
        <h3>{ this.text("T0104") }</h3>
        { this.text("T0105") }
        <TextQuestion question="ahead-6sentences-dream" />
        { this.text("T0106") }
        <TextQuestion question="ahead-6sentences-plan" />
        { this.text("T0107") }
        <TextQuestion question="ahead-6sentences-feeling" />
        { this.text("T0108") }
        <TextQuestion question="ahead-6sentences-sayno" />
        { this.text("T0109") }
        <TextQuestion question="ahead-6sentences-sayyes" />
        { this.text("T0110") }
        <TextQuestion question="ahead-6sentences-special" />

        {/* 30 day challenge */}
        <h3>{ this.text("T0111") }</h3>
        { this.text("T0129") }
        <TextQuestion question="ahead-30day" />

        {/* My word for the year ahead */}
        <h3>{ this.text("T0130") }</h3>
        { this.text("T0131") }
        <TextQuestion question="ahead-myword" />

        {/* Secret wish */}
        <h3>{ this.text("T0132") }</h3>
        { this.text("T0133") }
        <TextQuestion question="ahead-secretwish" />

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

