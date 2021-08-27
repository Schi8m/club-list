import { all } from 'redux-saga/effects'
import { watchLoadClubs } from './clubsSaga'

export default function * rootSaga () {
  yield all([
    watchLoadClubs()
  ])
}
