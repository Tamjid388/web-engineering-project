// Cart utility functions for managing cart operations

const BACKEND_URL = 'http://localhost/fitflex-backend/api';

/**
 * Add a product to cart
 * @param {string} userEmail - User's email address
 * @param {string} productId - Product ID to add
 * @param {number} quantity - Quantity to add (default: 1)
 * @returns {Promise<Object>} Response from the API
 */
export const addToCart = async (userEmail, productId, quantity = 1) => {
  try {
    const response = await fetch(`${BACKEND_URL}/add_to_cart.php`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user_email: userEmail,
        product_id: productId,
        quantity: quantity
      })
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error adding to cart:', error);
    return {
      status: 'error',
      message: 'Failed to add product to cart'
    };
  }
};

/**
 * Get user's cart items
 * @param {string} userEmail - User's email address
 * @returns {Promise<Object>} Cart data from the API
 */
export const getCart = async (userEmail) => {
  try {
    const response = await fetch(`${BACKEND_URL}/get_cart.php?user_email=${encodeURIComponent(userEmail)}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching cart:', error);
    return {
      status: 'error',
      message: 'Failed to fetch cart data'
    };
  }
};

/**
 * Update cart item quantity
 * @param {string} userEmail - User's email address
 * @param {number} cartId - Cart item ID
 * @param {number} quantity - New quantity
 * @returns {Promise<Object>} Response from the API
 */
export const updateCartQuantity = async (userEmail, cartId, quantity) => {
  try {
    const response = await fetch(`${BACKEND_URL}/update_cart.php`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user_email: userEmail,
        cart_id: cartId,
        quantity: quantity
      })
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error updating cart quantity:', error);
    return {
      status: 'error',
      message: 'Failed to update cart quantity'
    };
  }
};

/**
 * Remove item from cart
 * @param {string} userEmail - User's email address
 * @param {number} cartId - Cart item ID to remove
 * @returns {Promise<Object>} Response from the API
 */
export const removeFromCart = async (userEmail, cartId) => {
  try {
    const response = await fetch(`${BACKEND_URL}/remove_from_cart.php`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user_email: userEmail,
        cart_id: cartId
      })
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error removing from cart:', error);
    return {
      status: 'error',
      message: 'Failed to remove item from cart'
    };
  }
};

/**
 * Clear entire cart
 * @param {string} userEmail - User's email address
 * @returns {Promise<Object>} Response from the API
 */
export const clearCart = async (userEmail) => {
  try {
    const response = await fetch(`${BACKEND_URL}/clear_cart.php`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user_email: userEmail
      })
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error clearing cart:', error);
    return {
      status: 'error',
      message: 'Failed to clear cart'
    };
  }
};

/**
 * Check if a product is in user's cart
 * @param {string} userEmail - User's email address
 * @param {string} productId - Product ID to check
 * @returns {Promise<boolean>} True if product is in cart
 */
export const isProductInCart = async (userEmail, productId) => {
  try {
    const cartData = await getCart(userEmail);
    if (cartData.status === 'success') {
      return cartData.cart.some(item => item.product_id === productId);
    }
    return false;
  } catch (error) {
    console.error('Error checking if product is in cart:', error);
    return false;
  }
};

/**
 * Get cart item count
 * @param {string} userEmail - User's email address
 * @returns {Promise<number>} Total number of items in cart
 */
export const getCartItemCount = async (userEmail) => {
  try {
    const cartData = await getCart(userEmail);
    if (cartData.status === 'success') {
      return cartData.summary.total_items;
    }
    return 0;
  } catch (error) {
    console.error('Error getting cart item count:', error);
    return 0;
  }
};
