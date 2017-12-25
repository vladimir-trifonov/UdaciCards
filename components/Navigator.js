import { StackNavigator, TabNavigator } from 'react-navigation'

import { DeckListView, DeckView, NewDeckView, NewQuestionView, QuizView } from './views'

const HomeView = TabNavigator({
  DeckList: {
    screen: DeckListView
  },
  NewDeck: {
    screen: NewDeckView
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
