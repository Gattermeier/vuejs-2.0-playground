/*
  Note: This is one way of doing it. ES6 destructuring of the state object
  Alternatively you could do it in oldfashioned functional style:
  export const incrementCounter = (store) => {
    store.dispatch('INCREMENT', 1)
  }
  Important: actions take a store instance as its first argument
*/
export const incrementCounter = ({ dispatch, state, watch }) => {
  dispatch('INCREMENT', 1)
}

export const decrementCounter = ({ dispatch, state, watch }) => {
  dispatch('DECREMENT', 1)
}

export const incrementCounterBy = ({ dispatch, state, watch }, amount) => {
  dispatch('INCREMENT', amount)
}

export const setToInitial = ({ dispatch }, intialValue) => {
  dispatch('INITAL', intialValue)
}
