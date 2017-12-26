import React from 'react'
import { StyleSheet, View, TouchableOpacity, Text, FlatList } from 'react-native'
import { connect } from 'react-redux'
import { getDecks } from '../../actions'

const Deck = ({title, questions, navigate}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigate('Deck', {id: title})}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.questions}>{questions ? questions.length : 0} cards</Text>
      </TouchableOpacity>
    </View>
  )
}

class DeckListView extends React.Component {
  constructor () {
    super()

    this.renderDeck = this.renderDeck.bind(this)
  }

  componentWillMount () {
    this.props.getDecks()
  }

  renderDeck ({item}) {
    const { decks = {} } = this.props
    return (
      <Deck
        key={item}
        title={item}
        questions={decks[item]}
        navigate={this.props.navigation.navigate}
      />
    )
  }

  render () {
    const { decks } = this.props
    return (
      <FlatList
        data={[...Object.keys(decks || {})]}
        renderItem={this.renderDeck}
        keyExtractor={(deck, index) => index}
      />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    padding: 10,
    borderWidth: 1,
    borderColor: 'grey',
    margin: 1
  },
  title: {
    fontSize: 30,
    textAlign: 'center'
  },
  questions: {
    fontSize: 15,
    textAlign: 'center'
  }
})

const mapStateToProps = (state) => {
  return { decks: state.default }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getDecks: () => (getDecks(dispatch))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeckListView)
