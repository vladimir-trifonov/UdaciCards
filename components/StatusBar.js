import React from 'react'
import { View, StatusBar, StyleSheet } from 'react-native'
import { Constants } from 'expo'

const styles = StyleSheet.create({
  container: {
    height: Constants.statusBarHeight
  },
  statusBar: {
    backgroundColor: 'black',
    height: Constants.statusBarHeight
  }
})

export default () => {
  return (
    <View style={styles.container}>
      <StatusBar style={styles.statusBar} barStyle='dark-content' hidden={false} />
    </View>
  )
}
