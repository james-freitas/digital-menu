import React from 'react';
import ReactDOM from 'react-dom/client';
import Saudacao from './components/saudacao/saudacao';
import "./style/global.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Saudacao nome="Jason"/>
);

