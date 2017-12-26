import { AsyncStorage } from 'react-native'

const key = '__UDACICARDS__DECKS__'

export function getDecks () {
  return AsyncStorage.getItem(key)
    .then((value) => {
      return JSON.parse(value) || {}
    })
}

export function getDeck (title) {
  return AsyncStorage.getItem(key)
    .then((value) => {
      return JSON.parse(value).title || []
    })
}

export function saveDeckTitle (title) {
  return AsyncStorage.mergeItem(key, JSON.stringify({ [title]: [] }))
}

export function addCardToDeck (title, question, answer) {
  return AsyncStorage.getItem(key)
    .then((value) => {
      const decks = JSON.parse(value)
      return AsyncStorage.mergeItem(key, JSON.stringify({
        [title]: [...decks[title], { question, answer }]
      }))
    })
}
