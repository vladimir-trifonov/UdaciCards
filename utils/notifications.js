import { Notifications, Permissions } from 'expo'
import { AsyncStorage } from 'react-native'
import moment from 'moment'

const key = '__UDACICARDS__NOTIFICATIONS__'

function createNotification () {
  Notifications.cancelAllScheduledNotificationsAsync()

  let tomorrow = moment().add(1, 'days').hour(18).minute(0)

  Notifications.scheduleLocalNotificationAsync({
    title: 'UdaciCards',
    body: 'Take a quiz!',
    ios: {
      sound: true
    },
    android: {
      sound: true,
      priority: 'high',
      sticky: false,
      vibrate: true
    }
  },
    {
      time: tomorrow.toDate(),
      repeat: 'day'
    })

  AsyncStorage.setItem(key, JSON.stringify(true))
}

export function clearNotification () {
  return AsyncStorage.removeItem(key)
    .then(Notifications.cancelAllScheduledNotificationsAsync)
}

export function setNotification () {
  AsyncStorage.getItem(key)
    .then(JSON.parse)
    .then((data) => {
      if (data === null) {
        Permissions.askAsync(Permissions.NOTIFICATIONS)
          .then(({ status }) => (status === 'granted' && createNotification()))
      }
    })
}
