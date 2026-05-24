import {
  createContext,
  useContext,
  useState,
} from "react";

const WishlistContext = createContext();

export const WishlistProvider = ({
  children,
}) => {
  const [wishlistItems, setWishlistItems] =
    useState([]);

  // ADD / REMOVE WISHLIST
  const toggleWishlist = (product) => {
    const exists = wishlistItems.find(
      (item) => item.name === product.name
    );

    if (exists) {
      setWishlistItems(
        wishlistItems.filter(
          (item) => item.name !== product.name
        )
      );
    } else {
      setWishlistItems([
        ...wishlistItems,
        product,
      ]);
    }
  };

  // CHECK EXISTS
  const isInWishlist = (productName) => {
    return wishlistItems.some(
      (item) => item.name === productName
    );
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlistItems,
        toggleWishlist,
        isInWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () =>
  useContext(WishlistContext);