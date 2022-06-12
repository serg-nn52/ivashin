import React, { useEffect } from 'react';
import { List } from 'antd';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { getNodes } from 'store/nodes/thunk';
import { useAppSelector } from 'hooks/useAppSelector';
import { getIsLoading } from 'store/nodes/selectors';
import Preloader from 'components/Preloader';
import { selectNodesByFilter } from 'store/filtres/selectors';
import Note from './Note';

type TData = {
  id: string;
  text: string;
};

const Notes: React.FC = () => {
  const dispatch = useAppDispatch();
  const nodes = useAppSelector(selectNodesByFilter);
  const isLoading = useAppSelector(getIsLoading);

  useEffect(() => {
    dispatch(getNodes());
  }, [dispatch]);
  return isLoading ? (
    <Preloader />
  ) : (
    <List
      size="large"
      bordered
      dataSource={nodes}
      renderItem={(item: TData) => <Note text={item.text} id={item.id} />}
    />
  );
};

export default Notes;
