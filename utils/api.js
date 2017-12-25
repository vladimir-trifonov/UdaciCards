import { AsyncStorage } from 'react-native'

export function getDecks () {
  return AsyncStorage.getItem('__UDACICARDS__').then((value) => {
    return JSON.parse(value) || {}
  })
}

export function getDeck (id) {
}

export function saveDeckTitle (title) {
  return AsyncStorage.mergeItem('__UDACICARDS__', JSON.stringify({[title]: []}))
}

export function addCardToDeck (title, card) {
}
