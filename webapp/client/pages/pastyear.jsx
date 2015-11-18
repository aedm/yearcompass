PastYearPage = React.createClass({
  mixins: [BookletPage],

  render() {
    return (
        <div>
          <div id="jumbotron">
            <p>{ this.text("T0014") }</p>
          </div>

          <div className="bookletpage">

            {/* Going through your calendar */}
            <h3>{ this.text("T0015") }</h3>
            <p>{ this.text("T0016") }</p>
            <TextQuestion question="past-flyover"/>


            {/* This is what my past year was about */}
            <h3>{ this.text("T0017") }</h3>
            <h4>{ this.text("T0018") }</h4>
            <p>{ this.text("T0021") }</p>
            <TextQuestion question="past-about-family"/>
            <p>{ this.text("T0022") }</p>
            <TextQuestion question="past-about-work"/>
            <p>{ this.text("T0023") }</p>
            <TextQuestion question="past-about-belongings"/>
            <p>{ this.text("T0024") }</p>
            <TextQuestion question="past-about-hobbies"/>
            <p>{ this.text("T0025") }</p>
            <TextQuestion question="past-about-friends"/>
            <p>{ this.text("T0026") }</p>
            <TextQuestion question="past-about-health"/>
            <p>{ this.text("T0027") }</p>
            <TextQuestion question="past-about-intellectual"/>
            <p>{ this.text("T0028") }</p>
            <TextQuestion question="past-about-emotional"/>
            <p>{ this.text("T0029") }</p>
            <TextQuestion question="past-about-finances"/>
            <p>{ this.text("T0030") }</p>
            <TextQuestion question="past-about-bucketlist"/>
            <p><i>{ this.text("T0019") }</i></p>
            <p><i>{ this.text("T0020") }</i></p>


            {/* 6 sentences about my past year */}
            <h3>{ this.text("T0031") }</h3>
            <p>{ this.text("T0032") }</p>
            <TextQuestion question="past-sixsenteces-decision"/>
            <p>{ this.text("T0033") }</p>
            <TextQuestion question="past-sixsenteces-lesson"/>
            <p>{ this.text("T0034") }</p>
            <TextQuestion question="past-sixsenteces-risk"/>
            <p>{ this.text("T0035") }</p>
            <TextQuestion question="past-sixsenteces-surprise"/>
            <p>{ this.text("T0036") }</p>
            <TextQuestion question="past-sixsenteces-service"/>
            <p>{ this.text("T0037") }</p>
            <TextQuestion question="past-sixsenteces-completed"/>

            {/* 6 questions about my past year */}
            <h3>{ this.text("T0038") }</h3>
            <p>{ this.text("T0039") }</p>
            <TextQuestion question="past-sixquestions-proud"/>
            <p>{ this.text("T0040") }</p>
            <TextQuestion question="past-sixquestions-influencedby"/>
            <p>{ this.text("T0041") }</p>
            <TextQuestion question="past-sixquestions-influence"/>
            <p>{ this.text("T0042") }</p>
            <TextQuestion question="past-sixquestions-notaccomplish"/>
            <p>{ this.text("T0043") }</p>
            <TextQuestion question="past-sixquestions-discover"/>
            <p>{ this.text("T0044") }</p>
            <TextQuestion question="past-sixquestions-grateful"/>

            {/* Best moments */}
            <h3>{ this.text("T0045") }</h3>
            <p>{ this.text("T0046") }</p>
            <TextQuestion question="past-bestmoments"/>

            {/* My three greatest accomplishments */}
            <h3>{ this.text("T0047") }</h3>
            <p>{ this.text("T0048") }</p>
            <TextQuestion question="past-3accomplish-success"/>
            <p>{ this.text("T0049") }</p>
            <TextQuestion question="past-3accomplish-achieve"/>
            <p>{ this.text("T0050") }</p>
            <TextQuestion question="past-3accomplish-who"/>

            {/* My three biggest challenges */}
            <h3>{ this.text("T0051") }</h3>
            <p>{ this.text("T0052") }</p>
            <TextQuestion question="past-3challenge-list"/>
            <p>{ this.text("T0053") }</p>
            <TextQuestion question="past-3challenge-help"/>
            <p>{ this.text("T0054") }</p>
            <TextQuestion question="past-3challenge-learned"/>

            {/* Forgiveness */}
            <h3>{ this.text("T0055") }</h3>
            <p>{ this.text("T0056") }</p>
            <TextQuestion question="past-forgive"/>
            <p><i>{ this.text("T0057") }</i></p>

            {/* Letting go */}
            <h3>{ this.text("T0058") }</h3>
            <p>{ this.text("T0059") }</p>
            <TextQuestion question="past-lettinggo"/>

            {/* The past year in 3 words */}
            <h3>{ this.text("T0060") }</h3>
            <p>{ this.text("T0061") }</p>
            <TextQuestion question="past-3words"/>

            {/* The book of my past year */}
            <h3>{ this.text("T0062") }</h3>
            <p>{ this.text("T0063") }</p>
            <TextQuestion question="past-book"/>
            <p><i>{ this.text("T0064") }</i></p>

            {/* Farewell to your last year */}
            <h3>{ this.text("T0065") }</h3>
            <p>{ this.text("T0066") }</p>
            <TextQuestion question="past-farewell"/>

            {/* You’re done with the past year :) */}
            <h3>{ this.text("T0067") }</h3>
            <p>{ this.text("T0068") }</p>
            <p>{ this.text("T0069") }</p>
            <p>{ this.text("T0070") }</p>
            <p>{ this.text("T0071") }</p>

            <button className="navbutton" onClick={this.props.onTurn}>Next Year</button>

          </div>
        </div>);
  }
});
