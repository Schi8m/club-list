import { combineReducers } from 'redux'
import clubs from './clubsReducer'
import classes from './classesReducer'
import bookings from './bookedClassesReducer'

export default combineReducers({
  clubs,
  classes,
  bookings
})
