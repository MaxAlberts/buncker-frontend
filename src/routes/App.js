import { Box } from '@mui/system';
import { Outlet } from 'react-router';
import ButtonAppBar from '../components/ButtonAppBar';
import image from '../images/test-image.jpg'

function App() {
  return (
    <div>
      <Box>
        <img src={image} width='100%' height='100%' />
      </Box>
      <ButtonAppBar/>
      <Outlet/>
    </div>
  );
}

export default App;
