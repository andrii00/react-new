import './App.css';
import {useState} from "react";

export function App() {
// let [login, setLogin] = useState('')
// let [password, setPassword] = useState('')
//     function onLoginChange(e) {
//         setLogin(e.target.value)
//     }
//     function onPasswordChange(e) {
//         setPassword(e.target.value)
//     }
let [formState, setFormState] = useState({login:'', password:''})
    function onSubmit(e){
        console.log(e.target.login.value)
        console.log(e.target.password.value)
        e.preventDefault()
        console.log(formState)
    }

 function onChange(e){

     setFormState({...formState, [e.target.name]: e.target.value})
 }


    return (
     <div>
         <form onSubmit={onSubmit}>
             <input type="text" name={'login'} value={formState.login} onChange={onChange}/>
             <input type="text" name={'password'} value={formState.password} onChange={onChange}/>
             <button>submit</button>
         </form>
     </div>
    )
}

export default App;
