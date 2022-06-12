/* eslint-disable react/no-danger */
import React, { useRef, useState } from 'react';
import { List, Tag } from 'antd';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { deleteNodeThunk, putNodeThunk } from 'store/nodes/thunk';
import { useAppSelector } from 'hooks/useAppSelector';
import { getValue } from 'store/nodes/selectors';
import { setFilter } from 'store/filtres/slice';
import style from './style.module.scss';

type TProps = {
  text: string;
  id: string;
};

const Note: React.FC<TProps> = ({ text, id }) => {
  const dispatch = useAppDispatch();
  const [isEdit, setIsEdit] = useState(true);
  const defaultValue = useAppSelector(getValue(id));
  const input = useRef<HTMLInputElement>(null);
  const tags: string[] = [];
  const textWithTags = text.replace(
    /\B#[A-Za-zА-Яа-я0-9_][A-Za-zА-Яа-я0-9_]+/gi,
    '<span>$&</span>',
  );
  text.replace(/\B#[A-Za-zА-Яа-я0-9_][A-Za-zА-Яа-я0-9_]+/gi, (match) => {
    tags.push(match);
    return match;
  });

  const editHandler = () => {
    const node = {
      id,
      text: (input.current as HTMLInputElement)?.value,
    };
    setIsEdit((prev: boolean) => !prev);
    if (!isEdit) {
      dispatch(putNodeThunk(node));
    }
  };

  const filterHandler = (el: string) => {
    dispatch(setFilter(el));
  };

  const deleteNode = () => {
    dispatch(deleteNodeThunk(id));
  };
  return (
    <List.Item>
      {isEdit ? (
        <p
          dangerouslySetInnerHTML={{ __html: `${textWithTags}` }}
          className={style.text}
        />
      ) : (
        <input defaultValue={defaultValue} ref={input} />
      )}
      <div className={style.buttons}>
        <button type="button" onClick={editHandler}>
          {isEdit ? 'Редактировать' : 'Сохранить'}
        </button>
        <button type="button" onClick={deleteNode}>
          Удалить
        </button>
      </div>
      <div className={style.tags}>
        {tags.map((el, i) => {
          return (
            // eslint-disable-next-line react/no-array-index-key
            <Tag key={i} color="magenta" onClick={() => filterHandler(el)}>
              {el}
            </Tag>
          );
        })}
      </div>
    </List.Item>
  );
};
export default Note;
