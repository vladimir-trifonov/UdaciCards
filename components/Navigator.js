import { StackNavigator, TabNavigator } from 'react-navigation'

import { DeckListView, DeckView, NewDeckView, NewQuestionView, QuizView } from './views'

const navigationOptions = {
  headerTintColor: 'white',
  headerStyle: {
    backgroundColor: 'black'
  }
}

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
}, {
  animationEnabled: true,
  tabBarOptions: {
    allowFontScaling: true,
    style: {
      backgroundColor: 'black'
    }
  }
})

const Navigator = StackNavigator({
  Home: {
    screen: HomeView,
    navigationOptions: {
      header: null
    }
  },
  Quiz: {
    screen: QuizView,
    navigationOptions
  },
  Deck: {
    screen: DeckView,
    navigationOptions
  },
  NewQuestion: {
    screen: NewQuestionView,
    navigationOptions
  }
})

export default Navigator
