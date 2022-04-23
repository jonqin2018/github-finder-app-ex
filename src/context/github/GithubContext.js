import {createContext, useReducer} from "react"
import githubReducer from "./GithubReducer"

const GithubContext = createContext()

export const GithubProvider  = ({children}) => {
    const initialstate = {
        users: [],
        loading: false,
        repos: [],
        user: {}
    }

    const [state, dispatch] = useReducer(githubReducer, initialstate)
   
    return <GithubContext.Provider
      value= {{
          ...state,
          dispatch 
  
  }}>
        {children}
  </GithubContext.Provider>
}

export default GithubContext