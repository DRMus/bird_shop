import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import "./App.scss";

import Home from "./pages/Home/Home";
import Header from "./containers/Home/Header/Header";
import FooterComponent from "./components/HomeComponents/FooterComponent";
import Catalog from "./pages/Catalog/Catalog";
import GlobalContext from "./context/GlobalContext";
import Auth from "./pages/Auth/Auth";
import Profile from "./pages/Profile/Profile";
import { useContext, useEffect } from "react";
import { useDispatch } from "react-redux";
import tokenActions from "./redux/actions/token.actions";
import Admin from "./pages/Admin/Admin";
import categoriesActions from "./redux/actions/apiCategory.actions";
import { setCart } from "./utils/cartOperations";
import PopUpContext, { PopUpContextValues } from "./context/PopUpContext";

function App() {
  
  const dispatch = useDispatch();
  useEffect(() => {
    tokenActions.checkToken()(dispatch);
    categoriesActions.fetchCatalogs()(dispatch);
    setCart(dispatch);
  }, []);
  return (
    <div className="App w-full h-full flex flex-col bg-mgray">
      <GlobalContext>
        <PopUpContext>
          <header className="header-container top-0 left-0">
            <Header />
          </header>
          <section className="main-container min-h-[800px] flex flex-col items-center">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="catalog/*" element={<Catalog />} />
              <Route path="auth" element={<Auth />} />
              <Route path="profile" element={<Profile />} />
              <Route path="admin" element={<Admin />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </section>
          <footer className="bg-micon w-full h-64 flex items-center justify-center">
            <FooterComponent />
          </footer>
        </PopUpContext>
      </GlobalContext>
    </div>
  );
}

export default App;
