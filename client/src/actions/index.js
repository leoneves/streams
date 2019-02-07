import {
  SIGN_IN,
  SIGN_OUT,
  CREATE_STREAM,
  FETCH_STREAMS_REQUEST,
  FETCH_STREAM,
  DELETE_STREAM,
  EDIT_STREAM
} from './types'

export const signIn = (userId) => {
  return {
    type: SIGN_IN,
    payload: userId
  }
}

export const signOut = () => {
  return {
    type: SIGN_OUT
  }
}

export const createStream = formValues => (getState) => {
  // const { userId } = getState().auth
  return {
    type: CREATE_STREAM, payload: {} 
  }
}

export const fetchStreams = () => {
  return {
    type: FETCH_STREAMS_REQUEST 
  }
}

export const fetchStream = id => dispatch => {
  return {
    type: FETCH_STREAM, payload: {} 
  }
}

export const editStream = (id, formValues) => {
  return {
    type: EDIT_STREAM, payload: {} 
  }
}

export const deleteStream = id => {
  return {
    type: DELETE_STREAM, payload: id 
  }
}