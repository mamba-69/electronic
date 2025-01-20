const fs = require("fs");
const path = require("path");

const structure = {
  backend: {
    config: ["database.js", "auth.js", "cloudinary.js"],
    models: ["User.js", "Product.js", "Order.js", "Category.js", "Review.js"],
    controllers: [
      "authController.js",
      "productController.js",
      "orderController.js",
      "adminController.js",
      "userController.js",
    ],
    middleware: ["auth.js", "admin.js", "imageUpload.js", "errorHandler.js"],
    routes: ["auth.js", "products.js", "orders.js", "admin.js", "users.js"],
    "server.js": "",
  },
  frontend: {
    public: {
      "index.html": "",
      assets: {},
    },
    src: {
      components: {
        layout: ["Header.jsx", "Footer.jsx", "Sidebar.jsx", "Navigation.jsx"],
        auth: ["LoginForm.jsx", "RegisterForm.jsx", "ResetPassword.jsx"],
        products: [
          "ProductCard.jsx",
          "ProductGrid.jsx",
          "ProductDetails.jsx",
          "ProductFilters.jsx",
        ],
        cart: ["CartItem.jsx", "CartSummary.jsx", "Checkout.jsx"],
        admin: [
          "Dashboard.jsx",
          "ProductForm.jsx",
          "OrdersTable.jsx",
          "Analytics.jsx",
        ],
      },
      pages: {
        admin: [
          "AdminDashboard.jsx",
          "ProductManagement.jsx",
          "OrderManagement.jsx",
        ],
        "Home.jsx": "",
        "Shop.jsx": "",
        "ProductPage.jsx": "",
        "Cart.jsx": "",
        "Profile.jsx": "",
      },
      context: ["AuthContext.jsx", "CartContext.jsx", "ThemeContext.jsx"],
      hooks: ["useAuth.js", "useCart.js", "useTheme.js"],
      styles: {
        themes: ["light.js", "dark.js"],
        "animations.css": "",
        "global.css": "",
      },
      utils: ["api.js", "validation.js", "helpers.js"],
      "App.jsx": "",
    },
    "package.json": "",
    "vite.config.js": "",
  },
  ".env": "",
  ".gitignore": "",
  "README.md": "",
  "package.json": "",
};

function createStructure(basePath, structure) {
  for (const [key, value] of Object.entries(structure)) {
    const currentPath = path.join(basePath, key);

    if (Array.isArray(value)) {
      fs.mkdirSync(currentPath, { recursive: true });
      value.forEach((file) => {
        fs.writeFileSync(path.join(currentPath, file), "");
      });
    } else if (typeof value === "object") {
      fs.mkdirSync(currentPath, { recursive: true });
      createStructure(currentPath, value);
    } else {
      fs.mkdirSync(path.dirname(currentPath), { recursive: true });
      fs.writeFileSync(currentPath, "");
    }
  }
}

// Create base directory
const projectName = "electronic-store";
fs.mkdirSync(projectName, { recursive: true });

// Create structure
createStructure(projectName, structure);

console.log("Project structure created successfully!");
