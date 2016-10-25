import React from 'react';

FeedbackPage = React.createClass({
  mixins: [BookletPage],

  renderFeedbackQuestions() {
    return (
        <div className="feedback">
          {/* The past year */}
          <header>{ this.text("T0031") }</header>

          {/* Going through your calendar */}
          <p>{ this.text("T0032") }</p>
          <RateQuestion question="past-going-through" />
          {/* This is what my past year was about */}
          <p>{ this.text("T0036") }</p>
          <RateQuestion question="past-about" />
          {/* 6 sentences about my past year */}
          <p>{ this.text("T0051") }</p>
          <RateQuestion question="past-6sentences" />
          {/* 6 questions about my past year */}
          <p>{ this.text("T0059") }</p>
          <RateQuestion question="past-6questions" />
          {/* Best moments */}
          <p>{ this.text("T0067") }</p>
          <RateQuestion question="past-best-moments" />
          {/* My three greatest accomplishments */}
          <p>{ this.text("T0071") }</p>
          <RateQuestion question="past-accomplishments" />
          {/* My three biggest challenges */}
          <p>{ this.text("T0075") }</p>
          <RateQuestion question="past-challenges" />
          {/* Forgiveness */}
          <p>{ this.text("T0080") }</p>
          <RateQuestion question="past-forgiveness" />
          {/* Letting go */}
          <p>{ this.text("T0085") }</p>
          <RateQuestion question="past-letting-go" />
          {/* The past year in 3 words */}
          <p>{ this.text("T0089") }</p>
          <RateQuestion question="past-3words" />
          {/* The book of my past year */}
          <p>{ this.text("T0091") }</p>
          <RateQuestion question="past-book" />
          {/* Farewell to your last year */}
          <p>{ this.text("T0094") }</p>
          <RateQuestion question="past-farewell" />

          {/* The year ahead */}
          <header>{ this.text("T0106") }</header>

          {/* Dare to dream big */}
          <p>{ this.text("T0109") }</p>
          <RateQuestion question="ahead-dream" />

          {/* This is what my next year is about */}
          <p>{ this.text("T0128") }</p>
          <RateQuestion question="ahead-about" />

          {/* Magical triplets for the year ahead */}
          <p>{ this.text("T0132") }</p>
          <RateQuestion question="ahead-triplets" />

          {/* 6 sentences about my next year */}
          <p>{ this.text("T0148") }</p>
          <RateQuestion question="ahead-6sentences" />

          {/* My word for the year ahead */}
          <p>{ this.text("T0156") }</p>
          <RateQuestion question="ahead-word" />

          {/* Secret wish */}
          <p>{ this.text("T0158") }</p>
          <RateQuestion question="ahead-wish" />


          <p>{ this.text("T0181") }</p>
          <TextQuestion question="feedback"/>

        </div>);
  },

  render() {
    return (
        <div>
          <div id="jumbotron" className="finish">
            <p className="smalltext">{ this.text("T0180") }</p>
          </div>
          <div className="bookletpage">
            { this.renderFeedbackQuestions() }

            <div className="navbutton">
              <button onClick={ () => FlowRouter.go("finish") }>
                { this.text("T0198") }
              </button>
            </div>

          </div>
        </div>);
  }
});
