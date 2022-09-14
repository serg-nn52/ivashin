import { IUser } from 'components/UserForm';

export const checkInput = (parameter: keyof IUser, user: IUser) => {
  let isError = false;
  switch (parameter) {
    case 'email':
      if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9-]+\.[A-Z]{2,4}$/i.test(user[parameter]) &&
        user[parameter] !== '' &&
        user[parameter] !== ' '
      ) {
        isError = true;
      }
      break;
    case 'password':
      if (
        (user[parameter].length < 6 || user[parameter].length > 10) &&
        user[parameter] !== ''
      ) {
        isError = true;
      }
      break;
    default:
      return isError;
  }
  return isError;
};

export const createFormatedValue = (parameter: keyof IUser, user: IUser) => {
  if (user[parameter] === ' ') {
    user[parameter] = '';
  }
  switch (parameter) {
    case 'email':
      return user[parameter];
    case 'password':
      return user[parameter];
    default:
      return user[parameter];
  }
};
