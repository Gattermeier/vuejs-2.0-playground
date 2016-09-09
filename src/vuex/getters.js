/*
  Flux reference: Vuex getters can be roughly compared to `mapStateToProps` in `Redux`.
  However, because they leverage Vue's computed properties memoization under the hood,
  they are more efficient than `mapStateToProps`, and more similar to `reselect`.
*/
/*
  exported function getters are a good way of sharing getter function across components.
  If only a single component uses as simple getter function (as the one below) it is often simpler
  to define the getter directly in the component's option object:
  vuex: {
   getters: {
     count: state => state.count
   }
  }
*/

export const getCount = state => state.count
