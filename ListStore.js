import { AppDispatcher } from './AppDispatcher.js';

export const ListStore = {
  items: [],
  
  getAll: function() {
    return this.items;
  } 
};

AppDispatcher.register(function(action) {
  switch( action.type ) {
    case 'new-item':
      ListStore.items.push(action.data);
        break;
  }
  return true;
});
