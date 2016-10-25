import React from 'react';

NextYearPage = React.createClass({
  mixins: [BookletPage],

  render() {
    return (<div>
          {/* The year ahead */}
          <div id="jumbotron" className="nextyear">
            <p>{ this.text("T0106") }</p>
          </div>

          <div className="bookletpage">
            <NextYearQuestions language={this.props.language}/>        
            <div className="navbutton">
              <button onClick={ () => FlowRouter.go("finish") }>
                { this.text("T0161") }
              </button>
            </div>
          </div>
        </div>
    );
  }
});


NextYearQuestions = React.createClass({
  mixins: [BookletPage],

  render() {
    return (<div>
      {/* Dare to dream big */}
      <header>{ this.text("T0109") }</header>
      <p>{ this.text("T0111") }</p>
      { this.ask("ahead-dreambig") }

      {/* This is what my next year is about */}
      <header>{ this.text("T0128") }</header>
      <p>{ this.text("T0190") }</p>

      <label>{ this.text("T0038") }</label>
      { this.ask("ahead-about-family") }
      <label>{ this.text("T0043") }</label>
      { this.ask("ahead-about-work") }
      <label>{ this.text("T0039") }</label>
      { this.ask("ahead-about-belongings") }
      <label>{ this.text("T0044") }</label>
      { this.ask("ahead-about-hobbies") }
      <label>{ this.text("T0040") }</label>
      { this.ask("ahead-about-friends") }
      <label>{ this.text("T0045") }</label>
      { this.ask("ahead-about-health") }
      <label>{ this.text("T0041") }</label>
      { this.ask("ahead-about-intellectual") }
      <label>{ this.text("T0046") }</label>
      { this.ask("ahead-about-emotional") }
      <label>{ this.text("T0042") }</label>
      { this.ask("ahead-about-finances") }
      <label>{ this.text("T0187") }*</label>
      { this.ask("ahead-about-bucketlist") }
      <footer>* { this.text("T0126") }</footer>

      {/* Magical triplets for the year ahead */}
      <header>{ this.text("T0132") }</header>
      <p>{ this.text("T0133") }</p>
      { this.ask("ahead-triplets-lovemyself") }
      <p>{ this.text("T0134") }</p>
      { this.ask("ahead-triplets-letgo") }
      <p>{ this.text("T0135") }</p>
      { this.ask("ahead-triplets-achieve") }
      <p>{ this.text("T0136") }</p>
      { this.ask("ahead-triplets-pillars") }
      <p>{ this.text("T0137") }</p>
      { this.ask("ahead-triplets-discover") }
      <p>{ this.text("T0138") }</p>
      { this.ask("ahead-triplets-sayno") }
      <p>{ this.text("T0141") }</p>
      { this.ask("ahead-triplets-cozy") }
      <p>{ this.text("T0142") }</p>
      { this.ask("ahead-triplets-morning") }
      <p>{ this.text("T0143") }</p>
      { this.ask("ahead-triplets-pamper") }
      <p>{ this.text("T0144") }</p>
      { this.ask("ahead-triplets-visit") }
      <p>{ this.text("T0145") }</p>
      { this.ask("ahead-triplets-connect") }
      <p>{ this.text("T0146") }</p>
      { this.ask("ahead-triplets-reward") }

      {/* 6 sentences about my next year */}
      <header>{ this.text("T0148") }</header>
      <p>{ this.text("T0149") }</p>
      { this.ask("ahead-6sentences-procrastinate") }
      <p>{ this.text("T0150") }</p>
      { this.ask("ahead-6sentences-energy") }
      <p>{ this.text("T0151") }</p>
      { this.ask("ahead-6sentences-bravest") }
      <p>{ this.text("T0152") }</p>
      { this.ask("ahead-6sentences-sayyes") }
      <p>{ this.text("T0153") }</p>
      { this.ask("ahead-6sentences-advise") }
      <p>{ this.text("T0154") }</p>
      { this.ask("ahead-6sentences-special") }

      {/* My word for the year ahead */}
      <header>{ this.text("T0156") }</header>
      <p>{ this.text("T0157") }</p>
      { this.ask("ahead-myword") }

      {/* Secret wish */}
      <header>{ this.text("T0158") }</header>
      <p>{ this.text("T0159") }</p>
      { this.ask("ahead-secretwish") }
    </div>);
  }
});
