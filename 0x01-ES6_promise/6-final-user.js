import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

const handleProfileSignup = async (firstName, lastName, filename) => Promise.allSettled([
  signUpUser(firstName, lastName),
  uploadPhoto(filename),
])
  .then((result) => (result.map((val) => ({
    status: val.status,
    value: val.status === 'fulfilled' ? val.value : String(val.reason),
  }))));

export default handleProfileSignup;
