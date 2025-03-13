

import { useState, useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import CartContext from '../../context/CartContext'; // Import CartContext
import './index.css';

const PaymentPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { removeAllCartItems } = useContext(CartContext); // Access removeAllCartItems
  const totalAmount = location.state?.total || 0;
  const [paymentStatus, setPaymentStatus] = useState(null); // 'success', 'cancelled', or null

  const handlePayment = () => {
    // Simulate payment processing
    setTimeout(() => {
      setPaymentStatus('success');
      removeAllCartItems(); // Clear the cart
      // Navigate to cart after 1 seconds
      setTimeout(() => {
        navigate('/cart');
      }, 2000);
    }, 500);
  };

  const handleCancel = () => {
    // Simulate cancellation
    setTimeout(() => {
      setPaymentStatus('cancelled');
      // Navigate to cart after 1 seconds
      setTimeout(() => {
        navigate('/cart');
      }, 2000);
    }, 500);
  };

  return (
    <div className="payment-container">
      <h2 className="payment-header">Payment Details</h2>
      <div className="payment-card">
        {paymentStatus === 'success' ? (
          <div className="payment-success-message">
            <p>Payment Successful!</p>
            <p>Redirecting to cart...</p>
          </div>
        ) : paymentStatus === 'cancelled' ? (
          <div className="payment-cancelled-message">
            <p>Payment Cancelled!</p>
            <p>Redirecting to cart...</p>
          </div>
        ) : (
          <>
            <div className="amount-section">
              <h3>Total Amount:</h3>
              <p className="total-amount">₹ {totalAmount}/-</p>
            </div>

            <form className="payment-form">
              <div className="form-group">
                <label htmlFor="name">Name on Card</label>
                <input type="text" id="name" placeholder="John Doe" />
              </div>

              <div className="form-group">
                <label htmlFor="cardNumber">Card Number</label>
                <input
                  type="text"
                  id="cardNumber"
                  placeholder="1234 5678 9012 3456"
                  maxLength="19"
                />
              </div>

              <div className="row">
                <div className="form-group">
                  <label htmlFor="expiry">Expiry Date</label>
                  <input type="text" id="expiry" placeholder="MM/YY" />
                </div>

                <div className="form-group">
                  <label htmlFor="cvv">CVV</label>
                  <input type="text" id="cvv" placeholder="123" maxLength="3" />
                </div>
              </div>

              <div className="button-group">
                <button
                  type="button"
                  className="cancel-button"
                  onClick={handleCancel}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="pay-now-button"
                  onClick={handlePayment}
                >
                  Pay Now
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default PaymentPage;
