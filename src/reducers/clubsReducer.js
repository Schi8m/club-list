import { SET_CLUBS } from '../actions/clubsActions'

const INITIAL_STATE = {
  clubs: []
}
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_CLUBS: {
      return {
        ...state,
        clubs: action.payload
      }
    }
    default:
      return state
  }
}
