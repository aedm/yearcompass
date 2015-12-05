// This track sync states for every
let SyncStateManager = {
  nonSyncedIds: {},
  callback: null,

  setSyncState(id, isSynced) {
    if (isSynced === false) {
      this.nonSyncedIds[id] = true;
      this.callback(false);
    }
    else {
      delete this.nonSyncedIds[id];
      if (this.callback != null) {
        let isAllSynced = Object.keys(this.nonSyncedIds).length === 0;
        this.callback(isAllSynced);
      }
    }
  },

  setCallback(callback) {
    this.callback = callback;
  }
};


// React mixin for data sources
SyncStateSource = {
  propTypes: {
    question: React.PropTypes.string
  },

  setSyncState(syncState) {
    SyncStateManager.setSyncState(this.props.question, syncState);
  }
};


// React class for sync state display
SyncStateDisplay = React.createClass({
  getInitialState() {
    return {
      isSaved: true,
      saveText: this.getSaveText()
    }
  },

  getSaveText(): string {
    return "Saved at " + new Date().toLocaleTimeString() + ".";
  },

  onSyncStateChange(syncState) {
    let newState = {isSaved: syncState};
    if (syncState === true) {
      newState.saveText = this.getSaveText();
    }
    this.setState(newState);
  },

  componentWillMount() {
    SyncStateManager.setCallback(this.onSyncStateChange);
  },

  componentWillUnmount() {
    SyncStateManager.setCallback(null);
  },

  render() {
    return (
        <div className="sync-state">
          { this.state.saveText }&nbsp;
          <i className={ this.state.isSaved ? "fa fa-fw fa-check" : "fa fa-fw fa-times"} />
        </div>
    );
  }
});

