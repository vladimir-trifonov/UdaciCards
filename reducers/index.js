import { GET_DECKS, SAVE_DECK_TITLE } from '../actions/types'

export default (state = {}, action) => {
  switch (action.type) {
    case GET_DECKS:
      return action.decks
    case SAVE_DECK_TITLE:
      return {
        ...state,
        [action.title]: []
      }
    default:
      return state
  }
}
