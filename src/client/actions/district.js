export const FETCH_VOTER_DISTRICT = 'FETCH_VOTER_DISTRICT'

export const fetchVoterDistrict = (dist) =>
{
  console.log('dist is', dist)
  return {
  type: FETCH_VOTER_DISTRICT,
  dist
}}
