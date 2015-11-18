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
            <h3>{ this.text("T0073") }</h3>
            <p>{ this.text("T0074") }</p>
            <TextQuestion question="ahead-dreambig"/>

            {/* This is what my next year is about */}
            <h3>{ this.text("T0075") }</h3>
            <h4>{ this.text("T0076") }</h4>
            <p>{ this.text("T0021") }</p>
            <TextQuestion question="ahead-about-family"/>
            <p>{ this.text("T0022") }</p>
            <TextQuestion question="ahead-about-work"/>
            <p>{ this.text("T0023") }</p>
            <TextQuestion question="ahead-about-belongings"/>
            <p>{ this.text("T0024") }</p>
            <TextQuestion question="ahead-about-hobbies"/>
            <p>{ this.text("T0025") }</p>
            <TextQuestion question="ahead-about-friends"/>
            <p>{ this.text("T0026") }</p>
            <TextQuestion question="ahead-about-health"/>
            <p>{ this.text("T0027") }</p>
            <TextQuestion question="ahead-about-intellectual"/>
            <p>{ this.text("T0028") }</p>
            <TextQuestion question="ahead-about-emotional"/>
            <p>{ this.text("T0029") }</p>
            <TextQuestion question="ahead-about-finances"/>
            <p>{ this.text("T0030") }</p>
            <TextQuestion question="ahead-about-bucketlist"/>
            <p><i>{ this.text("T0077") }</i></p>
            <p><i>{ this.text("T0078") }</i></p>

            {/* The year ahead of me */}
            <h3>{ this.text("T0081") }</h3>
            <p>{ this.text("T0082") }</p>
            <TextQuestion question="ahead-calendar"/>

            {/* Magical tricola for the year ahead */}
            <h3>{ this.text("T0084") }</h3>
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
            <h3>{ this.text("T0097") }</h3>
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
            <h3>{ this.text("T0104") }</h3>
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
            <h3>{ this.text("T0111") }</h3>
            <p>{ this.text("T0129") }</p>
            <TextQuestion question="ahead-30day"/>

            {/* My word for the year ahead */}
            <h3>{ this.text("T0130") }</h3>
            <p>{ this.text("T0131") }</p>
            <TextQuestion question="ahead-myword"/>

            {/* Secret wish */}
            <h3>{ this.text("T0132") }</h3>
            <p>{ this.text("T0133") }</p>
            <TextQuestion question="ahead-secretwish"/>

            {/* I believe anything is possible this year. */}
            <h4><input type="checkbox"/>{ this.text("T0134") }</h4>

            <button className="navbutton" onClick={this.props.onTurn}>Finish</button>

          </div>
        </div>
    );
  }
});
