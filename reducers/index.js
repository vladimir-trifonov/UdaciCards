import { ADD_CARD_TO_DECK, GET_DECKS, SAVE_DECK_TITLE } from '../actions/types'

export default (state = {}, action) => {
  switch (action.type) {
    case GET_DECKS:
      return action.decks
    case SAVE_DECK_TITLE:
      return {
        ...state,
        [action.title]: []
      }
    case ADD_CARD_TO_DECK:
      return {
        ...state,
        [action.title]: [
          ...state[action.title],
          {
            question: action.question,
            answer: action.answer
          }
        ]
      }
    default:
      return state
  }
}
