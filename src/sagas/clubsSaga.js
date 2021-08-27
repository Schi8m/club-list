import { put, takeLeading } from 'redux-saga/effects'
import { LOAD_CLUBS, SET_CLUBS } from '../actions/clubsActions'
import { loadClubsList } from '../Api'

export function * watchLoadClubs () {
  yield takeLeading(LOAD_CLUBS, function * (action) {
    try {
      const data = yield loadClubsList()
      yield put({ type: SET_CLUBS, payload: data })
    } catch (e) {
      alert(e.message)
    }
  })
}
