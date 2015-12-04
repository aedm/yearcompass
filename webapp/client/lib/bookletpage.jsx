/* React mixin for common booklet page functionalities */
BookletPage = {
  propTypes: {
    language: React.PropTypes.string
  },

  text(token) {
    return translations[this.props.language][token];
  }
};