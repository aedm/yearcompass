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
            <header>{ this.text("T0015") }</header>
            <p>{ this.text("T0016") }</p>
            <TextQuestion question="past-flyover"/>


            {/* This is what my past year was about */}
            <header>{ this.text("T0017") }</header>
            <p>{ this.text("T0018") }</p>

            <label>{ this.text("T0021") }</label>
            <TextQuestion question="past-about-family"/>
            <label>{ this.text("T0022") }</label>
            <TextQuestion question="past-about-work"/>
            <label>{ this.text("T0023") }</label>
            <TextQuestion question="past-about-belongings"/>
            <label>{ this.text("T0024") }</label>
            <TextQuestion question="past-about-hobbies"/>
            <label>{ this.text("T0025") }</label>
            <TextQuestion question="past-about-friends"/>
            <label>{ this.text("T0026") }</label>
            <TextQuestion question="past-about-health"/>
            <label>{ this.text("T0027") }</label>
            <TextQuestion question="past-about-intellectual"/>
            <label>{ this.text("T0028") }</label>
            <TextQuestion question="past-about-emotional"/>
            <label>{ this.text("T0029") }</label>
            <TextQuestion question="past-about-finances"/>
            <label>{ this.text("T0030") }</label>
            <TextQuestion question="past-about-bucketlist"/>

            <footer>{ this.text("T0019") }</footer>
            <footer>{ this.text("T0020") }</footer>


            {/* 6 sentences about my past year */}
            <header>{ this.text("T0031") }</header>

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
            <header>{ this.text("T0038") }</header>

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
            <header>{ this.text("T0045") }</header>
            <p>{ this.text("T0046") }</p>
            <TextQuestion question="past-bestmoments"/>

            {/* My three greatest accomplishments */}
            <header>{ this.text("T0047") }</header>
            <p>{ this.text("T0048") }</p>
            <TextQuestion question="past-3accomplish-success"/>
            <p>{ this.text("T0049") }</p>
            <TextQuestion question="past-3accomplish-achieve"/>
            <p>{ this.text("T0050") }</p>
            <TextQuestion question="past-3accomplish-who"/>

            {/* My three biggest challenges */}
            <header>{ this.text("T0051") }</header>
            <p>{ this.text("T0052") }</p>
            <TextQuestion question="past-3challenge-list"/>
            <p>{ this.text("T0053") }</p>
            <TextQuestion question="past-3challenge-help"/>
            <p>{ this.text("T0054") }</p>
            <TextQuestion question="past-3challenge-learned"/>

            {/* Forgiveness */}
            <header>{ this.text("T0055") }</header>
            <p>{ this.text("T0056") }</p>
            <TextQuestion question="past-forgive"/>
            <footer>{ this.text("T0057") }</footer>

            {/* Letting go */}
            <header>{ this.text("T0058") }</header>
            <p>{ this.text("T0059") }</p>
            <TextQuestion question="past-lettinggo"/>

            {/* The past year in 3 words */}
            <header>{ this.text("T0060") }</header>
            <p>{ this.text("T0061") }</p>
            <TextQuestion question="past-3words"/>

            {/* The book of my past year */}
            <header>{ this.text("T0062") }</header>
            <p>{ this.text("T0063") }</p>
            <TextQuestion question="past-book"/>
            <footer>{ this.text("T0064") }</footer>

            {/* Farewell to your last year */}
            <header>{ this.text("T0065") }</header>
            <p>{ this.text("T0066") }</p>
            <TextQuestion question="past-farewell"/>

            {/* You’re done with the past year :) */}
            <header>{ this.text("T0067") }</header>
            <p>{ this.text("T0068") }</p>
            <p>{ this.text("T0069") }</p>
            <p>{ this.text("T0070") }</p>
            <p>{ this.text("T0071") }</p>

            <div className="navbutton">
              <button className="navbutton" onClick={this.props.onTurn}>Next Year</button>
            </div>
          </div>
        </div>);
  }
});
