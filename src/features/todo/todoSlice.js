// createSlice method will create slice

//slice is bigger version of reducers, reducers is a functionality/function

//nanoid is a method which will generate unique id
import { createSlice, nanoid } from "@reduxjs/toolkit";


// strating ma store kevo dekhase, koi intial value hase, empty hase etc, to aena mate phela intial state banaviye
//intialState can be array or object -> here we are keeping object as hume object ni ander bo badhu kari sakhiye
const initialState = {
    todos: [
        {
            id: 1,
            text: "Hello"
        }
    ]

    // except todo we can also keep many property
}


// making/creating slice
// createSlice method ma mostly object aavse
export const todoSlice = createSlice({
    // slices na name hoi
    // to je name rakhiye te dhyan thi rakhvana, kemke jyare reduxtoolkit use karisu chrome extension tyare te aj name thi aavse

    // first thing:- name property redux tools kit ni ander che
    name: 'todo',

    //second thing:- badhi slice nu ek intial state hoi
    initialState,

    //third thing:- reducers
    // reducers ma properties and functions aave
    reducers: {
        // redux tool ma defination lakhisu
        // jyare pan define karisu tyare 2 things nu access malse 
        // 1 thing:- state -> state amna intial state ma je je value che aenu access aapse (that is current state of current)
        // 2 thing:- action -> if koi vaar aapni pase values aave, for eg:- jyare aapne koi value joiye jem delete mate id to tyare teni value aa action mathi malse (that is je data pass thayu te)
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),

                // payload ek object che jema id, email kai pan aavi sakhe
                text: action.payload       //or   //text: action.payload.text -> as text nu name che so action.payload aj lakhi didu
            }

            // aji todo state ni ander thodi na gayu che, kem ke intial state to key didi but state ne update to karvi aj padse ne
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
        updateTodo: (state, action) => {
            state.todos = state.todos.map((todo) => todo.id === id ? action.payload : todo)
        },


        // addTodo and removeTodo is a property
        // () => {} :- is a function

    }
})

//step 3
// have to complusory export individual reducer as it will help in component
export const {addTodo, removeTodo, updateTodo} = todoSlice.actions;


//step 4
//store ne pan awareness joie badha reducer mate. if awareness nai hase to ae maintain nai kari sakhse coz ae restricted store che ke ae badha thi value lai ne update ni karse, je value tame register karso te aj value ne laine update karse, to etle badha reducer no list joise
export default todoSlice.reducer


