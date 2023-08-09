
import React, {createContext, useReducer} from "react";
import {initialize, reducer} from "./Todos/store/reducer";
import MyToDo from "./Todos/MyToDo";
export const TodoContext = createContext();
function App (){
    const [state, dispatch] = useReducer(reducer, initialize)
    return (
       <TodoContext.Provider value={[state, dispatch]}>
           <MyToDo/>
       </TodoContext.Provider>
    )
}
export default  App;
