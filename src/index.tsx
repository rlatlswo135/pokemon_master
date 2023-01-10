import React from 'react';

import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from 'components/common/App';
import { MoneyProvider } from 'components/context/MoneyProvider';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <RecoilRoot>
                <MoneyProvider>
                    <App />
                </MoneyProvider>
            </RecoilRoot>
        </BrowserRouter>
    </React.StrictMode>
);
