import './index.css';

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Provider } from 'mobx-react';
import { StoreModel } from './models/StoreModel';

import registerServiceWorker from './registerServiceWorker';

import App from './App';





const RootStore = StoreModel.create();



ReactDOM.render(
    (<Provider {...RootStore} >
        <App />
    </Provider>),
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
