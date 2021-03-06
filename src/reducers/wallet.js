// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { FILTER_EXPENSE, SET_CURRENCIES, SET_EXPENSE } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SET_CURRENCIES:
    return { ...state, currencies: action.payload };
  case SET_EXPENSE:
    return { ...state, expenses: [...state.expenses, action.payload.expenses] };
  case FILTER_EXPENSE:
    return { ...state, expenses: action.payload };
  default:
    return state;
  }
};

export default wallet;
