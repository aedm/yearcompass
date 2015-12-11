/**
 * React mixin for common booklet page functionalities
 */
BookletPage = {
  propTypes: {
    language: React.PropTypes.string
  },

  text(token) {
    let t = translations[this.props.language][token];
    return t ? t : translations["en_us"][token];
  },

  ask(question) {
    let print = this.props.print === true;
    return <TextQuestion question={question} print={print}/>;
  },
};