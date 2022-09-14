import Error404 from 'pages/Error404';
import Login from 'pages/Login';
import Main from 'pages/Main';
import Register from 'pages/Register';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

const CreateRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
};

export default CreateRoutes;
