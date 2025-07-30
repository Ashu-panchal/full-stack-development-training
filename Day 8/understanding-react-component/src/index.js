// importing react dom package
// react dom module give connectin with browser
import ReactDOM from 'react-dom/client';
import {MyComponent } from './MyComponent';

// gitting division tag by id 'root'
const divTag = document.getElementById('root');

// creating a root dom (document object model)
const root = ReactDOM.createRoot(divTag);

// reading coomponent
// we can only render a single component
root.render(<MyComponent />)
