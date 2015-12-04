PastYearPage = React.createClass({
  mixins: [BookletPage],

  render() {
    return (
        <div>
          <div id="jumbotron">
            <p>{ this.text("T0031") }</p>
          </div>

          <div className="bookletpage">

            {/* Going through your calendar */}
            <header>{ this.text("T0032") }</header>
            <p>{ this.text("T0034") }</p>
            <TextQuestion question="past-flyover"/>


            {/* This is what my past year was about */}
            <header>{ this.text("T0036") }</header>
            <p>{ this.text("T0188") }</p>

            <label>{ this.text("T0038") }</label>
            <TextQuestion question="past-about-family"/>
            <label>{ this.text("T0043") }</label>
            <TextQuestion question="past-about-work"/>
            <label>{ this.text("T0039") }</label>
            <TextQuestion question="past-about-belongings"/>
            <label>{ this.text("T0044") }</label>
            <TextQuestion question="past-about-hobbies"/>
            <label>{ this.text("T0040") }</label>
            <TextQuestion question="past-about-friends"/>
            <label>{ this.text("T0045") }</label>
            <TextQuestion question="past-about-health"/>
            <label>{ this.text("T0041") }</label>
            <TextQuestion question="past-about-intellectual"/>
            <label>{ this.text("T0046") }</label>
            <TextQuestion question="past-about-emotional"/>
            <label>{ this.text("T0042") }</label>
            <TextQuestion question="past-about-finances"/>
            <label>{ this.text("T0187") }</label>
            <TextQuestion question="past-about-bucketlist"/>

            {/* 6 sentences about my past year */}
            <header>{ this.text("T0051") }</header>

            <p>{ this.text("T0052") }</p>
            <TextQuestion question="past-sixsenteces-decision"/>
            <p>{ this.text("T0053") }</p>
            <TextQuestion question="past-sixsenteces-lesson"/>
            <p>{ this.text("T0054") }</p>
            <TextQuestion question="past-sixsenteces-risk"/>
            <p>{ this.text("T0055") }</p>
            <TextQuestion question="past-sixsenteces-surprise"/>
            <p>{ this.text("T0056") }</p>
            <TextQuestion question="past-sixsenteces-service"/>
            <p>{ this.text("T0057") }</p>
            <TextQuestion question="past-sixsenteces-completed"/>

            {/* 6 questions about my past year */}
            <header>{ this.text("T0059") }</header>

            <p>{ this.text("T0060") }</p>
            <TextQuestion question="past-sixquestions-proud"/>
            <p>{ this.text("T0061") }</p>
            <TextQuestion question="past-sixquestions-influencedby"/>
            <p>{ this.text("T0062") }</p>
            <TextQuestion question="past-sixquestions-influence"/>
            <p>{ this.text("T0063") }</p>
            <TextQuestion question="past-sixquestions-notaccomplish"/>
            <p>{ this.text("T0064") }</p>
            <TextQuestion question="past-sixquestions-discover"/>
            <p>{ this.text("T0065") }</p>
            <TextQuestion question="past-sixquestions-grateful"/>

            {/* Best moments */}
            <header>{ this.text("T0067") }</header>
            <p>{ this.text("T0069") }</p>
            <TextQuestion question="past-bestmoments"/>

            {/* My three greatest accomplishments */}
            <header>{ this.text("T0071") }</header>
            <p>{ this.text("T0072") }</p>
            <TextQuestion question="past-3accomplish-success"/>
            <p>{ this.text("T0073") }</p>
            <TextQuestion question="past-3accomplish-achieve"/>
            <p>{ this.text("T0074") }</p>
            <TextQuestion question="past-3accomplish-who"/>

            {/* My three biggest challenges */}
            <header>{ this.text("T0075") }</header>
            <p>{ this.text("T0076") }</p>
            <TextQuestion question="past-3challenge-list"/>
            <p>{ this.text("T0077") }</p>
            <TextQuestion question="past-3challenge-help"/>
            <p>{ this.text("T0078") }</p>
            <TextQuestion question="past-3challenge-learned"/>

            {/* Forgiveness */}
            <header>{ this.text("T0080") }</header>
            <p>{ this.text("T0082") }</p>
            <TextQuestion question="past-forgive"/>
            <footer>{ this.text("T0083") }</footer>

            {/* Letting go */}
            <header>{ this.text("T0085") }</header>
            <p>{ this.text("T0087") }</p>
            <TextQuestion question="past-lettinggo"/>

            {/* The past year in 3 words */}
            <header>{ this.text("T0089") }</header>
            <p>{ this.text("T0090") }</p>
            <TextQuestion question="past-3words"/>

            {/* The book of my past year */}
            <header>{ this.text("T0091") }</header>
            <p>{ this.text("T0189") }</p>
            <TextQuestion question="past-book"/>

            {/* Farewell to your last year */}
            <header>{ this.text("T0094") }</header>
            <p>{ this.text("T0096") }</p>
            <TextQuestion question="past-farewell"/>

            {/* You have just finished the first part */}
            <header>{ this.text("T0099") }</header>
            <p>{ this.text("T0100") }</p>
            <p>{ this.text("T0101") }</p>

            <div className="navbutton">
              <button className="navbutton" onClick={ () => FlowRouter.go("next") }>
                { this.text("T0194") }
              </button>
            </div>
          </div>
        </div>);
  }
});
