

import { Link } from 'react-router-dom'
import './index.css'

const SimilarProductItem = ({ productDetails }) => {
  const { id, title, brand, price, rating, imageUrl } = productDetails

  return (
    <li className="similar-product-item">
      <Link to={`/products/${id}`} className="similar-product-link">
        <img
          src={imageUrl}
          alt={`similar product ${title}`}
          className="similar-product-image"
        />
        <p className="similar-product-title">{title}</p>
        <p className="similar-products-brand">by {brand}</p>
        <div className="similar-product-price-rating-container">
          <p className="similar-product-price">Rs {price}/-</p>
          <div className="similar-product-rating-container">
            <p className="similar-product-rating">{rating}</p>
            <img
              src="https://assets.ccbp.in/frontend/react-js/star-img.png"
              alt="star"
              className="similar-product-star"
            />
          </div>
        </div>
      </Link>
    </li>
  )
}

export default SimilarProductItem
