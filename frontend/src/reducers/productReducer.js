// Reducer takes in the state and an action and returns a new state

//  IMPORTING CONSTANTS ----------------
import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,

  PRODUCT_ITEM_REQUEST,
  PRODUCT_ITEM_SUCCESS,
  PRODUCT_ITEM_FAIL,
} from '../constants/constants'
//---------------------------------------

//  INITIAL STATE OF PRODUCT LIST ----------------
const productListInitialState = {
  loading: false,
  products: [],
  error: '',  
}

// REDUCERS ----------------
// Reducer for getting a list of products
export const productListReducer = (state = productListInitialState, action) => {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return { loading: true, products: [] }
    case PRODUCT_LIST_SUCCESS:
      // if succesful, return a payload of data with the products to the state
      return { loading: false, products: action.payload }
      // if there is an error, return a new attribute error, passing in the response from the payload
    case PRODUCT_LIST_FAIL:
      return { loading: false, error: action.payload }
      // if none of the above, return the initial state
    default:
      return state
  }
}

//  INITIAL STATE OF PRODUCT ----------------
const productInitialState = {
  loading: false,
  product: {},
  error: '',  
}

// Reducer for getting a single product
export const productItemReducer = (state = productInitialState, action) => {
  switch (action.type) {
    case PRODUCT_ITEM_REQUEST:
      return { loading: true, product: {} }
    case PRODUCT_ITEM_SUCCESS:
      // if succesful, return a payload of data with the products to the state
      return { loading: false, product: action.payload }
      // if there is an error, return a new attribute error, passing in the response from the payload
    case PRODUCT_ITEM_FAIL:
      return { loading: false, error: action.payload }
      // if none of the above, return the initial state
    default:
      return state
  }
}