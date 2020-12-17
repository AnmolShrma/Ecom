import React, {useReducer, useMemo} from 'react';
import PropTypes from 'prop-types';

const initialState = {};

const initialContext = [{...initialState}, () => {}];

export const CheckoutItemsContext = React.createContext(initialContext);

const updater = (state, update) => {
  return {...update};
};

export function CheckoutItemsProvider(props) {
  const [checkoutItemsState, updateCheckoutItemsState] = useReducer(
    updater,
    initialState,
  );
  const value = useMemo(() => [checkoutItemsState, updateCheckoutItemsState], [
    checkoutItemsState,
  ]);
  return (
    <CheckoutItemsContext.Provider value={value}>
      {props.children}
    </CheckoutItemsContext.Provider>
  );
}

CheckoutItemsProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
