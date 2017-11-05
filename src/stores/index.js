import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'

import promise from 'redux-promise'
import thunk from 'redux-thunk'
import reducers from '../reducers'

export default (initialState) => {
  const logger = createLogger();

  return createStore(
    reducers,
    initialState,
    applyMiddleware(thunk, logger, promise)
  )
}