import { call, put, takeLatest } from 'redux-saga/effects'
import { getStreams } from '../../services/streams'
import {
  FETCH_STREAMS_SUCCEEDED,
  FETCH_STREAMS_FAILED,
  FETCH_STREAMS_FAILED_MESSAGE
} from '../../actions/types'

function* fetchStreams() {
  try {
    const streams = yield call(getStreams)
    yield put({type: FETCH_STREAMS_SUCCEEDED, streams: streams})
  } catch (e) {
    yield put({type: FETCH_STREAMS_FAILED })
    yield put({type: FETCH_STREAMS_FAILED_MESSAGE, message: e.message})
  }
}

export default function* streamSaga() {
  yield takeLatest("FETCH_STREAMS_REQUEST", fetchStreams)
}
