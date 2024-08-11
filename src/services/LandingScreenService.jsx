import axios from 'axios';
import {login} from '../redux/actions/userActions';

export const getUserDetails = async (email, password, dispatch) => {
  try {
    const response = await axios.post(
      `https://apte.a2hosted.com/users/getUserDetails`,
      {
        email: email,
        password: password,
      },
    );

    dispatch(login(response.data));

    return response.data;
  } catch (err) {
    console.log(err);
  }
};
