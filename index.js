const initalState = {
  input: '',
  isLoading: false,
  response: '',
  logEntries: []
};

function reducer (state, action) {
  switch(action.type) {
    case 'apply':
      return Object.assign({}, state, {
        input: action.data,
        isLoading: true
      });
      break;
    case 'response':
      return Object.assign({}, state, {
        response: action.data,
        isLoading: false
      });
    case 'log':
      return Object.assign({}, state, {
        logEntries: state.logEntries.concat([{
          date: new Date(),
          message: action.data
        }])
      });
    default:
      return state;
  }
}

window.APP_STORE = new window.WCF.Store(reducer, initalState);
window.APP_ACTIONS = {
  apply (text) {
    window.APP_STORE.dispatch({
      type: 'log',
      data: 'Данные отправляются в Model'
    });
    window.APP_STORE.dispatch({
      type: 'apply',
      data: text
    });

    setTimeout(function () {
      window.APP_STORE.dispatch({
        type: 'log',
        data: 'Данные принимаются из Model и отправляются Presenter'
      });
      window.APP_STORE.dispatch({
        type: 'response',
        data: text
      });
    }, 500);
  },
  log (text) {
    window.APP_STORE.dispatch({
      type: 'log',
      data: text
    });
  }
};
