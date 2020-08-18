import React from 'react'

function Header(){
    const name ="Ssali Jonathan"
    const data= new Date()


    const date_today = data.getDate()
    const day=data.getDay()
    const year= data.getFullYear()
    const hours =data.getHours()

    const styles={
        color:"red"
    }

    if (hours>12){
        styles.color="green"
    }
    return(
        <div className="header">
            <h1 className="head-text" style={styles}>
                    Hello, This is {name} and it is {date_today}th {day}, {year}
            </h1>
        </div>
    )
}


export default Header