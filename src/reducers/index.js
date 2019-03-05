import { INCREMENT, DECREMENT, RESET, INCREMENTODD, INCREMENTASYNC } from '../actions';

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
    case INCREMENT: // Increase by one.
      return ++state;
    
    case DECREMENT: // Decrease by one.
      return --state;

    case RESET: // This just resets the state to the initial value, which in this case is 0
      return state = initialState.count;

    case INCREMENTODD:
      if (state%2) { // if state is odd, move forward one.
        return ++state;
      }  
      return state; // else just return state

    case INCREMENTASYNC:
      return state;
      
    default:
      return state;
  }
};

