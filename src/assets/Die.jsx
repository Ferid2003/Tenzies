import "./Die.css"

function Die(prop){



    const style_hold = {
        backgroundColor: prop.hold ? "#59E391" : "#FFFFFF"
    }


    return (
        <a onClick={prop.Ohold} style={style_hold}  className="die">{prop.num}</a>
    )
}

export default Die;