import './App.css'
import RecipeList from './components/recipe-list/recipe-list';
import { Link, BrowserRouter, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Details from './Details';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1,
      cacheTime: 1,
    },
  },
})

function App() {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>  
        <header>
          <Link to={'/'}>
            Recipes Home
          </Link>
        </header>
        <Routes>
          <Route path='recipe/:id' element={<Details/>}/>
          <Route path='/' element={<RecipeList/>}/>
        </Routes>
      </QueryClientProvider>
    </BrowserRouter>
  )
}

export default App
