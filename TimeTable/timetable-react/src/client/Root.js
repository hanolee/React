import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import App from 'shareds/App';

const Root = () => (
    <BrowserRouter>
        <App/>
    </BrowserRouter>
);

export default Root;