import { Button } from 'antd';
import { useAppDispatch } from 'hooks/useAppDispatch';
import React from 'react';
import { resetFilter } from 'store/filtres/slice';
import AddNotes from './AddNotes';
import Notes from './Notes';
import style from './style.module.scss';

const Content: React.FC = () => {
  const dispatch = useAppDispatch();
  const resetHandler = () => {
    dispatch(resetFilter());
  };
  return (
    <div className={style.wrapper}>
      <div className="container">
        <h1>Заметки</h1>
        <Notes />
        <Button type="primary" onClick={resetHandler}>
          Сбросить фильтры
        </Button>
        <AddNotes />
      </div>
    </div>
  );
};

export default Content;
