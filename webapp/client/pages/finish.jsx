FinishPage = React.createClass({
  mixins: [BookletPage],

  renderShare() {
    let url = "http://yearcompass.com";
    let img = "http://www.yearcompass.com/wp-content/uploads/2014/12/zen_share1.png";
    let title = "YearCompass";

    return (
        <p className="share">
          <a href={`http://www.facebook.com/sharer/sharer.php?u=${url}&t=${title}`}
             className="share-button facebook" target="_blank">Facebook</a>
          <a href={`http://www.twitter.com/intent/tweet?url=${url}&text=${title}`}
             className="share-button twitter" target="_blank">Twitter</a>
          <a href={`http://pinterest.com/pin/create/button/?url=${url}&media=${img}&description=${title}`}
             className="share-button pinterest" target="_blank">Pinterest</a>
          <a href={`http://www.reddit.com/submit?url=${url}`}
             className="share-button reddit" target="_blank">Reddit</a>
          <a href={`http://plus.google.com/share?url=${url}`}
             className="share-button google" target="_blank">Google+</a>
          <a href={`http://www.linkedin.com/shareArticle?mini=true&url=${url}`}
             className="share-button linkedin" target="_blank">LinkedIn</a>
          <a href={`whatsapp://send?text=${url}`}
             className="share-button linkedin" target="_blank">WhatsApp</a>
        </p>
    );
  },

  renderFeedbackQuestions() {
    return (<div>
        <header>Please rate the questions you answered</header>
        <div className="feedback">
          {/* Going through your calendar */}
          <p>{ this.text("T0015") }</p>
          <RateQuestion question="past-going-through" />
          {/* This is what my past year was about */}
          <p>{ this.text("T0017") }</p>
          <RateQuestion question="past-about" />
          {/* 6 sentences about my past year */}
          <p>{ this.text("T0031") }</p>
          <RateQuestion question="past-6sentences" />
          {/* 6 questions about my past year */}
          <p>{ this.text("T0038") }</p>
          <RateQuestion question="past-1" />
          {/* Best moments */}
          <p>{ this.text("T0045") }</p>
          <RateQuestion question="past-2" />
          {/* My three greatest accomplishments */}
          <p>{ this.text("T0047") }</p>
          <RateQuestion question="past-3" />
          {/* My three biggest challenges */}
          <p>{ this.text("T0051") }</p>
          <RateQuestion question="past-4" />
          {/* Forgiveness */}
          <p>{ this.text("T0055") }</p>
          <RateQuestion question="past-5" />
          {/* Letting go */}
          <p>{ this.text("T0058") }</p>
          <RateQuestion question="past-6" />
          {/* The past year in 3 words */}
          <p>{ this.text("T0060") }</p>
          <RateQuestion question="past-7" />
          {/* The book of my past year */}
          <p>{ this.text("T0062") }</p>
          <RateQuestion question="past-8" />
          {/* Farewell to your last year */}
          <p>{ this.text("T0065") }</p>
          <RateQuestion question="past-9" />

          <p>Tell us about anything.</p>
          <TextQuestion question="feedback"/>

        </div>
    </div>);
  },

  render() {
    return (
        <div>
          <div id="jumbotron">
            <p className="logo">&nbsp;</p>
          </div>
          <div className="bookletpage">

            {/* You’re done with your year planning :). */}
            <header>{ this.text("T0137") }</header>
            <p>{ this.text("T0138") }</p>
            <p>{ this.text("T0139") }</p>
            <p>{ this.text("T0140") }</p>
            <p>#yearcompass #yearbehind #yearplanning #yearahead</p>

            <footer>{ this.text("T0141") }</footer>
            <footer>{ this.text("T0142") }</footer>

            <header>Share it</header>
            { this.renderShare() }

            { this.renderFeedbackQuestions() }
          </div>
        </div>);
  }
});
