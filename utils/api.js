import { AsyncStorage } from 'react-native'

export async function getDecks () {
}

export async function getDeck (id) {
}

export async function saveDeckTitle (title) {
  await AsyncStorage.setItem(title, JSON.stringify([]))
}

export async function addCardToDeck (title, card) {
}
