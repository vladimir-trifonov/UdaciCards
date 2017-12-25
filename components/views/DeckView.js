import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'

class DeckView extends React.Component {
  render () {
    const { questions = [], title = '' } = this.props
    const { navigate } = this.props.navigation
    const hasQuestions = !!(questions && questions.length)

    return (
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.questions}>{hasQuestions ? questions.length : 0} cards</Text>
        <View>
          <TouchableOpacity style={styles.cardButton} onPress={() => navigate('NewQuestion', { id: title })}>
            <Text style={styles.cardButtonText}>Add Card</Text>
          </TouchableOpacity>
          {hasQuestions && <TouchableOpacity style={styles.quizButton} onPress={() => navigate('Quiz', { id: title })}>
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
    marginTop: 100,
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
  const title = props.navigation.state.params.id
  return {
    title,
    questions: state.default[title]
  }
}

export default connect(mapStateToProps)(DeckView)
