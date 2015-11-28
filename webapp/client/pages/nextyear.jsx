NextYearPage = React.createClass({
  mixins: [BookletPage],

  render() {
    return (<div>
          {/* The year ahead */}
          <div id="jumbotron">
            <p>{ this.text("T0106") }</p>
          </div>

          <div className="bookletpage">
            {/* Dare to dream big */}
            <header>{ this.text("T0109") }</header>
            <p>{ this.text("T0111") }</p>
            <TextQuestion question="ahead-dreambig"/>

            {/* This is what my next year is about */}
            <header>{ this.text("T0128") }</header>
            <p>{ this.text("T0190") }</p>

            <label>{ this.text("T0038") }</label>
            <TextQuestion question="ahead-about-family"/>
            <label>{ this.text("T0043") }</label>
            <TextQuestion question="ahead-about-work"/>
            <label>{ this.text("T0039") }</label>
            <TextQuestion question="ahead-about-belongings"/>
            <label>{ this.text("T0044") }</label>
            <TextQuestion question="ahead-about-hobbies"/>
            <label>{ this.text("T0040") }</label>
            <TextQuestion question="ahead-about-friends"/>
            <label>{ this.text("T0045") }</label>
            <TextQuestion question="ahead-about-health"/>
            <label>{ this.text("T0041") }</label>
            <TextQuestion question="ahead-about-intellectual"/>
            <label>{ this.text("T0046") }</label>
            <TextQuestion question="ahead-about-emotional"/>
            <label>{ this.text("T0042") }</label>
            <TextQuestion question="ahead-about-finances"/>
            <label>{ this.text("T0187") }</label>
            <TextQuestion question="ahead-about-bucketlist"/>

            {/* Magical triplets for the year ahead */}
            <header>{ this.text("T0132") }</header>
            <p>{ this.text("T0133") }</p>
            <TextQuestion question="ahead-triplets-lovemyself"/>
            <p>{ this.text("T0134") }</p>
            <TextQuestion question="ahead-triplets-letgo"/>
            <p>{ this.text("T0135") }</p>
            <TextQuestion question="ahead-triplets-achieve"/>
            <p>{ this.text("T0136") }</p>
            <TextQuestion question="ahead-triplets-pillars"/>
            <p>{ this.text("T0137") }</p>
            <TextQuestion question="ahead-triplets-discover"/>
            <p>{ this.text("T0138") }</p>
            <TextQuestion question="ahead-triplets-sayno"/>
            <p>{ this.text("T0141") }</p>
            <TextQuestion question="ahead-triplets-cozy"/>
            <p>{ this.text("T0142") }</p>
            <TextQuestion question="ahead-triplets-morning"/>
            <p>{ this.text("T0143") }</p>
            <TextQuestion question="ahead-triplets-pamper"/>
            <p>{ this.text("T0144") }</p>
            <TextQuestion question="ahead-triplets-visit"/>
            <p>{ this.text("T0145") }</p>
            <TextQuestion question="ahead-triplets-connect"/>
            <p>{ this.text("T0146") }</p>
            <TextQuestion question="ahead-triplets-reward"/>

            {/* 6 sentences about my next year */}
            <header>{ this.text("T0148") }</header>
            <p>{ this.text("T0149") }</p>
            <TextQuestion question="ahead-6sentences-procrastinate"/>
            <p>{ this.text("T0150") }</p>
            <TextQuestion question="ahead-6sentences-energy"/>
            <p>{ this.text("T0151") }</p>
            <TextQuestion question="ahead-6sentences-bravest"/>
            <p>{ this.text("T0152") }</p>
            <TextQuestion question="ahead-6sentences-sayyes"/>
            <p>{ this.text("T0153") }</p>
            <TextQuestion question="ahead-6sentences-advise"/>
            <p>{ this.text("T0154") }</p>
            <TextQuestion question="ahead-6sentences-special"/>

            {/* My word for the year ahead */}
            <header>{ this.text("T0156") }</header>
            <p>{ this.text("T0157") }</p>
            <TextQuestion question="ahead-myword"/>

            {/* Secret wish */}
            <header>{ this.text("T0158") }</header>
            <p>{ this.text("T0159") }</p>
            <TextQuestion question="ahead-secretwish"/>

            <div className="navbutton">
              <button onClick={this.props.onTurn}>{ this.text("T0161") }</button>
            </div>
          </div>
        </div>
    );
  }
});
