import React from 'react'
import { render } from 'react-dom'
import { App } from './components/App';

import css from './normalize.css';

try {
    render(<App />, document.getElementById('app'));
} catch (error) {
    // catch every error and show dialog
    alert(error);
}