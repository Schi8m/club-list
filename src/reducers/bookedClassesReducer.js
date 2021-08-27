import { GET_BOOKED_CLASSES } from '../actions/classesActions'

const INITIAL_STATE = {
  bookedClasses: []
}
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_BOOKED_CLASSES: {
      return {
        ...state,
        bookedClasses: action.payload
      }
    }
    default:
      return state
  }
}
