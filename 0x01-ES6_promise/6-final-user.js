import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

/* export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.all([
    signUpUser(firstName, lastName),
    uploadPhoto(fileName),
  ]).then((responses) => {
    // Process the responses and construct the array with the required structure
    return responses.map((response) => ({
      status: response.status,
      value:
        response.status === 'fulfilled'
          ? response.value
          : response.reason.message,
    }));
  });
} */
export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([
    signUpUser(firstName, lastName),
    uploadPhoto(fileName),
  ]).then((results) => {
    results.forEach((itemOri) => {
      const item = itemOri;
      if (item.status === 'rejected') {
        item.value = `Error: ${item.reason.message}`;
        delete item.reason;
      }
      return item;
    });
    return results;
  });
}
