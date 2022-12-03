const burgerState = {
  burger: {
    salad: 0,
    cheese: 0,
    beef: 0,
  },
  menu: {
    salad: 10,
    cheese: 20,
    beef: 55,
  },
  total: 0,
  isOpenModal: false,
};

export const orderBurgerReducer = (state = burgerState, action) => {
  switch (action.type) {
    case 'TANG_GIAM_SO_LUONG': {
        let {food, payload} = action;

        if (state.burger[food] < 1 &&  payload === -1 ) {
            return {...state}
        }

        let newBurger = {...state.burger};

        newBurger[food] += payload;

        const newTotal = state.total + (state.menu[food] * payload);
        
        return {...state, burger: newBurger, total: newTotal}
    }
    case "OPEN_MODAL": {
      const newState = {...burgerState};
      newState.isOpenModal = action.payload;
      return newState;
    }
    
    default: return state;
  }
};
