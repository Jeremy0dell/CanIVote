import { CHANGE_ADDRESS_BOOL } from '../actions/showAddressForm'

export default (state = false, action) => {
  switch(action.type) {
    case CHANGE_ADDRESS_BOOL:
      return action.bool
    default:
      return state
  }
}
