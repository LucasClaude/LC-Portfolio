import { createContext, useReducer } from "react"

let MainReducer = (state: any, action: any) => {
  switch (action.type) {
    case 'UPDATE_THEME':
      localStorage.setItem('theme', action.payload);
      return { ...state, theme: action.payload };
    default:
      return state;
  }
};

const initialState = {
  theme: localStorage.getItem('theme'),
}

const MainContext = createContext<any>([
  initialState,
]);

function MainContextProvider(props: any) {
  const [state, dispatch] = useReducer(MainReducer, initialState);

  return (
    <MainContext.Provider value={{ state, dispatch }}>
      {props.children}
    </MainContext.Provider>
  )
}

export { MainContext, MainContextProvider };