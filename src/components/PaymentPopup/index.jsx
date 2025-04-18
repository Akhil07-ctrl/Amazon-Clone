import { useState, useContext } from 'react'
import CartContext from '../../context/CartContext'
import './index.css'

const PaymentPopup = ({ isOpen, onClose, totalAmount, itemCount }) => {
  const [selectedPayment, setSelectedPayment] = useState('cod')
  const [orderPlaced, setOrderPlaced] = useState(false)
  const { removeAllCartItems } = useContext(CartContext)

  const handlePaymentChange = (e) => {
    setSelectedPayment(e.target.value)
  }

  const handleConfirmOrder = () => {
    setOrderPlaced(true)
    // Clear cart after successful order
    setTimeout(() => {
      removeAllCartItems()
      // Close popup after showing success message
      setTimeout(() => {
        onClose()
        setOrderPlaced(false)
      }, 2000)
    }, 500)
  }

  if (!isOpen) return null

  return (
    <div className="payment-popup-overlay">
      <div className="payment-popup-content">
        <button className="close-button" onClick={onClose}>×</button>
        
        {orderPlaced ? (
          <div className="success-message">
            <h2>Your order has been placed successfully</h2>
          </div>
        ) : (
          <>
            <h2>Payment Options</h2>
            
            <div className="order-summary">
              <h3>Order Summary</h3>
              <p>Items: {itemCount}</p>
              <p className="total-amount">Total: ₹ {totalAmount}/-</p>
            </div>
            
            <div className="payment-methods">
              <h3>Select Payment Method</h3>
              
              <div className="payment-option">
                <input 
                  type="radio" 
                  id="card" 
                  name="payment" 
                  value="card" 
                  disabled 
                  onChange={handlePaymentChange}
                />
                <label htmlFor="card">Credit/Debit Card</label>
              </div>
              
              <div className="payment-option">
                <input 
                  type="radio" 
                  id="netbanking" 
                  name="payment" 
                  value="netbanking" 
                  disabled 
                  onChange={handlePaymentChange}
                />
                <label htmlFor="netbanking">Net Banking</label>
              </div>
              
              <div className="payment-option">
                <input 
                  type="radio" 
                  id="upi" 
                  name="payment" 
                  value="upi" 
                  disabled 
                  onChange={handlePaymentChange}
                />
                <label htmlFor="upi">UPI</label>
              </div>
              
              <div className="payment-option">
                <input 
                  type="radio" 
                  id="wallet" 
                  name="payment" 
                  value="wallet" 
                  disabled 
                  onChange={handlePaymentChange}
                />
                <label htmlFor="wallet">Wallet</label>
              </div>
              
              <div className="payment-option">
                <input 
                  type="radio" 
                  id="cod" 
                  name="payment" 
                  value="cod" 
                  checked={selectedPayment === 'cod'} 
                  onChange={handlePaymentChange}
                />
                <label htmlFor="cod">Cash on Delivery</label>
              </div>
            </div>
            
            <button 
              className="confirm-order-button" 
              onClick={handleConfirmOrder} 
              disabled={selectedPayment !== 'cod'}
            >
              Confirm Order
            </button>
          </>
        )}
      </div>
    </div>
  )
}

export default PaymentPopup