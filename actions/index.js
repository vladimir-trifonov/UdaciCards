import { SAVE_DECK_TITLE, GET_DECKS } from './types'
import { saveDeckTitle as saveDeckTitleAPI, getDecks as getDecksAPI } from '../utils/api'

function saveDeckTitleAction (title) {
  return {type: SAVE_DECK_TITLE, title}
}

function getDecksAction (decks) {
  return {type: GET_DECKS, decks}
}

export function getDecks (dispatch) {
  return getDecksAPI()
    .then((decks) => (dispatch(getDecksAction(decks))))
}

export function saveDeckTitle (dispatch, title) {
  return saveDeckTitleAPI(title)
    .then(() => (dispatch(saveDeckTitleAction(title))))
}
