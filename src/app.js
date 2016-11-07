//import { AppContainer } from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';

//require('autotrack');

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

// Google Analytics
// ga('create', 'UA-86523189-1', 'auto');
//
// ga('require', 'cleanUrlTracker');
// ga('require', 'outboundLinkTracker');
// ga('require', 'urlChangeTracker');
//
// ga('send', 'pageview');
