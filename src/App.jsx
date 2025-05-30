
import {Component} from 'react'
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'

import LoginForm from './components/LoginForm'
import Home from './components/Home'
import Products from './components/Products'
import ProductItemDetails from './components/ProductItemDetails'
import Cart from './components/Cart'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'
import CartContext from './context/CartContext'
import PaymentPage from './components/PaymentPage'

import './App.css'

class App extends Component {
  state = {
    cartList: [],
  }

  componentDidMount() {
    // Load cart items from localStorage when component mounts
    const savedCartList = localStorage.getItem('cartList')
    if (savedCartList) {
      this.setState({ cartList: JSON.parse(savedCartList) })
    }
  }

  // Helper method to save cart to localStorage
  saveCartToLocalStorage = (cartList) => {
    localStorage.setItem('cartList', JSON.stringify(cartList))
  }

  removeAllCartItems = () => {
    this.setState({cartList: []}, () => {
      this.saveCartToLocalStorage([])
    })
  }

  incrementCartItemQuantity = id => {
    this.setState(prevState => {
      const updatedCartList = prevState.cartList.map(eachCartItem => {
        if (id === eachCartItem.id) {
          const updatedQuantity = eachCartItem.quantity + 1
          return {...eachCartItem, quantity: updatedQuantity}
        }
        return eachCartItem
      })
      
      this.saveCartToLocalStorage(updatedCartList)
      return { cartList: updatedCartList }
    })
  }

  decrementCartItemQuantity = id => {
    const {cartList} = this.state
    const productObject = cartList.find(eachCartItem => eachCartItem.id === id)
    if (productObject.quantity > 1) {
      this.setState(prevState => {
        const updatedCartList = prevState.cartList.map(eachCartItem => {
          if (id === eachCartItem.id) {
            const updatedQuantity = eachCartItem.quantity - 1
            return {...eachCartItem, quantity: updatedQuantity}
          }
          return eachCartItem
        })
        
        this.saveCartToLocalStorage(updatedCartList)
        return { cartList: updatedCartList }
      })
    } else {
      this.removeCartItem(id)
    }
  }

  removeCartItem = id => {
    const {cartList} = this.state
    const updatedCartList = cartList.filter(
      eachCartItem => eachCartItem.id !== id,
    )

    this.setState({cartList: updatedCartList}, () => {
      this.saveCartToLocalStorage(updatedCartList)
    })
  }

  addCartItem = product => {
    const {cartList} = this.state
    const productObject = cartList.find(
      eachCartItem => eachCartItem.id === product.id,
    )

    if (productObject) {
      this.setState(prevState => {
        const updatedCartList = prevState.cartList.map(eachCartItem => {
          if (productObject.id === eachCartItem.id) {
            const updatedQuantity = eachCartItem.quantity + product.quantity
            return {...eachCartItem, quantity: updatedQuantity}
          }
          return eachCartItem
        })
        
        this.saveCartToLocalStorage(updatedCartList)
        return { cartList: updatedCartList }
      })
    } else {
      const updatedCartList = [...cartList, product]
      this.setState({cartList: updatedCartList}, () => {
        this.saveCartToLocalStorage(updatedCartList)
      })
    }
  }

  render() {
    const {cartList} = this.state

    return (
      <CartContext.Provider
        value={{
          cartList,
          addCartItem: this.addCartItem,
          removeCartItem: this.removeCartItem,
          incrementCartItemQuantity: this.incrementCartItemQuantity,
          decrementCartItemQuantity: this.decrementCartItemQuantity,
          removeAllCartItems: this.removeAllCartItems,
        }}
      >
        <BrowserRouter>
          <Routes>
            {/* Public Route */}
            <Route path="/login" element={<LoginForm />} />

            {/* Protected Routes */}
            <Route 
              path="/" 
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/products" 
              element={
                <ProtectedRoute>
                  <Products />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/products/:id" 
              element={
                <ProtectedRoute>
                  <ProductItemDetails />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/cart" 
              element={
                <ProtectedRoute>
                  <Cart />
                </ProtectedRoute>
              } 
            />
            <Route
              path="/payment"
              element={
                <ProtectedRoute>
                  <PaymentPage />
              </ProtectedRoute>
          }
        />

            {/* Not Found Route */}
            <Route path="/not-found" element={<NotFound />} />
            <Route path="*" element={<Navigate to="/not-found" replace />} />
          </Routes>
        </BrowserRouter>
      </CartContext.Provider>
    )
  }
}

export default App
