import React from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { saveDeckTitle } from '../../actions'

class NewDeck extends React.Component {
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
    this.setState({ title: '' })
    this.props.navigation.navigate('DeckList')
  }

  render () {
    return (
      <View style={styles.container}>
        <TextInput style={styles.input} value={this.state.title} onChangeText={title => this.setState({ title })} />
        <TouchableOpacity style={styles.submitBtn} onPress={this.submit}>
          <Text style={styles.submitBtnText}>Create Deck</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    paddingTop: 10
  },
  container: {
    justifyContent: 'center'
  },
  input: {
    height: 50
  },
  submitBtn: {
    backgroundColor: 'white',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 10
  },
  submitBtnText: {
    color: 'black'
  }
})

const mapDispatchToProps = dispatch => {
  return {
    saveDeckTitle: (title) => (saveDeckTitle(dispatch, title))
  }
}

export default connect(null, mapDispatchToProps)(NewDeck)