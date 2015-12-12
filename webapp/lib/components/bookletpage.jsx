/**
 * React mixin for common booklet page functionalities
 */
BookletPage = {
  propTypes: {
    language: React.PropTypes.string,
    userId: React.PropTypes.string
  },

  text(token) {
    let t = translations[this.props.language][token];
    return t ? t : translations["en_us"][token];
  },

  ask(question) {
    let params = {
      print: this.props.print === true,
      userId: this.props.userId
    };
    return <TextQuestion question={question} {...params} />;
  },
};