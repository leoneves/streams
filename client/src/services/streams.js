import streams from './config'

export const getStreams = () => {
  return streams.get('/streams')
    .then(response => response.data)
    .catch(err => {
      throw err
    })  
}

