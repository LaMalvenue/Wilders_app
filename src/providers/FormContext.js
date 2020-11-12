import React, {createContext, useContext, useReducer} from "react";

export const FormContext = createContext();

const initialValue = {showAddForm: false};

const reducer = (oldState, action) => {
    if (action.type === 'TOGGLE') {
        return {...oldState, showAddForm: !oldState.showAddForm};
    } else {
        return oldState;
    }
};

export const FormContextProvider = ({children}) => {
    const [formState, dispatch] = useReducer(reducer, initialValue);

    return (
        <FormContext.Provider value={{formState, dispatch}}>
            {children}
        </FormContext.Provider>
    );
};

export function useAddForm() {
    const {formState, dispatch} = useContext(FormContext);
    return {
        showAddForm: formState.showAddForm,
        toggle: () => dispatch({type: 'TOGGLE'})
    };
}