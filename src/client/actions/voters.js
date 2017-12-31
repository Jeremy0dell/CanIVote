export const FETCH_VOTER_STATUS = 'FETCH_VOTER_STATUS'

export const fetchVoterStatus = (addr) => {
  console.log('addr here is', addr)
  return {type: FETCH_VOTER_STATUS,
  addr}
}

// export const fetchVoterDistrict =
