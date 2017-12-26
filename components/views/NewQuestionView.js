import React from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { addCardToDeck } from '../../actions'

class NewQuestionView extends React.Component {
  constructor () {
    super()

    this.state = {
      question: '',
      answer: ''
    }

    this.submit = this.submit.bind(this)
  }

  submit () {
    const { question, answer } = this.state
    const { title } = this.props
    this.props.addCardToDeck(title, question, answer)
      .then(() => {
        this.setState({ question: '', answer: '' })
      })
  }

  render () {
    const disabled = (!this.state.question || !this.state.answer)
    return (
      <View style={styles.container}>
        <TextInput placeholder='Question' style={styles.input} value={this.state.question} onChangeText={question => this.setState({ question })} />
        <TextInput placeholder='Answer' style={styles.input} value={this.state.answer} onChangeText={answer => this.setState({ answer })} />
        <TouchableOpacity style={styles.submitButton} onPress={this.submit} activeOpacity={disabled ? 0.3 : 1} disabled={disabled}>
          <Text style={styles.submitButtonText}>Add Question</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    justifyContent: 'flex-start',
    flex: 1
  },
  input: {
    alignSelf: 'stretch',
    borderColor: 'grey',
    height: 50,
    borderWidth: 1,
    margin: 1
  },
  submitButton: {
    alignItems: 'center',
    borderColor: 'black',
    marginRight: 100,
    marginLeft: 100,
    marginTop: 10,
    padding: 10,
    borderRadius: 10,
    borderWidth: 1
  },
  submitButtonText: {
    color: 'black',
    fontSize: 20
  }
})

const mapStateToProps = (state, props) => {
  const title = props.navigation.state.params.id
  return {
    title
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addCardToDeck: (title, question, answer) => (addCardToDeck(dispatch, title, question, answer))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewQuestionView)
