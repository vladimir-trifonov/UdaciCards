import { createStore, combineReducers } from 'redux'

export default function configureStore () {
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducers/index', () => {
      const nextRootReducer = combineReducers(require('./reducers/index'))
      store.replaceReducer(nextRootReducer)
    })
  }

  const reducer = combineReducers(require('./reducers/index'))
  const store = createStore(reducer)
  return store
}
