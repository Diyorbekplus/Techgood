
const reducer = (state, action) => {
  if (action.type === 'ADD_TO_CART') {
  return({
  ...state,
  amount: state.amount + 1,
  subtotal: state.subtotal + action.payload
  })
  }
  if (action.type === 'ADD_TO_COMPARE') {
  return({
    ...state,
    compares: state.compares + 1
  })
  }
  if(action.type === "OPEN_CART") {
    return {
      ...state,
      isCartOpen : true,
      isLoginOpen: false,
      isOutletOpen: false,
      isNavbar: false,
      isOffcanvasOpen:false,
      isRegisterOpen: false,
      
    }  
  }
  if(action.type ==="CLOSE_CART") {
  return {
    ...state,
    isLoginOpen: false,
    isOutletOpen: true,
    isCartOpen : false
  }}
  if(action.type === "Toggle_Likes") {
  return ( {
    ...state,
    likes: state.likes + 1
  })
  }
  if (action.type === 'INCREASE') {
  let tempCart = state.yourCart.map((cartItem) => {
    if (cartItem.id === action.payload) {
      return { ...cartItem, amount: cartItem.amount + 1 }
    }
    return cartItem
  })
  return { ...state, yourCart: tempCart }
  }
  if (action.type === 'DECREASE') {
  let tempCart = state.yourCart.map((cartItem) => {
    if (cartItem.id === action.payload) {
      return { ...cartItem, amount: cartItem.amount - 1 }
    }
    return cartItem
  })
  .filter((cartItem) => cartItem.amount !== 0)
  return { ...state, yourCart: tempCart }
  }
  if(action.type === "REMOVE") {
  return {
    ...state,
    yourCart: state.yourCart.filter((cartItem) => cartItem.id !== action.payload)
  }
  }
  if(action.type === "GET_TOTAL") {
  let {subtotal, amount} = state.yourCart.reduce((cartTotal, cartItem) => {
    const {newPrice, amount} = cartItem;
    const itemTotal = newPrice * amount;
    cartTotal.subtotal += itemTotal;
    cartTotal.amount += amount
    return cartTotal
  }, {
    subtotal: 0,
    amount: 0
  })
  subtotal = parseFloat(subtotal.toFixed(2));
  return {
    ...state,
    subtotal,
    amount
  }
  }
  if(action.type === "OPEN_LOGIN"){
  return {
    ...state,
    isOutletOpen: false,
    isRegisterOpen: false,
    isCartOpen: false,
    isNavbar: false,
    isOffcanvasOpen:false,
    isLoginOpen: true
  }
  }
  if(action.type === "CLOSE_LOGIN"){
  return {
    ...state,
    isOutletOpen: true,
    isLoginOpen: false
  }
  }
  if(action.type === "OPEN_REGISTER") {
  return {
  ...state,
  isLoginOpen: false,
  isOutletOpen:false,
  isRegisterOpen: true
  }
  }
  if(action.type === "CLOSE_REGISTER") {
  return {
  ...state,
  isOutletOpen:true,
  isRegisterOpen: false
  }
  }
  if(action.type ==="OPEN_NAVBAR"){ 
  return {
  ...state,
  isOutletOpen: false,
  isCartOpen : false,
  isLoginOpen: false,
  isRegisterOpen: false,
  isNavbar: true
  }}
  if(action.type ==="CLOSE_NAVBAR") {
  return {
  ...state,
  isOutletOpen: true,
  isCartOpen : false,
  isNavbar: false
  }}
  if(action.type ==="COUNT_ADDED_PRODUCTS") 
  {return {
  ...state,
  addedToCart: state.addedToCart + 1 
  }}
  if(action.type ==="SHOW_CATEGORIES") {
  return {
    ...state,
    showCategoriesSection: true
  }}
  if(action.type ==="HIDE_CATEGORIES"){ 
  return {
    ...state,
    isOutletOpen: true,
    showCategoriesSection: false
  }}
  if(action.type ==="INPUT_VALUE"){ 
  return {
    ...state,
    inputValue : action.payload
  }}
  if(action.type === "OPEN_ACCOUNT_PAGE") {
    return {
      ...state,
      isOutletOpen: false,
      isOffcanvasOpen: false,
      isNavbar:false,
      isAccountOpen: true
    }
  }
  if(action.type === "CLOSE_ACCOUNT_PAGE") {
    return {
      ...state,
      isOutletOpen: true,
      isNavbar:true,
      isAccountOpen: false
    }
  }
  if(action.type === "OPEN_OFFCANVAS") {
    return {
      ...state,
      isOutletOpen: false,
      isOffcanvasOpen:true,
    }
  }
  if(action.type === "CLOSE_OFFCANVAS") {
    return {
      ...state,
      isOutletOpen: true,
      isOffcanvasOpen:false,
    }
  }
  if(action.type === "TOGGLE_OFFCANVAS") {
    return {
      ...state,
      isOutletOpen:!state.isOutletOpen,
      isOffcanvasOpen:!state.isOffcanvasOpen,
    }
  }
  


}

export default reducer