import React from 'react';

PastYearPage = React.createClass({
  mixins: [BookletPage],

  render() {
    return (
        <div>
          <div id="jumbotron" className="pastyear">
            <p>{ this.text("T0031") }</p>
          </div>

          <div className="bookletpage">
            <PastYearQuestions language={this.props.language} />

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

PastYearQuestions = React.createClass({
  mixins: [BookletPage],

  render() {
    return (
        <div>
          {/* Going through your calendar */}
          <header>{ this.text("T0032") }</header>
          <p>{ this.text("T0034") }</p>
          { this.ask("past-flyover") }


          {/* This is what my past year was about */}
          <header>{ this.text("T0036") }</header>
          <p>{ this.text("T0188") }</p>

          <label>{ this.text("T0038") }</label>
          { this.ask("past-about-family") }
          <label>{ this.text("T0043") }</label>
          { this.ask("past-about-work") }
          <label>{ this.text("T0039") }</label>
          { this.ask("past-about-belongings") }
          <label>{ this.text("T0044") }</label>
          { this.ask("past-about-hobbies") }
          <label>{ this.text("T0040") }</label>
          { this.ask("past-about-friends") }
          <label>{ this.text("T0045") }</label>
          { this.ask("past-about-health") }
          <label>{ this.text("T0041") }</label>
          { this.ask("past-about-intellectual") }
          <label>{ this.text("T0046") }</label>
          { this.ask("past-about-emotional") }
          <label>{ this.text("T0042") }</label>
          { this.ask("past-about-finances") }
          <label>{ this.text("T0187") }*</label>
          { this.ask("past-about-bucketlist") }
          <footer>* { this.text("T0049") }</footer>

          {/* 6 sentences about my past year */}
          <header>{ this.text("T0051") }</header>

          <p>{ this.text("T0052") }</p>
          { this.ask("past-sixsenteces-decision") }
          <p>{ this.text("T0053") }</p>
          { this.ask("past-sixsenteces-lesson") }
          <p>{ this.text("T0054") }</p>
          { this.ask("past-sixsenteces-risk") }
          <p>{ this.text("T0055") }</p>
          { this.ask("past-sixsenteces-surprise") }
          <p>{ this.text("T0056") }</p>
          { this.ask("past-sixsenteces-service") }
          <p>{ this.text("T0057") }</p>
          { this.ask("past-sixsenteces-completed") }

          {/* 6 questions about my past year */}
          <header>{ this.text("T0059") }</header>

          <p>{ this.text("T0060") }</p>
          { this.ask("past-sixquestions-proud") }
          <p>{ this.text("T0061") }</p>
          { this.ask("past-sixquestions-influencedby") }
          <p>{ this.text("T0062") }</p>
          { this.ask("past-sixquestions-influence") }
          <p>{ this.text("T0063") }</p>
          { this.ask("past-sixquestions-notaccomplish") }
          <p>{ this.text("T0064") }</p>
          { this.ask("past-sixquestions-discover") }
          <p>{ this.text("T0065") }</p>
          { this.ask("past-sixquestions-grateful") }

          {/* Best moments */}
          <header>{ this.text("T0067") }</header>
          <p>{ this.text("T0069") }</p>
          { this.ask("past-bestmoments") }

          {/* My three greatest accomplishments */}
          <header>{ this.text("T0071") }</header>
          <p>{ this.text("T0072") }</p>
          { this.ask("past-3accomplish-success") }
          <p>{ this.text("T0073") }</p>
          { this.ask("past-3accomplish-achieve") }
          <p>{ this.text("T0074") }</p>
          { this.ask("past-3accomplish-who") }

          {/* My three biggest challenges */}
          <header>{ this.text("T0075") }</header>
          <p>{ this.text("T0076") }</p>
          { this.ask("past-3challenge-list") }
          <p>{ this.text("T0077") }</p>
          { this.ask("past-3challenge-help") }
          <p>{ this.text("T0078") }</p>
          { this.ask("past-3challenge-learned") }

          {/* Forgiveness */}
          <header>{ this.text("T0080") }</header>
          <p>{ this.text("T0082") }</p>
          { this.ask("past-forgive") }
          <footer>{ this.text("T0083") }</footer>

          {/* Letting go */}
          <header>{ this.text("T0085") }</header>
          <p>{ this.text("T0087") }</p>
          { this.ask("past-lettinggo") }

          {/* The past year in 3 words */}
          <header>{ this.text("T0089") }</header>
          <p>{ this.text("T0090") }</p>
          { this.ask("past-3words") }

          {/* The book of my past year */}
          <header>{ this.text("T0091") }</header>
          <p>{ this.text("T0189") }</p>
          { this.ask("past-book") }

          {/* Farewell to your last year */}
          <header>{ this.text("T0094") }</header>
          <p>{ this.text("T0096") }</p>
          { this.ask("past-farewell") }
        </div>);
  }
});
