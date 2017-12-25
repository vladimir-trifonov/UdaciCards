import { StackNavigator, TabNavigator } from 'react-navigation'

import { DeckListView, DeckView, NewDeckView, NewQuestionView, QuizView } from './views'

const HomeView = TabNavigator({
  DeckList: {
    screen: DeckListView,
    navigationOptions: {
      tabBarLabel: 'Decks'
    }
  },
  NewDeck: {
    screen: NewDeckView,
    navigationOptions: {
      tabBarLabel: 'Create Deck'
    }
  }
})

const Navigator = StackNavigator({
  Home: {
    screen: HomeView
  },
  Quiz: {
    screen: QuizView
  },
  Deck: {
    screen: DeckView
  },
  NewQuestion: {
    screen: NewQuestionView
  }
})

export default Navigator
