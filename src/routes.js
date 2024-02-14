import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Play from "./pages/Play";
import PageNotFound from "./pages/PageNotFound";
import Search from "./pages/Search";
import Favorites from "./pages/Favorites";
import FavoritesProvider from "./contexts/Favorites";

function AppRoutes() {
  return (
    <BrowserRouter>
      <FavoritesProvider>
        <Routes>
          <Route path="/" element={ <Home/> }></Route>
          <Route path="/play/:id" element={ <Play/> }></Route>
          <Route path="/search" element={ <Search/> }></Route>
          <Route path="/favorites" element={ <Favorites/> }></Route>
          <Route path="*" element={ <PageNotFound/> }></Route>
        </Routes>
      </FavoritesProvider>
    </BrowserRouter>
  )
}

export default AppRoutes