import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import store from './redux/redux-state';


 
  
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Provider store={store}>
    <BrowserRouter><App /> </BrowserRouter>
   
</Provider>, div);
  ReactDOM.unmountComponentAtNode(div);
});
