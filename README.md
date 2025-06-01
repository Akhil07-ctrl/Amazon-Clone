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

## 🛠️ Technologies Used

- **React 19**: Modern UI library for building user interfaces
- **React Router v7**: For navigation and routing
- **Vite**: Next-generation frontend tooling
- **Context API**: For state management across components
- **LocalStorage**: For persisting cart data
- **CSS**: Custom styling for all components

## 🏗️ Project Structure

The application follows a component-based architecture:

- **Authentication**: Login system with protected routes
- **Home**: Landing page showcasing featured products
- **Products**: Browse and filter through the product catalog
- **Product Details**: Detailed view of individual products
- **Cart**: View and manage items in your shopping cart
- **Checkout**: Complete the purchase process

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

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## 📝 License

This project is open source and available under the MIT License.

## 📁 Project Structure

```
Amazon-Clone/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── auth/
│   │   ├── cart/
│   │   ├── checkout/
│   │   ├── header/
│   │   ├── home/
│   │   ├── products/
│   │   └── productDetails/
│   ├── context/
│   │   └── CartContext.js
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
│   └── vite-env.d.ts
└── package.json
```

## 🧪 Testing

This project currently doesn't have automated tests implemented. However, manual testing can be performed by:

1. Testing all navigation routes
2. Verifying cart functionality
3. Testing login/logout flow
4. Checking responsive design on different screen sizes

## 🙋‍♂️ FAQ

**Q: How do I clear my cart?**
A: You can clear your cart by removing items one by one or by refreshing the page (since cart data is stored in localStorage).

**Q: Can I add my own products?**
A: Currently, this is a demo application with hardcoded products. Adding custom products would require backend integration.

**Q: Is this a fully functional e-commerce site?**
A: This is a frontend-only demo application. While it simulates the shopping experience, it doesn't have a real payment gateway integration.

## 🧑‍💻 Author

👤 **Akhil07-ctrl**

- GitHub: [@Akhil07-ctrl](https://github.com/Akhil07-ctrl)
- Portfolio: [Portfolio](https://portfolio-nine-flax-29.vercel.app/)

## 📜 License

This project is open source and available under the MIT License.
