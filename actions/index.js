import { SAVE_DECK_TITLE, GET_DECKS, ADD_CARD_TO_DECK } from './types'
import { saveDeckTitle as saveDeckTitleAPI, getDecks as getDecksAPI, addCardToDeck as addCardToDeckAPI } from '../utils/api'

function saveDeckTitleAction (title) {
  return {type: SAVE_DECK_TITLE, title}
}

function getDecksAction (decks) {
  return {type: GET_DECKS, decks}
}

function addCardToDeckAction (title, question, answer) {
  return {type: ADD_CARD_TO_DECK, title, question, answer}
}

export function getDecks (dispatch) {
  return getDecksAPI()
    .then((decks) => (dispatch(getDecksAction(decks))))
}

export function saveDeckTitle (dispatch, title) {
  return saveDeckTitleAPI(title)
    .then(() => (dispatch(saveDeckTitleAction(title))))
}

export function addCardToDeck (dispatch, title, question, answer) {
  return addCardToDeckAPI(title, question, answer)
    .then(() => (dispatch(addCardToDeckAction(title, question, answer))))
}
