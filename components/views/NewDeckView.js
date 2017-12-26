import React from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { saveDeckTitle } from '../../actions'

class NewDeckView extends React.Component {
  constructor () {
    super()

    this.state = {
      title: ''
    }

    this.submit = this.submit.bind(this)
  }

  submit () {
    const { title } = this.state
    this.props.saveDeckTitle(title)
      .then(() => {
        this.setState({ title: '' })
        this.props.navigation.navigate('DeckList')
      })
  }

  render () {
    const disabled = !this.state.title
    return (
      <View style={styles.container}>
        <Text style={styles.title} >What is the title of your new deck?</Text>
        <TextInput placeholder='Deck Title' style={styles.input} value={this.state.title} onChangeText={title => this.setState({ title })} />
        <TouchableOpacity style={styles.submitButton} onPress={this.submit} activeOpacity={disabled ? 0.3 : 1} disabled={disabled}>
          <Text style={styles.submitButtonText}>Create Deck</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontSize: 30,
    marginTop: 10,
    marginBottom: 10
  },
  container: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    justifyContent: 'flex-start',
    flex: 1
  },
  input: {
    alignSelf: 'stretch',
    height: 50,
    borderWidth: 1,
    borderColor: 'grey',
    margin: 1
  },
  submitButton: {
    alignItems: 'center',
    marginRight: 100,
    marginLeft: 100,
    marginTop: 10,
    padding: 10,
    borderColor: 'black',
    borderRadius: 10,
    borderWidth: 1
  },
  submitButtonText: {
    color: 'black',
    fontSize: 20
  }
})

const mapDispatchToProps = dispatch => {
  return {
    saveDeckTitle: (title) => (saveDeckTitle(dispatch, title))
  }
}

export default connect(null, mapDispatchToProps)(NewDeckView)
