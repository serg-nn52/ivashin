import { Button, Form } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import { useAppDispatch } from 'hooks/useAppDispatch';
import React, { useState } from 'react';
import { addNodeThunk } from 'store/nodes/thunk';
import { TNodes } from 'store/nodes/types';
import { v4 as uuidv4 } from 'uuid';
import style from './style.module.scss';

const AddNotes: React.FC = () => {
  const dispatch = useAppDispatch();
  const [valueNode, setValueNode] = useState('');
  const addNode = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const node: TNodes = {
      id: uuidv4(),
      text: (e.target as HTMLFormElement).textarea.value,
    };
    dispatch(addNodeThunk(node));
    setValueNode('');
  };

  return (
    <div className={style.wrapper}>
      <Form
        labelCol={{ span: 5 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        onSubmitCapture={addNode}
        name="newNode"
      >
        <Form.Item>
          <TextArea
            name="textarea"
            rows={4}
            value={valueNode}
            onChange={(e) => setValueNode(e.target.value)}
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Добавить заметку
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AddNotes;
