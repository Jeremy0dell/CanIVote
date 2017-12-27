import { FETCH_VOTER_STATUS } from '../actions/voters'

export default (state = '', action) => {
  switch(action.type) {
    case FETCH_VOTER_STATUS:
      return action.addr
    default:
      return state
  }
}
