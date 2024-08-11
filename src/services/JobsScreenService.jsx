import axios from 'axios';

export const getView = async (role, userId) => {
  try {
    const response = await axios.get(
      `https://apte.a2hosted.com/jobs/getView/${role}/${userId}`,
    );

    return response.data.jobs;
  } catch (err) {
    console.log(err);
  }
};
