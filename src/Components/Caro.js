import React from 'react'
import { Carousel } from 'react-bootstrap'

const Caro = () => {
    return (
        <div style={{  borderLeft: "150px solid black",borderRight:"150px solid black"
}}>
            <Carousel className="caro">
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://cdn1.webmanagercenter.com/tekiano/wp-content/uploads/2019/01/dachra-affiche-2.jpg "
      alt="First slide" height="350px" 
    />
    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://www.leaders.com.tn/uploads/content/thumbnails/154227590333_content.jpg"
      alt="Second slide" height="350px" 
    />

    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://www.tekiano.com/wp-content/uploads/2020/12/un-fils-netflix.jpg"
      alt="Third slide"  height="350px" 
    />

   
  </Carousel.Item>
</Carousel>
        </div>
    )
}

export default Caro
