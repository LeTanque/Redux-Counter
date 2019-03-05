import { INCREMENT, DECREMENT, RESET } from '../actions';

const initialState = {
  count: 0
}

console.log('This is the initialState.count', initialState.count)

// Our reducer that handles our two action cases:
// increment and decrement. It receives the state
// of our redux store, along with an action created
// by our action creator. What does the reducer
// need to do with the count in each case?
export default (state = initialState.count, action) => {
  console.log('In the reducer yo', action);
  switch (action.type) {
    case INCREMENT:
      return ++state;
    case DECREMENT:
      return --state;
    case RESET:
      return state = initialState.count;
    default:
      return state;
  }
};
