# Amazon Clone

A fully responsive e-commerce web application built with React and Vite that mimics the core functionality of Amazon's shopping experience.

## 🚀 Live Demo

Check out the live demo: [Amazon Clone](https://Akhil07-ctrl.github.io/Amazon-Clone/)

## ✨ Features

- **User Authentication**: Secure login system with protected routes
- **Product Browsing**: Browse through various products with filtering options
- **Product Details**: View detailed information about each product
- **Shopping Cart**: Add, remove, and modify items in your cart
- **Cart Persistence**: Cart data is saved in localStorage for session persistence
- **Checkout Process**: Complete payment flow for purchased items
- **Responsive Design**: Fully responsive UI that works on mobile and desktop

## 🏗️ Project Structure

The application follows a modular and scalable architecture:

```
Amazon-Clone/
├── public/                        # Static assets
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── assets/                   # Image assets
│   ├── components/               # Reusable UI components
│   │   ├── AllProductsSection/  # Section for all products
│   │   ├── Cart/                # Main cart component
│   │   ├── CartItem/            # Individual cart item
│   │   ├── CartListView/        # Cart items list view
│   │   ├── CartSummary/         # Cart summary display
│   │   ├── EmptyCartView/       # Empty cart state
│   │   ├── FiltersGroup/        # Product filters
│   │   ├── Header/              # Navigation header
│   │   ├── Home/               # Home page components
│   │   ├── LoginForm/           # User login form
│   │   ├── NotFound/            # 404 page
│   │   ├── PaymentPage/         # Payment processing page
│   │   ├── PaymentPopup/        # Payment confirmation popup
│   │   ├── PrimeDealsSection/   # Prime deals section
│   │   ├── ProductCard/         # Product display card
│   │   ├── ProductItemDetails/  # Detailed product view
│   │   ├── Products/            # Products listing
│   │   ├── ProductsHeader/      # Products section header
│   │   ├── ProtectedRoute/      # Route protection
│   │   └── SimilarProductItem/  # Similar products display
│   ├── context/               # State management
│   │   └── CartContext.jsx    # Shopping cart context
│   ├── App.jsx                # Root component
│   ├── App.css                # Root styles
│   ├── index.css              # Global styles
│   └── main.jsx              # Entry point
├── .gitignore                  # Git ignore file
├── package.json               # Project dependencies
├── vite.config.js            # Vite configuration
├── vercel.json              # Vercel deployment configuration
└── eslint.config.js         # ESLint configuration
```

## 🛠️ Technologies Used

- **React 19**: Modern UI library for building user interfaces
- **React Router v7**: For navigation and routing
- **Vite v6**: Next-generation frontend tooling
- **Context API**: For state management
- **js-cookie**: For session management
- **React Icons**: For UI icons
- **gh-pages**: For GitHub Pages deployment
- **ESLint**: For code quality
- **Custom CSS**: For styling and theming



## 🚦 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Akhil07-ctrl/Amazon-Clone.git
   cd Amazon-Clone
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173/Amazon-Clone`

## 📦 Build for Production

```bash
npm run build
```

## 🚀 Deployment

The project is configured for GitHub Pages deployment:

```bash
npm run deploy
```

## 🧪 Testing

This project currently uses manual testing for quality assurance. Here's how to test the application:

1. **Navigation Testing**
   - Verify all routes work correctly
   - Test protected routes with login
   - Check navigation between pages

2. **Cart Functionality**
   - Add different products to cart
   - Verify cart persistence
   - Test cart item removal
   - Check cart summary calculations

3. **Authentication**
   - Test login with valid credentials
   - Verify logout functionality
   - Check protected route access

4. **Responsive Design**
   - Test on different screen sizes
   - Verify mobile layout
   - Check desktop responsiveness
   - Test tablet view

5. **Product Features**
   - Verify product filtering
   - Test product search
   - Check product details page
   - Verify similar products display

6. **Payment Process**
   - Test payment flow
   - Verify payment confirmation
   - Check payment popup functionality

**Note:** This is a frontend-only demo application, so some features like actual payment processing and backend integration are simulated.

## 🙋‍♂️ FAQ

**Q: How do I clear my cart?**
A: You can clear your cart by removing items one by one or by refreshing the page (since cart data is stored in localStorage).

**Q: Can I add my own products?**
A: Currently, this is a demo application with hardcoded products. Adding custom products would require backend integration.

**Q: Is this a fully functional e-commerce site?**
A: This is a frontend-only demo application. While it simulates the shopping experience, it doesn't have a real payment gateway integration.

## 🧑‍💻 Author

👤 **Kundena Akhil**

- GitHub: [@Akhil07-ctrl](https://github.com/Akhil07-ctrl)
- Portfolio: [Portfolio](https://portfolio-nine-flax-29.vercel.app/)

## 📜 License

This project is open source and available under the MIT License.
