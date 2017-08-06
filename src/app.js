//import { AppContainer } from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './containers/App';

const root = document.getElementById('app');

// ReactDOM.render(
//     <AppContainer>
//         <App />
//     </AppContainer>,
//     root
// )
ReactDOM.render(
    <App />,
    root
)

// if (module.hot) {
//     module.hot.accept('./containers/App', () => {
//         // If you use Webpack 2 in ES modules mode, you can
//         // use <App /> here rather than require() a <NextApp />.
//         const NextApp = require('./containers/App').default;
//         ReactDOM.render(
//             <AppContainer>
//                 <NextApp />
//             </AppContainer>,
//             root
//         );
//     });
// }
