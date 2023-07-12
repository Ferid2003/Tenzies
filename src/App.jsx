import Die from "./assets/Die.jsx";
import './App.css'
import {useState ,useEffect} from "react";

function App() {



    const [ar,setAr] = useState(allNewDice)

    useEffect(() => {
        const firstValue = ar[0].num
        const allHeld = ar.every(a => a.hold)
        const allSameNumber = ar.every(a => a.num === firstValue)
        if(allHeld && allSameNumber) {
            document.getElementById("btn").innerText="Retry"
        }
    }, [ar])


    function rand(){
        return Math.floor(Math.random() * 10);
    }

    function oneNewDie(id){
        return {num:rand(),id:id,hold:false}
    }

    function allNewDice(){
        const arr =[]

        for(let i = 0; i<10; i++){
            arr.push({num:rand(),id:i,hold:false})
        }
        return arr;
    }





    const dies =ar.map(obj => {
        return (
            <Die  Ohold={() => handleOnClick(obj.id)} {...obj} key={obj.id}  />
        )
    })

    function handleOnClick(id){
        const b = ar.find(el => el.id === id)
        const qq = {...b,hold:!b.hold}
        const renewed = ar.map(el => el.id === id ? qq :el)
        setAr(renewed)
        return qq.hold
        // checkWictory()
    }


    function newDie(event){
        event.preventDefault()

        setAr(prevAr => prevAr.map(obj => obj.hold ? obj : oneNewDie(obj.id)))
        if (document.getElementById("btn").innerHTML==="Retry"){
            setAr(allNewDice())
            document.getElementById("btn").innerHTML="Roll"
        }

    }






    return(
        <main>
            <div className="tenzies-holder">
                <h1 className="title">Tenzies</h1>
                <p className="desc">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
                <div className="die-holder">
                    {dies}
                </div>
                <div className="btn-holder">
                    <button id="btn" onClick={newDie} className="btn">Roll</button>
                </div>
            </div>
        </main>
    )
}

export default App
