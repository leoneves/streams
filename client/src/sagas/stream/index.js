import { call, put, takeLatest } from 'redux-saga/effects'
import { getStreams } from '../../services/streams'

function* fetchStreams() {
  try {
    const streams = yield call(getStreams)
    yield put({type: "FETCH_STREAMS_SUCCEEDED", streams: streams})
  } catch (e) {
    yield put({type: "FETCH_STREAMS_FAILED", message: e.message})
  }
}

export default function* streamSaga() {
  yield takeLatest("FETCH_STREAMS_REQUEST", fetchStreams)
}
