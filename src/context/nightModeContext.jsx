import { createContext, useReducer } from "react"
import NightModeReducer from "./nightModeReducer";

const INITIAL_STATE = {
    nightMode : false
}

export const NightModeContext = createContext(INITIAL_STATE);

export const NightModeContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(NightModeReducer, INITIAL_STATE);

    return (
        <NightModeContext.Provider value={{nightMode: state.nightMode, dispatch}}>
            {children}
        </NightModeContext.Provider>
    )
}