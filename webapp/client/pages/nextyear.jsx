NextYearPage = React.createClass({
  mixins: [BookletPage],

  render() {
    return (<div>
          {/* The year ahead */}
          <div id="jumbotron">
            <p>{ this.text("T0072") }</p>
          </div>

          <div className="bookletpage">
            {/* Dare to dream big */}
            <header>{ this.text("T0073") }</header>
            <p>{ this.text("T0074") }</p>
            <TextQuestion question="ahead-dreambig"/>

            {/* This is what my next year is about */}
            <header>{ this.text("T0075") }</header>
            <p>{ this.text("T0076") }</p>
            <label>{ this.text("T0021") }</label>
            <TextQuestion question="ahead-about-family"/>
            <label>{ this.text("T0022") }</label>
            <TextQuestion question="ahead-about-work"/>
            <label>{ this.text("T0023") }</label>
            <TextQuestion question="ahead-about-belongings"/>
            <label>{ this.text("T0024") }</label>
            <TextQuestion question="ahead-about-hobbies"/>
            <label>{ this.text("T0025") }</label>
            <TextQuestion question="ahead-about-friends"/>
            <label>{ this.text("T0026") }</label>
            <TextQuestion question="ahead-about-health"/>
            <label>{ this.text("T0027") }</label>
            <TextQuestion question="ahead-about-intellectual"/>
            <label>{ this.text("T0028") }</label>
            <TextQuestion question="ahead-about-emotional"/>
            <label>{ this.text("T0029") }</label>
            <TextQuestion question="ahead-about-finances"/>
            <label>{ this.text("T0030") }</label>
            <TextQuestion question="ahead-about-bucketlist"/>
            <footer>{ this.text("T0077") }</footer>
            <footer>{ this.text("T0078") }</footer>

            {/* The year ahead of me */}
            <header>{ this.text("T0081") }</header>
            <p>{ this.text("T0082") }</p>
            <TextQuestion question="ahead-calendar"/>

            {/* Magical tricola for the year ahead */}
            <header>{ this.text("T0084") }</header>
            <p>{ this.text("T0085") }</p>
            <TextQuestion question="ahead-triplets-lovemyself"/>
            <p>{ this.text("T0086") }</p>
            <TextQuestion question="ahead-triplets-letgo"/>
            <p>{ this.text("T0087") }</p>
            <TextQuestion question="ahead-triplets-achieve"/>
            <p>{ this.text("T0088") }</p>
            <TextQuestion question="ahead-triplets-pillars"/>
            <p>{ this.text("T0089") }</p>
            <TextQuestion question="ahead-triplets-discover"/>
            <p>{ this.text("T0090") }</p>
            <TextQuestion question="ahead-triplets-sayno"/>
            <p>{ this.text("T0091") }</p>
            <TextQuestion question="ahead-triplets-cozy"/>
            <p>{ this.text("T0092") }</p>
            <TextQuestion question="ahead-triplets-morning"/>
            <p>{ this.text("T0093") }</p>
            <TextQuestion question="ahead-triplets-pamper"/>
            <p>{ this.text("T0094") }</p>
            <TextQuestion question="ahead-triplets-visit"/>
            <p>{ this.text("T0095") }</p>
            <TextQuestion question="ahead-triplets-connect"/>
            <p>{ this.text("T0096") }</p>
            <TextQuestion question="ahead-triplets-reward"/>

            {/* 6 sentences about my next year */}
            <header>{ this.text("T0097") }</header>
            <p>{ this.text("T0098") }</p>
            <TextQuestion question="ahead-6sentences-finally"/>
            <p>{ this.text("T0099") }</p>
            <TextQuestion question="ahead-6sentences-bravest"/>
            <p>{ this.text("T0100") }</p>
            <TextQuestion question="ahead-6sentences-advise"/>
            <p>{ this.text("T0101") }</p>
            <TextQuestion question="ahead-6sentences-habit"/>
            <p>{ this.text("T0102") }</p>
            <TextQuestion question="ahead-6sentences-procrastinate"/>
            <p>{ this.text("T0103") }</p>
            <TextQuestion question="ahead-6sentences-energy"/>

            {/* 6 more sentences about my next year */}
            <header>{ this.text("T0104") }</header>
            <p>{ this.text("T0105") }</p>
            <TextQuestion question="ahead-6sentences-dream"/>
            <p>{ this.text("T0106") }</p>
            <TextQuestion question="ahead-6sentences-plan"/>
            <p>{ this.text("T0107") }</p>
            <TextQuestion question="ahead-6sentences-feeling"/>
            <p>{ this.text("T0108") }</p>
            <TextQuestion question="ahead-6sentences-sayno"/>
            <p>{ this.text("T0109") }</p>
            <TextQuestion question="ahead-6sentences-sayyes"/>
            <p>{ this.text("T0110") }</p>
            <TextQuestion question="ahead-6sentences-special"/>

            {/* 30 day challenge */}
            <header>{ this.text("T0111") }</header>
            <p>{ this.text("T0129") }</p>
            <TextQuestion question="ahead-30day"/>

            {/* My word for the year ahead */}
            <header>{ this.text("T0130") }</header>
            <p>{ this.text("T0131") }</p>
            <TextQuestion question="ahead-myword"/>

            {/* Secret wish */}
            <header>{ this.text("T0132") }</header>
            <p>{ this.text("T0133") }</p>
            <TextQuestion question="ahead-secretwish"/>

            <div className="navbutton">
              <button onClick={this.props.onTurn}>{ this.text("T0134") }</button>
            </div>
          </div>
        </div>
    );
  }
});
