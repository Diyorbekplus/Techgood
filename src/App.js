import {  Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import { useGlobalContext } from "./Components/context";
import Cart from "./Components/Cart";
import LoginPage from "./Components/LoginPage";
import RegsiterPage from "./Components/RegsiterPage";
import AccountPage from "./Components/AccountPage";
import Footer from "./Components/Footer";
import Offcanvas from "./Components/Offcanvas";
function App() {
  const {isOutletOpen,isOffcanvasOpen, isCartOpen, isLoginOpen, isRegisterOpen, isAccountOpen} = useGlobalContext()
  return (
    <div className="App">
      {
        isAccountOpen ? <AccountPage/> : 
        <>
        <Navbar/>
          {
            isOutletOpen ? <><Outlet/><Footer/></> : ""
          }
          {
            isOffcanvasOpen ? <Offcanvas/> : ""
          }
          {
            isCartOpen ? <Cart/> : ""
          }
          {
            isLoginOpen ? <LoginPage/> : ""
          }
          {
            isRegisterOpen ? <RegsiterPage/> : ""
          }
        </>
      }

    </div>
  );
}

export default App;
