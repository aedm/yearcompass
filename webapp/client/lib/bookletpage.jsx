/* React mixin for common booklet page functionalities */
BookletPage = {
  propTypes: {
    language: React.PropTypes.string.isRequired,
    onTurn: React.PropTypes.func
  },

  text(token) {
    return translations[this.props.language][token];
  },
};