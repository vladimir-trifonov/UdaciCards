import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { clearNotification, setNotification } from '../../utils/notifications'

class QuizView extends React.Component {
  constructor () {
    super()

    this.state = {
      index: 0,
      result: 0,
      showAnswer: false,
      showSummary: false
    }

    this.goBack = this.goBack.bind(this)
    this.restart = this.restart.bind(this)
    this.toggleCard = this.toggleCard.bind(this)
  }

  toggleCard () {
    this.setState({ showAnswer: !this.state.showAnswer })
  }

  handleAnswer (value) {
    const { questions } = this.props
    const { index, result, showSummary } = this.state
    const question = questions[index]
    const answer = (question.answer || 'n')[0].toLowerCase()

    let state = {
      showAnswer: false,
      result: ((value === 'y' && answer === 'y') || (value === 'n' && answer !== 'y'))
        ? result + 1
        : result
    }

    if (index < questions.length - 1) {
      state.index = index + 1
    } else {
      state.showSummary = !showSummary
      clearNotification().then(setNotification)
    }

    this.setState(state)
  }

  goBack () {
    this.props
      .navigation
      .goBack()
  }

  restart () {
    this.setState({ showAnswer: false, index: 0, result: 0, showSummary: false })
  }

  renderSummary () {
    const { questions } = this.props
    const { result } = this.state

    return (
      <View style={styles.container}>
        <Text style={styles.summaryTitle}>Results</Text>
        <Text style={styles.summaryResult}>Your result: {result}/{questions.length}</Text>
        <View>
          <TouchableOpacity style={styles.restartButton} onPress={this.restart}>
            <Text style={styles.restartButtonText}>Restart Quiz</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.goBackButton} onPress={this.goBack}>
            <Text style={styles.goBackButtonText}>Back to Deck</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  renderQuiz () {
    const { questions } = this.props
    const { index } = this.state
    const question = questions[index]

    return (
      <View style={{ flex: 1 }}>
        <Text style={styles.quizQuestionNumber}>{index + 1}/{questions.length}</Text>
        <View style={styles.container}>
          {this.state.showAnswer
            ? this.renderCardQuestion(question.answer)
            : this.renderCardAnswer(question.question)}
          <View>
            <TouchableOpacity style={styles.quizCorrectButton} onPress={() => this.handleAnswer('y')}>
              <Text style={styles.buttonText}>Correct</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.quizIncorrectButton} onPress={() => this.handleAnswer('n')}>
              <Text style={styles.buttonText}>Incorrect</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }

  renderCardQuestion (answer) {
    return (
      <View>
        <Text style={styles.quizQuestion}>{answer}</Text>
        <TouchableOpacity onPress={this.toggleCard}>
          <Text style={styles.quizLinkText}>Question</Text>
        </TouchableOpacity>
      </View>
    )
  }

  renderCardAnswer (question) {
    return (
      <View >
        <Text style={styles.quizQuestion}>{question}</Text>
        <TouchableOpacity onPress={this.toggleCard}>
          <Text style={styles.quizLinkText}>Answer</Text>
        </TouchableOpacity>
      </View>
    )
  }

  render () {
    const { showSummary } = this.state

    return (
      <View style={styles.container}>
        {showSummary
          ? this.renderSummary()
          : this.renderQuiz()}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  summaryTitle: {
    fontSize: 60,
    textAlign: 'center'
  },
  summaryResult: {
    textAlign: 'center',
    paddingTop: 30,
    fontSize: 40,
    marginBottom: 100
  },
  goBackButton: {
    backgroundColor: 'black',
    alignItems: 'center',
    marginRight: 80,
    marginLeft: 80,
    marginTop: 10,
    padding: 10,
    borderRadius: 10
  },
  goBackButtonText: {
    color: 'white',
    fontSize: 20
  },
  restartButton: {
    alignItems: 'center',
    marginRight: 80,
    marginLeft: 80,
    marginTop: 0,
    padding: 10,
    borderRadius: 10,
    borderColor: 'black',
    borderWidth: 1
  },
  restartButtonText: {
    fontSize: 20
  },
  quizCorrectButton: {
    alignItems: 'center',
    backgroundColor: 'green',
    marginRight: 100,
    marginLeft: 100,
    marginTop: 60,
    padding: 10,
    borderRadius: 10
  },
  quizIncorrectButton: {
    alignItems: 'center',
    backgroundColor: 'red',
    marginRight: 100,
    marginLeft: 100,
    marginTop: 20,
    padding: 10,
    borderRadius: 10
  },
  quizQuestion: {
    textAlign: 'center',
    fontSize: 60
  },
  quizQuestionNumber: {
    fontSize: 25,
    padding: 10
  },
  quizLinkText: {
    color: 'red',
    textAlign: 'center',
    fontSize: 20
  }
})

const mapStateToProps = (state, props) => {
  const title = props.navigation.state.params.id
  return {
    questions: state.default[title]
  }
}

export default connect(mapStateToProps)(QuizView)
