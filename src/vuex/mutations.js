// mutations are events, similar to Redux' reducers
// Note: mutations are always sync pure function. Async belongs into actins..

export default {
  INCREMENT: (state, amount) => {
    state.count = state.count + amount
  },
  DECREMENT: (state, amount) => state.count -= amount,
  INITAL: (state, intialValue) => state.count = intialValue
}
