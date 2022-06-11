import React from 'react';
import AddNotes from './AddNotes';
import Notes from './Notes';
import style from './style.module.scss';

const Content: React.FC = () => {
  return (
    <div className={style.wrapper}>
      <div className="container">
        <h1>Заметки</h1>
        <Notes />
        <AddNotes />
      </div>
    </div>
  );
};

export default Content;
