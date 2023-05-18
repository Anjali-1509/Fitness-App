import logo from './logo.svg';
import './App.css';
import Rout from './Pages/Rout';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import { Box } from "@mui/material"
import ScrollToTop from './Components/ScrollToTop';

function App() {
  return (
    <Box width="400px" sx={{ width: { xl: "1488px" } }} m="auto">
      <ScrollToTop />
      <Navbar />
      <Rout />
      <Footer />
    </Box>
  );
}

export default App;
