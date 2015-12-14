StatsPage = React.createClass({
  mixins: [ReactMeteorData],

  getInitialState() {
    return {}
  },

  getMeteorData() {
    // SSR doesn't seem to support the "Counts" package.
    if (Meteor.isServer) return {};

    Meteor.subscribe("counters", this.questions);
    let data = {
      userCount: Counts.get("userCount")
    };
    this.questions.forEach((question) => {
      data[question] = Counts.get(question);
    });
    return data;
  },

  text(token) {
    return translations["en_us"][token];
  },

  getCount(label) {
    return <p className="stats">Answers: {this.data[label]}</p>;
  },

  render() {
    // No SSR for this page.
    if (Meteor.isServer) return null;

    return (
        <div className="bookletpage">
          <header className="stats">Registered users: { this.data.userCount }</header>
          { this.renderPastYear() }
          { this.renderNextYear() }
        </div>
    );
  },

  renderPastYear() {
    return (
        <div>

            {/* Going through your calendar */}
            <header>{ this.text("T0032") }</header>
            <p>{ this.text("T0034") }</p>
            { this.getCount("past-flyover") }


            {/* This is what my past year was about */}
            <header>{ this.text("T0036") }</header>
            <p>{ this.text("T0188") }</p>

            <label>{ this.text("T0038") }</label>
            { this.getCount("past-about-family") }
            <label>{ this.text("T0043") }</label>
            { this.getCount("past-about-work") }
            <label>{ this.text("T0039") }</label>
            { this.getCount("past-about-belongings") }
            <label>{ this.text("T0044") }</label>
            { this.getCount("past-about-hobbies") }
            <label>{ this.text("T0040") }</label>
            { this.getCount("past-about-friends") }
            <label>{ this.text("T0045") }</label>
            { this.getCount("past-about-health") }
            <label>{ this.text("T0041") }</label>
            { this.getCount("past-about-intellectual") }
            <label>{ this.text("T0046") }</label>
            { this.getCount("past-about-emotional") }
            <label>{ this.text("T0042") }</label>
            { this.getCount("past-about-finances") }
            <label>{ this.text("T0187") }</label>
            { this.getCount("past-about-bucketlist") }

            {/* 6 sentences about my past year */}
            <header>{ this.text("T0051") }</header>

            <p>{ this.text("T0052") }</p>
            { this.getCount("past-sixsenteces-decision") }
            <p>{ this.text("T0053") }</p>
            { this.getCount("past-sixsenteces-lesson") }
            <p>{ this.text("T0054") }</p>
            { this.getCount("past-sixsenteces-risk") }
            <p>{ this.text("T0055") }</p>
            { this.getCount("past-sixsenteces-surprise") }
            <p>{ this.text("T0056") }</p>
            { this.getCount("past-sixsenteces-service") }
            <p>{ this.text("T0057") }</p>
            { this.getCount("past-sixsenteces-completed") }

            {/* 6 questions about my past year */}
            <header>{ this.text("T0059") }</header>

            <p>{ this.text("T0060") }</p>
            { this.getCount("past-sixquestions-proud") }
            <p>{ this.text("T0061") }</p>
            { this.getCount("past-sixquestions-influencedby") }
            <p>{ this.text("T0062") }</p>
            { this.getCount("past-sixquestions-influence") }
            <p>{ this.text("T0063") }</p>
            { this.getCount("past-sixquestions-notaccomplish") }
            <p>{ this.text("T0064") }</p>
            { this.getCount("past-sixquestions-discover") }
            <p>{ this.text("T0065") }</p>
            { this.getCount("past-sixquestions-grateful") }

            {/* Best moments */}
            <header>{ this.text("T0067") }</header>
            <p>{ this.text("T0069") }</p>
            { this.getCount("past-bestmoments") }

            {/* My three greatest accomplishments */}
            <header>{ this.text("T0071") }</header>
            <p>{ this.text("T0072") }</p>
            { this.getCount("past-3accomplish-success") }
            <p>{ this.text("T0073") }</p>
            { this.getCount("past-3accomplish-achieve") }
            <p>{ this.text("T0074") }</p>
            { this.getCount("past-3accomplish-who") }

            {/* My three biggest challenges */}
            <header>{ this.text("T0075") }</header>
            <p>{ this.text("T0076") }</p>
            { this.getCount("past-3challenge-list") }
            <p>{ this.text("T0077") }</p>
            { this.getCount("past-3challenge-help") }
            <p>{ this.text("T0078") }</p>
            { this.getCount("past-3challenge-learned") }

            {/* Forgiveness */}
            <header>{ this.text("T0080") }</header>
            <p>{ this.text("T0082") }</p>
            { this.getCount("past-forgive") }
            <footer>{ this.text("T0083") }</footer>

            {/* Letting go */}
            <header>{ this.text("T0085") }</header>
            <p>{ this.text("T0087") }</p>
            { this.getCount("past-lettinggo") }

            {/* The past year in 3 words */}
            <header>{ this.text("T0089") }</header>
            <p>{ this.text("T0090") }</p>
            { this.getCount("past-3words") }

            {/* The book of my past year */}
            <header>{ this.text("T0091") }</header>
            <p>{ this.text("T0189") }</p>
            { this.getCount("past-book") }

            {/* Farewell to your last year */}
            <header>{ this.text("T0094") }</header>
            <p>{ this.text("T0096") }</p>
            { this.getCount("past-farewell") }

        </div>);
  },

  renderNextYear() {
    return (<div>
            {/* Dare to dream big */}
            <header>{ this.text("T0109") }</header>
            <p>{ this.text("T0111") }</p>
            { this.getCount("ahead-dreambig") }

            {/* This is what my next year is about */}
            <header>{ this.text("T0128") }</header>
            <p>{ this.text("T0190") }</p>

            <label>{ this.text("T0038") }</label>
            { this.getCount("ahead-about-family") }
            <label>{ this.text("T0043") }</label>
            { this.getCount("ahead-about-work") }
            <label>{ this.text("T0039") }</label>
            { this.getCount("ahead-about-belongings") }
            <label>{ this.text("T0044") }</label>
            { this.getCount("ahead-about-hobbies") }
            <label>{ this.text("T0040") }</label>
            { this.getCount("ahead-about-friends") }
            <label>{ this.text("T0045") }</label>
            { this.getCount("ahead-about-health") }
            <label>{ this.text("T0041") }</label>
            { this.getCount("ahead-about-intellectual") }
            <label>{ this.text("T0046") }</label>
            { this.getCount("ahead-about-emotional") }
            <label>{ this.text("T0042") }</label>
            { this.getCount("ahead-about-finances") }
            <label>{ this.text("T0187") }</label>
            { this.getCount("ahead-about-bucketlist") }

            {/* Magical triplets for the year ahead */}
            <header>{ this.text("T0132") }</header>
            <p>{ this.text("T0133") }</p>
            { this.getCount("ahead-triplets-lovemyself") }
            <p>{ this.text("T0134") }</p>
            { this.getCount("ahead-triplets-letgo") }
            <p>{ this.text("T0135") }</p>
            { this.getCount("ahead-triplets-achieve") }
            <p>{ this.text("T0136") }</p>
            { this.getCount("ahead-triplets-pillars") }
            <p>{ this.text("T0137") }</p>
            { this.getCount("ahead-triplets-discover") }
            <p>{ this.text("T0138") }</p>
            { this.getCount("ahead-triplets-sayno") }
            <p>{ this.text("T0141") }</p>
            { this.getCount("ahead-triplets-cozy") }
            <p>{ this.text("T0142") }</p>
            { this.getCount("ahead-triplets-morning") }
            <p>{ this.text("T0143") }</p>
            { this.getCount("ahead-triplets-pamper") }
            <p>{ this.text("T0144") }</p>
            { this.getCount("ahead-triplets-visit") }
            <p>{ this.text("T0145") }</p>
            { this.getCount("ahead-triplets-connect") }
            <p>{ this.text("T0146") }</p>
            { this.getCount("ahead-triplets-reward") }

            {/* 6 sentences about my next year */}
            <header>{ this.text("T0148") }</header>
            <p>{ this.text("T0149") }</p>
            { this.getCount("ahead-6sentences-procrastinate") }
            <p>{ this.text("T0150") }</p>
            { this.getCount("ahead-6sentences-energy") }
            <p>{ this.text("T0151") }</p>
            { this.getCount("ahead-6sentences-bravest") }
            <p>{ this.text("T0152") }</p>
            { this.getCount("ahead-6sentences-sayyes") }
            <p>{ this.text("T0153") }</p>
            { this.getCount("ahead-6sentences-advise") }
            <p>{ this.text("T0154") }</p>
            { this.getCount("ahead-6sentences-special") }

            {/* My word for the year ahead */}
            <header>{ this.text("T0156") }</header>
            <p>{ this.text("T0157") }</p>
            { this.getCount("ahead-myword") }

            {/* Secret wish */}
            <header>{ this.text("T0158") }</header>
            <p>{ this.text("T0159") }</p>
            { this.getCount("ahead-secretwish") }
        </div>
    );
  },

  
  questions: [
    "past-flyover",
    "past-about-family",
    "past-about-work",
    "past-about-belongings",
    "past-about-hobbies",
    "past-about-friends",
    "past-about-health",
    "past-about-intellectual",
    "past-about-emotional",
    "past-about-finances",
    "past-about-bucketlist",
    "past-sixsenteces-decision",
    "past-sixsenteces-lesson",
    "past-sixsenteces-risk",
    "past-sixsenteces-surprise",
    "past-sixsenteces-service",
    "past-sixsenteces-completed",
    "past-sixquestions-proud",
    "past-sixquestions-influencedby",
    "past-sixquestions-influence",
    "past-sixquestions-notaccomplish",
    "past-sixquestions-discover",
    "past-sixquestions-grateful",
    "past-bestmoments",
    "past-3accomplish-success",
    "past-3accomplish-achieve",
    "past-3accomplish-who",
    "past-3challenge-list",
    "past-3challenge-help",
    "past-3challenge-learned",
    "past-forgive",
    "past-lettinggo",
    "past-3words",
    "past-book",
    "past-farewell",

    "ahead-dreambig",
    "ahead-about-family",
    "ahead-about-work",
    "ahead-about-belongings",
    "ahead-about-hobbies",
    "ahead-about-friends",
    "ahead-about-health",
    "ahead-about-intellectual",
    "ahead-about-emotional",
    "ahead-about-finances",
    "ahead-about-bucketlist",
    "ahead-triplets-lovemyself",
    "ahead-triplets-letgo",
    "ahead-triplets-achieve",
    "ahead-triplets-pillars",
    "ahead-triplets-discover",
    "ahead-triplets-sayno",
    "ahead-triplets-cozy",
    "ahead-triplets-morning",
    "ahead-triplets-pamper",
    "ahead-triplets-visit",
    "ahead-triplets-connect",
    "ahead-triplets-reward",
    "ahead-6sentences-procrastinate",
    "ahead-6sentences-energy",
    "ahead-6sentences-bravest",
    "ahead-6sentences-sayyes",
    "ahead-6sentences-advise",
    "ahead-6sentences-special",
    "ahead-myword",
    "ahead-secretwish",
  ]
});

