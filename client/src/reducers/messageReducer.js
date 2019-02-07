import {
  FETCH_STREAMS_FAILED_MESSAGE
} from '../actions/types'

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_STREAMS_FAILED_MESSAGE:
      return { ...state, message: action.message }
    default:
      return state
  }
}
