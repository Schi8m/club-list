import { SET_CLASS } from '../actions/classesActions'
import { REMEMBER_CLUB_NAME } from '../actions/clubsActions'

const INITIAL_STATE = {
  currentClub: '',
  classes: []
}
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_CLASS: {
      return {
        ...state,
        classes: action.payload
      }
    }
    case REMEMBER_CLUB_NAME: {
      return {
        ...state,
        currentClub: action.currentClub
      }
    }
    default:
      return state
  }
}
