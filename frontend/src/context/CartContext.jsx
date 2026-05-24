import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // ADD TO CART
  const addToCart = (product) => {
    const existingProduct = cartItems.find(
      (item) => item.name === product.name
    );

    if (existingProduct) {
      const updatedCart = cartItems.map((item) =>
        item.name === product.name
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      );

      setCartItems(updatedCart);
    } else {
      setCartItems([
        ...cartItems,
        {
          ...product,
          quantity: 1,
        },
      ]);
    }
  };

  // REMOVE ITEM
  const removeFromCart = (productName) => {
    const updatedCart = cartItems.filter(
      (item) => item.name !== productName
    );

    setCartItems(updatedCart);
  };

  // INCREASE QUANTITY
  const increaseQuantity = (productName) => {
    const updatedCart = cartItems.map((item) =>
      item.name === productName
        ? {
            ...item,
            quantity: item.quantity + 1,
          }
        : item
    );

    setCartItems(updatedCart);
  };

  // DECREASE QUANTITY
  const decreaseQuantity = (productName) => {
    const updatedCart = cartItems
      .map((item) =>
        item.name === productName
          ? {
              ...item,
              quantity: item.quantity - 1,
            }
          : item
      )
      .filter((item) => item.quantity > 0);

    setCartItems(updatedCart);
  };

  // TOTAL ITEMS
  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  // TOTAL PRICE
  const totalPrice = cartItems.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        totalItems,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);



// import { createContext, useContext, useState } from "react";

// const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//   const [cartItems, setCartItems] = useState([]);

//   // ADD TO CART
//   const addToCart = (product) => {
//     const existingProduct = cartItems.find(
//       (item) => item.name === product.name
//     );

//     if (existingProduct) {
//       const updatedCart = cartItems.map((item) =>
//         item.name === product.name
//           ? {
//               ...item,
//               quantity: item.quantity + 1,
//             }
//           : item
//       );

//       setCartItems(updatedCart);
//     } else {
//       setCartItems([
//         ...cartItems,
//         {
//           ...product,
//           quantity: 1,
//         },
//       ]);
//     }
//   };

//   // REMOVE ITEM
//   const removeFromCart = (productName) => {
//     const updatedCart = cartItems.filter(
//       (item) => item.name !== productName
//     );

//     setCartItems(updatedCart);
//   };

//   // TOTAL ITEMS
//   const totalItems = cartItems.reduce(
//     (total, item) => total + item.quantity,
//     0
//   );

//   return (
//     <CartContext.Provider
//       value={{
//         cartItems,
//         addToCart,
//         removeFromCart,
//         totalItems,
//       }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// };

// export const useCart = () => useContext(CartContext);