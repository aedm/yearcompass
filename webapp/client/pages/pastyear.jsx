PastYearPage = React.createClass({
  mixins: [BookletPage],

  render() {
    return (
      <div className="bookletpage">

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

        <button onClick={this.props.onTurn}>Next Year</button>

      </div>);
  }
});
