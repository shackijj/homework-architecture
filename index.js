const initalState = {
  input: '',
  isLoading: false,
  response: '',
  logEntries: []
};

function reducer(state, action) {
  switch(action.type) {
    case 'apply':
      return Object.assign({}, state, {
        input: action.data,
        isLoading: true,
        logEntries: state.logEntries.concat([`${new Date()}: ${JSON.stringify(action)}`])
      });
      break;
    case 'response':
      return Object.assign({}, state, {
        response: action.data,
        isLoading: false,
        logEntries: state.logEntries.concat([`${new Date()}: ${JSON.stringify(action)}`])
      });
    default:
      return state;
  }
}


window.APP_STORE = WCF.createStore(reducer, initalState);
window.APP_ACTIONS = {
  apply: function(text) {
    window.APP_STORE.dispatch({
      type: 'apply',
      data: text
    });

    setTimeout(function() {
      window.APP_STORE.dispatch({
        type: 'response',
        data: text,
      });
    }, 500);
  }
};