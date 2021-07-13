import './Simpson.css'
import {useState} from "react";
export default function Simpson ({item:{name, surname, age, photo}}){

  let [toggle,setToggle] = useState('show')

    return (
        <div>
            <h2 className={toggle}>{name} {surname}. Age - {age} </h2>
            <img src={photo} alt=""/>

            <div>
            <button onClick={() => {
                if (toggle === 'hide'){
                   setToggle('show')
                }else if(toggle === 'show')
                {
                    setToggle ('hide')
                }
            } }>HIDE SHOW</button>
            </div>
        </div>
    )
}