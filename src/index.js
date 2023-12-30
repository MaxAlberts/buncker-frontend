import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './routes/App';
// import BandMembers from './routes/BandMembersPage';
import Home from './routes/HomePage';
// import Media from './routes/MediaPage';
// import Tour from './routes/TourPage';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './Theme'
import { CssBaseline } from '@mui/material';
import { MENU_LIST } from './entities/MenuList';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            {
              MENU_LIST.map( pageNavigationItem =>
                <Route key={pageNavigationItem.displayName} path={pageNavigationItem.linkName} element={pageNavigationItem.pageElement}/>
              )
            }
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
