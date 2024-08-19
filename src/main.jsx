// src/index.jsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import User from './User.jsx';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const root = createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/user" element={<User />}>
          <Route path=":id" element={<User />} /> {/* This will render the User component for both /user and /user/:id */}
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
