import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import FavouritesPage from './pages/FavoritesPage';
import HomePage from './pages/HomePage';
function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/fav' element={<FavouritesPage />} />
      </Routes>
    </>
  );
}

export default App;
