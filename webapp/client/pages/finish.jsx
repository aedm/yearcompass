FinishPage = React.createClass({
  mixins: [BookletPage],

  renderShare() {
    let url = this.text("T0171");
    let img = "http://www.yearcompass.com/wp-content/uploads/2014/12/zen_share1.png";
    let title = this.text("T0191");

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
        {/* Help us make YearCompass better. */}
        <header>{ this.text("T0179") }</header>
        <p>{ this.text("T0180") }</p>
        
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

            {/* You are now done with planning your year. */}
            <header>{ this.text("T0164") }</header>

            {/* Share your achievement */}
            <header>{ this.text("T0178") }</header>
            <p>{ this.text("T0103") }</p>
            <p>{ this.text("T0168") }</p>

            { this.renderShare() }

            <hr />
          
            {/* The small print */}
            <footer>{ this.text("T0170") }</footer>
            <footer>{ this.text("T0175") }</footer>
            <footer>{ this.text("T0174") }</footer>


            { this.renderFeedbackQuestions() }
          </div>
        </div>);
  }
});
