import ErrorBoundary from 'antd/lib/alert/ErrorBoundary';
import Content from 'components/Content';
import Footer from 'components/Footer';
import Header from 'components/Header';
import { useAppSelector } from 'hooks/useAppSelector';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getIsToken } from 'store/users/selectors';
import style from './style.module.scss';

const Main: React.FC = () => {
  const navigate = useNavigate();
  const isAuth = useAppSelector(getIsToken);
  useEffect(() => {
    if (!isAuth) {
      navigate('/register');
    }
  }, [isAuth, navigate]);
  return (
    <div className={style.wrapper}>
      <Header />
      <ErrorBoundary>
        <Content />
      </ErrorBoundary>
      <Footer />
    </div>
  );
};

export default Main;
