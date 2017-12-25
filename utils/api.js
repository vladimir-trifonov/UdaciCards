import { AsyncStorage } from 'react-native'

export function getDecks () {
  return AsyncStorage.getItem('__UDACICARDS__')
    .then((value) => {
      return JSON.parse(value) || {}
    })
}

export function getDeck (title) {
  return AsyncStorage.getItem('__UDACICARDS__')
    .then((value) => {
      return JSON.parse(value).title || []
    })
}

export function saveDeckTitle (title) {
  return AsyncStorage.mergeItem('__UDACICARDS__', JSON.stringify({ [title]: [] }))
}

export function addCardToDeck (title, question, answer) {
  return AsyncStorage.getItem('__UDACICARDS__')
    .then((value) => {
      const decks = JSON.parse(value)
      return AsyncStorage.mergeItem('__UDACICARDS__', JSON.stringify({
        [title]: [...decks[title], { question, answer }]
      }))
    })
}
