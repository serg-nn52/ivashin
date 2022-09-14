import UserForm from 'components/UserForm';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useAppDispatch } from 'hooks/useAppDispatch';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from 'store/users/slice';
import { auth } from '../../firebase';
import style from './style.module.scss';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [errorAuth, setErrorAuth] = useState('');

  const handlerAuth = (email: string, password: string) => {
    signInWithEmailAndPassword(auth, email, password)
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
        setErrorAuth(error.code);
      });
  };
  return (
    <div className={style.login}>
      <UserForm
        title="Авторизация"
        buttonTitle="Войти"
        handler={handlerAuth}
        error={errorAuth}
      />
    </div>
  );
};

export default Login;
