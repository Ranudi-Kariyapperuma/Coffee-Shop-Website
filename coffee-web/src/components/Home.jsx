import React from 'react'
import Button from '../layouts/Button'
import img from '../assets/img/home.png'

const Home = () => {
  return (
    <div>
        <div>
            <h1>Start your day with a steaming cup of coffee </h1>
            <p>Boost your productivity and build your mood with a glass of coffee
                in the morning.hii
            </p>

            <div>
                <Button title="ADD TO CARD "/>
                <Button title="MORE MENU"/>
            </div>
        </div>

        <div>
            <img src={img} alt="img" />
        </div>
    </div>
  )
}

export default Home