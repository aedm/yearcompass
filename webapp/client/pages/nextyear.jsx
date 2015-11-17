NextYearPage = React.createClass({
  mixins: [BookletPage],

  render() {
    return (<div>
          {/* The year ahead */}
          <h1>2016 &ndash; { this.text("T0072") }</h1>

          <div className="bookletpage">
            {/* Dare to dream big */}
            <h3>{ this.text("T0073") }</h3>
            { this.text("T0074") }
            <TextQuestion question="ahead-dreambig"/>

            {/* This is what my next year is about */}
            <h3>{ this.text("T0075") }</h3>
            <h4>{ this.text("T0076") }</h4>
            { this.text("T0021") }
            <TextQuestion question="ahead-about-family"/>
            { this.text("T0022") }
            <TextQuestion question="ahead-about-work"/>
            { this.text("T0023") }
            <TextQuestion question="ahead-about-belongings"/>
            { this.text("T0024") }
            <TextQuestion question="ahead-about-hobbies"/>
            { this.text("T0025") }
            <TextQuestion question="ahead-about-friends"/>
            { this.text("T0026") }
            <TextQuestion question="ahead-about-health"/>
            { this.text("T0027") }
            <TextQuestion question="ahead-about-intellectual"/>
            { this.text("T0028") }
            <TextQuestion question="ahead-about-emotional"/>
            { this.text("T0029") }
            <TextQuestion question="ahead-about-finances"/>
            { this.text("T0030") }
            <TextQuestion question="ahead-about-bucketlist"/>
            <p><i>{ this.text("T0077") }</i></p>
            <p><i>{ this.text("T0078") }</i></p>

            {/* The year ahead of me */}
            <h3>{ this.text("T0081") }</h3>
            { this.text("T0082") }
            <TextQuestion question="ahead-calendar"/>

            {/* Magical tricola for the year ahead */}
            <h3>{ this.text("T0084") }</h3>
            { this.text("T0085") }
            <TextQuestion question="ahead-triplets-lovemyself"/>
            { this.text("T0086") }
            <TextQuestion question="ahead-triplets-letgo"/>
            { this.text("T0087") }
            <TextQuestion question="ahead-triplets-achieve"/>
            { this.text("T0088") }
            <TextQuestion question="ahead-triplets-pillars"/>
            { this.text("T0089") }
            <TextQuestion question="ahead-triplets-discover"/>
            { this.text("T0090") }
            <TextQuestion question="ahead-triplets-sayno"/>
            { this.text("T0091") }
            <TextQuestion question="ahead-triplets-cozy"/>
            { this.text("T0092") }
            <TextQuestion question="ahead-triplets-morning"/>
            { this.text("T0093") }
            <TextQuestion question="ahead-triplets-pamper"/>
            { this.text("T0094") }
            <TextQuestion question="ahead-triplets-visit"/>
            { this.text("T0095") }
            <TextQuestion question="ahead-triplets-connect"/>
            { this.text("T0096") }
            <TextQuestion question="ahead-triplets-reward"/>

            {/* 6 sentences about my next year */}
            <h3>{ this.text("T0097") }</h3>
            { this.text("T0098") }
            <TextQuestion question="ahead-6sentences-finally"/>
            { this.text("T0099") }
            <TextQuestion question="ahead-6sentences-bravest"/>
            { this.text("T0100") }
            <TextQuestion question="ahead-6sentences-advise"/>
            { this.text("T0101") }
            <TextQuestion question="ahead-6sentences-habit"/>
            { this.text("T0102") }
            <TextQuestion question="ahead-6sentences-procrastinate"/>
            { this.text("T0103") }
            <TextQuestion question="ahead-6sentences-energy"/>

            {/* 6 more sentences about my next year */}
            <h3>{ this.text("T0104") }</h3>
            { this.text("T0105") }
            <TextQuestion question="ahead-6sentences-dream"/>
            { this.text("T0106") }
            <TextQuestion question="ahead-6sentences-plan"/>
            { this.text("T0107") }
            <TextQuestion question="ahead-6sentences-feeling"/>
            { this.text("T0108") }
            <TextQuestion question="ahead-6sentences-sayno"/>
            { this.text("T0109") }
            <TextQuestion question="ahead-6sentences-sayyes"/>
            { this.text("T0110") }
            <TextQuestion question="ahead-6sentences-special"/>

            {/* 30 day challenge */}
            <h3>{ this.text("T0111") }</h3>
            { this.text("T0129") }
            <TextQuestion question="ahead-30day"/>

            {/* My word for the year ahead */}
            <h3>{ this.text("T0130") }</h3>
            { this.text("T0131") }
            <TextQuestion question="ahead-myword"/>

            {/* Secret wish */}
            <h3>{ this.text("T0132") }</h3>
            { this.text("T0133") }
            <TextQuestion question="ahead-secretwish"/>

            {/* I believe anything is possible this year. */}
            <h4><input type="checkbox"/>{ this.text("T0134") }</h4>

            <button className="navbutton" onClick={this.props.onTurn}>Finish</button>

          </div>
        </div>
    );
  }
});
