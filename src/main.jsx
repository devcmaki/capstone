import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { ChakraProvider, theme } from '@chakra-ui/react'
import 'bootstrap/dist/js/bootstrap.bundle.min';
import MainPage from './dynamiclayout.jsx';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <MainPage/>
    </ChakraProvider>

  </StrictMode>,
)
