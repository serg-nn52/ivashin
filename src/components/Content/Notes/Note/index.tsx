import React from 'react';
import { List } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { deleteNodeThunk, getNodes } from 'store/nodes/thunk';
import style from './style.module.scss';

type TProps = {
  text: string;
  id: string;
};

const Note: React.FC<TProps> = ({ text, id }) => {
  const dispatch = useAppDispatch();

  const deleteNode = () => {
    dispatch(deleteNodeThunk(id));
  };
  return (
    <List.Item>
      <p className={style.text}>{text}</p>
      <div className={style.buttons}>
        <button type="button">Редактировать</button>
        <button type="button" onClick={deleteNode}>
          Удалить
        </button>
      </div>
    </List.Item>
  );
};
export default Note;
