/* eslint-disable react-hooks/exhaustive-deps */

import { checkInput, createFormatedValue } from 'helpers/validations';
import React, { useEffect, useMemo } from 'react';
import { IError, IUser } from '..';
import style from './style.module.scss';

interface IPropsInput {
  name: string;
  label: string;
  placeholder: string;
  user: IUser;
  setUser: React.Dispatch<React.SetStateAction<IUser>>;
  errors: IError;
  setErrors: React.Dispatch<React.SetStateAction<IError>>;
}

const Input: React.FC<IPropsInput> = (props) => {
  const { name, label, placeholder, setUser, user, errors, setErrors } = props;

  useEffect(() => {
    setErrors({ ...errors, [name]: isErrorInput });
  }, [user[name as keyof IUser]]);

  const isErrorInput = useMemo(() => {
    return checkInput(name as keyof IUser, user);
  }, [user[name as keyof IUser]]);

  const formatedValue = useMemo(() => {
    return createFormatedValue(name as keyof IUser, user);
  }, [user[name as keyof IUser]]);

  return (
    <div className={style.input}>
      <label htmlFor={name}>{label}</label>

      <input
        type={name === 'password' ? 'password' : 'text'}
        id={name}
        placeholder={placeholder}
        value={formatedValue}
        style={{
          border: isErrorInput ? '1px solid red' : '',
        }}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setUser({ ...user, [name]: e.target.value });
        }}
      />

      <div className={isErrorInput ? style.error : style.hide}>
        {name === 'password'
          ? 'Пароль от 6 до 10 символов'
          : 'Введите корректный email!'}
      </div>
    </div>
  );
};

export default React.memo(Input);
