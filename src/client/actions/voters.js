export const FETCH_VOTER_STATUS = 'FETCH_VOTER_STATUS'

export const fetchVoterStatus = (addr) => {
  console.log('the action is being created', {type: FETCH_VOTER_STATUS,
  addr})
  return {type: FETCH_VOTER_STATUS,
  addr}
}
