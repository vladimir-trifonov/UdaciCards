import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'

class DeckView extends React.Component {
  render () {
    const { deck = {} } = this.props
    const { navigate } = this.props.navigation

    return (
      <View style={styles.container}>
        <Text style={styles.title}>{deck.title}</Text>
        <Text style={styles.questions}>{deck.questions ? deck.questions.length : 0} cards</Text>
        <View>
          <TouchableOpacity style={styles.cardButton} onPress={() => navigate('NewQuestion', { id: deck.title })}>
            <Text style={styles.cardButtonText}>Add Card</Text>
          </TouchableOpacity>
          {deck.questions && <TouchableOpacity style={styles.quizButton} onPress={() => navigate('Quiz', { id: deck.title })}>
            <Text style={styles.quizButtonText}>Start Quiz</Text>
          </TouchableOpacity>}
        </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    flex: 1,
    justifyContent: 'center'
  },
  quizButton: {
    backgroundColor: 'black',
    alignItems: 'center',
    marginRight: 120,
    marginLeft: 120,
    marginTop: 10,
    padding: 10,
    borderRadius: 10
  },
  quizButtonText: {
    color: 'white',
    fontSize: 20
  },
  cardButton: {
    alignItems: 'center',
    marginRight: 120,
    marginLeft: 120,
    marginTop: 150,
    padding: 10,
    borderRadius: 10,
    borderColor: 'black',
    borderWidth: 1
  },
  cardButtonText: {
    fontSize: 20
  },
  title: {
    fontSize: 60,
    textAlign: 'center'
  },
  questions: {
    fontSize: 30,
    textAlign: 'center'
  }
})

const mapStateToProps = (state, props) => {
  return {
    deck: state.default[props.navigation.state.params.id]
  }
}

export default connect(mapStateToProps)(DeckView)
