import React, {  useContext, useEffect, useReducer } from 'react'
import { gamerProducts,laptops, laptopscategories, mobiles, mobilescategories, tvs, tvcategories, headphones, headphonescategories } from '../data'
import reducer from './reducer'
const AppContext = React.createContext()
const initialState = {
  isOffcanvasOpen: false,
  laptopsList: laptops,
  laptopsCategory: laptopscategories,
  mobilesList : mobiles,
  mobilesCategory: mobilescategories,
  tvList: tvs,
  tvCategory: tvcategories,
  headphonesList: headphones,
  headphonesCategory: headphonescategories,
  carts: 0,
  likes: 0,
  compares: 0,
  addedToCart: 0,
  inputs: '',
  showCategoriesSection: false,
  inputValue : "",
  isCartOpen: false,
  isOutletOpen: true,
  yourCart: gamerProducts,
  amount: 0,
  subtotal: 0,
  isLoginOpen: false,
  isRegisterOpen: false,
  isAccountOpen: false
}

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
const toggleOffcanvas = () => {
  dispatch({type: "TOGGLE_OFFCANVAS"})
}
  const ToggleLikes = (id) => {
    dispatch({type:"Toggle_Likes", payload: id})
  }
  const addToCompare = (id) => {
    dispatch({type:"ADD_TO_COMPARE", payload: id})
  }
  const openNavbar = () => {
    dispatch({type: "OPEN_NAVBAR"})
  }
  const closeNavbar = () => {
    dispatch({type: "CLOSE_NAVBAR"})
  }
  const countAddedProducts = () => {
    dispatch({type: "COUNT_ADDED_PRODUCTS"})
  }
  const addToCart = (newPrice) => {
    dispatch({type: "ADD_TO_CART", payload: newPrice})
    countAddedProducts()
  }

  const showCategories = () => {
    dispatch({type: "SHOW_CATEGORIES"})
  }
  const hideCategories = () => {
    dispatch({type: "HIDE_CATEGORIES"})
  }
  const setInputValue = (e) => {
    dispatch({type: "INPUT_VALUE", payload: e})
  }
  const openCart = () => {
    dispatch({type: "OPEN_CART"})
  }
  const closeCart = () => {
    dispatch({type: "CLOSE_CART"})
  }
  const increase = (id) => {
    dispatch({type: "INCREASE", payload: id})
  }
  const decrease = (id) => {
    dispatch({type: "DECREASE", payload: id})
  }
  const remove = (id) => {
    dispatch({type: "REMOVE", payload: id})
  }
  useEffect(() => {
    dispatch({type: "GET_TOTAL"})
  }, [state.yourCart]);
  const openLoginPage = () => {
    dispatch({type: "OPEN_LOGIN"})
  }
  const closeLoginPage = () => {
    dispatch({type: "CLOSE_LOGIN"})
  }
  const openRegisterPage = () => {
    dispatch({type: "OPEN_REGISTER"})
  }
  const closeRegisterPage = () => {
    dispatch({type: "CLOSE_REGISTER"})
  }
  const openAccountPage = () => {
    dispatch({type: "OPEN_ACCOUNT_PAGE"})
  }
  const closeAccountPage = () => {
    dispatch({type: "CLOSE_ACCOUNT_PAGE"})
  }
  return (
    <AppContext.Provider
      value={{
        ...state,
        toggleOffcanvas,
        addToCart,
        ToggleLikes,
        addToCompare,
        openNavbar,
        closeNavbar,
        countAddedProducts,
        showCategories,
        hideCategories,
        setInputValue,
        openCart,
        closeCart,
        increase,
        decrease,
        remove,
        openLoginPage,
        closeLoginPage,
        openRegisterPage,
        closeRegisterPage,
        openAccountPage,
        closeAccountPage,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
