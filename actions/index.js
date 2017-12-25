import { SAVE_DECK_TITLE } from './types'
import { saveDeckTitle as saveDeckTitleAPI } from '../utils/api'

function saveDeckTitleAction (title) {
  return {type: SAVE_DECK_TITLE, title}
}

export function saveDeckTitle (dispatch, title) {
  saveDeckTitleAPI(title)
  dispatch(saveDeckTitleAction(title))
}
