import { ChakraProvider } from '@chakra-ui/react';
import './App.css';
import { TestComponent } from './LandingPage/Components/TestComponent';
import { MatchRoute, Router, Link, ReactLocation, Outlet } from '@tanstack/react-location';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { routes } from '../routes.jsx';

const location = new ReactLocation();
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: false
    }
  }
});

function App() {

  return (
    <QueryClientProvider client={queryClient}>
    <ChakraProvider>
      <Router location={location} routes={routes}>
      <Link to="/" >Home</Link>
      <Link to="data-fetch" >Data</Link>
        <Outlet />
      </Router>
    </ChakraProvider>
  </QueryClientProvider>
  )
}

export default App
