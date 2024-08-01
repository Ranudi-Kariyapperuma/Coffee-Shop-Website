import React from 'react'
import ReviewCard from '../layouts/ReviewCard'
import img1 from '../assets/img/pic1.png'    
import img2 from '../assets/img/pic2.png'    
import img3 from '../assets/img/pic3.png'  

const Review = () => {
  return (
    <div>
        <h1>Customer's Reviews</h1>

        <div>
            <ReviewCard img={img1} title="Oliver Ava" />
            <ReviewCard img={img2} title="John Deo" />
            <ReviewCard img={img3} title="Sofia Zoe" />
        </div>
    </div>
  )
}

export default Review