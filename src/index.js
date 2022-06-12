import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './routes/App';
import BandMembers from './routes/BandMembers';
import Home from './routes/Home';
import Media from './routes/Media';
import Tour from './routes/Tour';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './Theme'
import { CssBaseline } from '@mui/material';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} /> 
            <Route path="band-members" element={<BandMembers />} />
            <Route path="tour" element={<Tour />} /> 
            <Route path="media" element={<Media />} />
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
