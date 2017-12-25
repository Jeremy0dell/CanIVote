import axios from 'axios'

const URL = 'http://localhost:3000/api/selenium'

export const postVoterData = (body) => axios.post(URL, body)

export const getVoterInfo = (formData) => {

  // Invert control!
  // Return a function that accepts `dispatch` so we can dispatch later.
  // Thunk middleware knows how to turn thunk async actions into actions.

  return function (dispatch) {
    return fetchSecretSauce().then(
      sauce => dispatch(makeASandwich(forPerson, sauce)),
      error => dispatch(apologize('The Sandwich Shop', forPerson, error))
    );
  };
}
