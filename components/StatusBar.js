import React from 'react'
import { View, StatusBar, StyleSheet } from 'react-native'
import { Constants } from 'expo'

import { statusBarBGColor } from '../utils/colors'

const styles = StyleSheet.create({
  statusBar: {
    backgroundColor: statusBarBGColor,
    height: Constants.statusBarHeight
  }
})

export default () => {
  return (
    <View style={styles.statusBar}>
      <StatusBar style={styles.statusBar} />
    </View>
  )
}
