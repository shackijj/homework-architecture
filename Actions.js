const Actions = {
  apply: function(text) {
    window.AppDispatcher.dispatch({
      type: 'apply',
      data: text
    });

    setTimeout(function() {
      window.AppDispatcher.dispatch({
        type: 'response',
        data: text,
      });
    }, 500);
  }
};

window.Actions = Actions;