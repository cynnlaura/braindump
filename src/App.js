import logo from './logo.svg';
import './App.css';
import { Button, Typography } from '@mui/material';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Morning from './Components/Morning';
import Night from './Components/Night';
import './fonts/NewYork.ttf.woff';



function App() {
  const LandingPage = () => {
    return (
      <Typography variant='h3' style={{ display: 'flex', flexDirection: 'column', background: 'linear-gradient(#e66465, #9198e5)', alignItems: 'center', justifyContent: 'center', height: '100vh', width: '100vw', margin: 0, padding: 0 }} fontFamily='newyork' >
        <div>Are you a</div>
        <div>
          <Button style={{ fontFamily: 'newyork', fontSize: '40px', color: 'black', borderColor: 'black', textDecoration: 'underline 2px' }} component={Link} to='/morning'>morning</Button> or <Button component={Link} style={{ fontFamily: 'newyork', fontSize: '40px', color: 'black', borderColor: 'black', textDecoration: 'underline 2px' }} to='/night'>night</Button> 
        </div>
        <div>planner?</div>
        
      </Typography>

    )
  }
  return (
    <>
      
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/morning' element={<Morning />} />
          <Route path='/night' element={<Night />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
