import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Provider } from 'react-redux'
import configureStore from '../configureStore'

import StatusBar from './StatusBar'
import Navigator from './Navigator'

const store = configureStore()

export default class Main extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <StatusBar />
          <Navigator />
        </View>
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
