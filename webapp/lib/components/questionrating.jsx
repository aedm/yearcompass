RateQuestion = React.createClass({
  mixins: [ReactMeteorData],

  getInitialState() {
    return {};
  },

  getMeteorData() {
    let document = Feedback.findOne({ question: this.props.question });
    if (!document) return {};
    return {
      rating: document.rating
    }
  },

  rate(value) {
    Meteor.call("rateQuestion", this.props.question, value);
  },

  render() {
    return (
        <Stars onChange={this.rate} value={this.data.rating} />
    );
  }
});


Stars = React.createClass({
  max: 5,

  getInitialState() {
    return {
      value: this.props.value == undefined ? 0 : this.props.value,
      hover: 0
    }
  },

  componentWillReceiveProps(nextProps) {
    this.setState({value: nextProps.value});
  },

  selectStar(index) {
    this.setState({value: index});
    this.props.onChange(index);
  },

  hoverStar(index) {
    this.setState({hover: index});
  },

  renderStars() {
    return (
        <div className="starContainer">
          <div className="stars">
            {_.range(0, this.max).map((index) => {
                let type = this.state.value > index ? "fa-star" : "fa-star-o";
                let hovered = this.state.hover > index ? "hovered" : "";
                let onClick = this.selectStar.bind(this, index + 1);
                let onMouseEnter = this.hoverStar.bind(this, index + 1);
                return (
                    <i key={index} className={`fa ${type} ${hovered}`} onClick={onClick}
                       onMouseEnter={onMouseEnter}></i>);})}
          </div>
        </div>);
  },

  render() {
    return (
      <div className="bookletpage">
        { this.renderStars() }
      </div>
    );
  }
});
