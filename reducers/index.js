import { SAVE_DECK_TITLE } from '../actions/types'

export default (state = {}, action) => {
  switch (action.type) {
    case SAVE_DECK_TITLE:
      return {
        ...state,
        [action.title]: []
      }
    default:
      return state
  }
}
