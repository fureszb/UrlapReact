import { useState } from "react"

export default function FormKomponens(props){

const[obj, setObj] = useState({
    nev:"",
    szulEv:2000
})

function adatKuld(event){
    event.preventDefault();
    console.log(obj)
    props.adatKuld(obj);

}
function valtozasKezeles(event){
    console.log(event.target.value)
    let sv = {...obj}
    sv[event.target.id] = event.target.value
    setObj({...sv})
}

    return(
        
        <form onSubmit={adatKuld}>
            <label htmlFor="fname">Név:</label><br/>
            <input type="text" id="nev" value={obj.nev} onChange={valtozasKezeles}/><br/><br/>

            <label htmlFor="fname">Születési év:</label><br/>
            <input type="number" id="szulEv" value={obj.szulEv} min="1900" max="2024" onChange={valtozasKezeles}/><br/><br/>
            <br/>
            <input type="submit" value="Küld"/>
        </form> 
    );
}