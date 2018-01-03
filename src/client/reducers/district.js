import { FETCH_VOTER_DISTRICT } from '../actions/district'

export default (state = '', action) => {
  switch(action.type) {
    case FETCH_VOTER_DISTRICT:
      console.log(action, 'this is district action')
      return action.dist
    default:
      return state
  }
}
