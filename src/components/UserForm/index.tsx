/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import style from './style.module.scss';
import Input from './Input';

export interface IUser {
  email: string;
  password: string;
}

export interface IError {
  email: boolean;
  password: boolean;
}

interface IProps {
  title: string;
  buttonTitle: string;
  error: string;
  handler: (email: string, password: string) => void;
}

const UserForm: React.FC<IProps> = (props) => {
  const { title, buttonTitle, handler, error } = props;

  const initialState: IUser = {
    email: '',
    password: '',
  };
  const initialErrorsState: IError = {
    email: false,
    password: false,
  };

  const [author, setAuthor] = useState(initialState);
  const [errors, setErrors] = useState(initialErrorsState);
  const { email, password } = author;

  const errorText: { [key: string]: string } = {
    'auth/wrong-password': 'Неверный пароль!',
    'Firebase: Error (auth/email-already-in-use).':
      'Пользователь с таким email зарегистрирован!',
    'auth/user-not-found': 'Пользователь не найден!',
  };

  const submitForm = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (
      !errors.email &&
      !errors.password &&
      !!author.email &&
      !!author.password
    ) {
      handler(email, password);
    }
  };

  return (
    <div className={style.form}>
      <h1>{title}</h1>
      <form action="#">
        <Input
          name="email"
          label="E-mail"
          placeholder="ivanov@mail.ru"
          user={author}
          setUser={setAuthor}
          errors={errors}
          setErrors={setErrors}
        />
        <Input
          name="password"
          label="Пароль"
          placeholder="Введите пароль!"
          user={author}
          setUser={setAuthor}
          errors={errors}
          setErrors={setErrors}
        />
        <div className={style.info}>
          {error in errorText || error.length === 0
            ? errorText[error]
            : 'Ошибка, проверьте данные!'}
        </div>
        <button
          type="submit"
          onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
            submitForm(e)
          }
        >
          {buttonTitle}
        </button>
        {title === 'Регистрация' && <Link to="/login">Есть логин</Link>}
        {title === 'Авторизация' && <Link to="/register">На регистрацию</Link>}
      </form>
    </div>
  );
};

export default UserForm;
