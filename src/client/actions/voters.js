export const FETCH_VOTER_STATUS = 'FETCH_VOTER_STATUS'

export const fetchVoterStatus = (addr) => {
  return {type: FETCH_VOTER_STATUS,
  addr}
}
