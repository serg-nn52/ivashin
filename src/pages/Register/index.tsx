import UserForm from 'components/UserForm';
import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { loginUser } from 'store/users/slice';
import { auth } from '../../firebase';
import style from './style.module.scss';

const Register: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [errorReg, setErrorReg] = useState('');

  const handlerRegistration = (email: string, password: string) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential: any) => {
        const {
          user: { uid, email: userEmail, accessToken },
        } = userCredential;
        const user = {
          uid,
          email: userEmail,
          accessToken,
        };
        navigate('/');
        dispatch(loginUser(user));
      })
      .catch((error) => {
        setErrorReg(error.message);
      });
  };

  return (
    <div className={style.login}>
      <UserForm
        title="Регистрация"
        buttonTitle="Зарегистрироваться"
        handler={handlerRegistration}
        error={errorReg}
      />
    </div>
  );
};

export default Register;
