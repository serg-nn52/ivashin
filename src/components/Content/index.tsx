import { Button, List } from 'antd';
import Preloader from 'components/Preloader';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { useAppSelector } from 'hooks/useAppSelector';
import React, { useEffect } from 'react';
import { selectNodesByFilter } from 'store/filtres/selectors';
import { resetFilter } from 'store/filtres/slice';
import { getIsLoading } from 'store/nodes/selectors';
import { getNodes } from 'store/nodes/thunk';
import { getUserEmail } from 'store/users/selectors';
import { logoutUser } from 'store/users/slice';
import AddNotes from './AddNotes';
import Note from './Notes/Note';
import style from './style.module.scss';

type TData = {
  id: string;
  text: string;
};

const Content: React.FC = () => {
  const dispatch = useAppDispatch();

  const nodes = useAppSelector(selectNodesByFilter);
  const email = useAppSelector(getUserEmail);
  const isLoading = useAppSelector(getIsLoading);

  useEffect(() => {
    dispatch(getNodes());
  }, [dispatch]);

  const resetHandler = () => {
    dispatch(resetFilter());
  };

  return isLoading ? (
    <Preloader />
  ) : (
    <div className={style.wrapper}>
      <div className={style.container}>
        <div className={style.top}>
          <div className={style.button}>
            <Button
              type="primary"
              onClick={() => dispatch(logoutUser())}
            >{`Выйти из ${email}`}</Button>
          </div>
          <h1>Заметки</h1>
          {!!nodes.length && (
            <List
              size="large"
              bordered
              dataSource={nodes}
              renderItem={(item: TData) => (
                <Note text={item.text} id={item.id} />
              )}
            />
          )}
          {!!nodes.length && (
            <Button type="primary" onClick={resetHandler}>
              Сбросить фильтры
            </Button>
          )}
        </div>
        <AddNotes />
      </div>
    </div>
  );
};

export default Content;
