
import { all, fork } from 'redux-saga/effects'
import streamSaga from './sagas/stream'

export default function* rootSaga() {
  yield all(
    [fork(streamSaga)]
  )
}