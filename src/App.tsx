import { Route, Routes } from "react-router-dom";
import "./App.scss";

import Home from "./pages/Home/Home";
import Header from "./containers/Header";
import FooterComponent from "./components/HomeComponents/FooterComponent";
import Catalog from "./pages/Catalog/Catalog";

function App() {
  return (
    <div className="App w-full h-full flex flex-col bg-mgray">
      <>
        <header className="header-container top-0 left-0">
          <Header />
        </header>
        <section className="main-container grow flex flex-col items-center">
          <Routes>
            <Route path="*" element={<Home />} />
            <Route path="catalog/*" element={<Catalog/>}/>
          </Routes>
        </section>
        <footer className="bg-micon w-full h-64 flex items-center justify-center">
          <FooterComponent/>
        </footer>
      </>
    </div>
  );
}

export default App;
