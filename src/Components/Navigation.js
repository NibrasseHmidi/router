import React, { useState } from 'react'
import { Button, Container, Form, Modal, Nav, Navbar } from 'react-bootstrap'
import StarRatingComponent from 'react-star-rating-component';
import SearchIcon from '@material-ui/icons/Search';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import { Link } from 'react-router-dom';



const Navigation = ({ handleSearch, handleSearchrate, }) => {

 

 

  const handelstar = (newstar) => {
    handleSearchrate(newstar)
  }

  return (

    <>
      <Navbar style={{ backgroundColor: "black", height: 110 }} variant="dark"  >



        <Container  >






          <Navbar.Brand >


            {/*search */}





            <div className="css-add">
              <Link to="/add"><button>


                <AddCircleOutlineIcon style={{ color: "white", fontSize: 20 }} />
              </button></Link>

              <p style={{ padding: 10 }}>إضافة</p>  </div>


            <SearchIcon style={{ fontSize: 35 }} />
            <input type="text" placeholder="Search" onChange={handleSearch} />


            <div className="css-star">
              <StarRatingComponent onStarClick={handelstar}
                name="rate1"
                starCount={5}


              />  </div>



          </Navbar.Brand>

          <Navbar.Brand style={{ fontSize: 15, marginRight: 0 }} >
            الأفلام


          </Navbar.Brand>
          <Navbar.Brand style={{ fontSize: 15, marginRight: 15 }}  > المسرحيات</Navbar.Brand>



          <Navbar.Brand href="#" style={{ fontSize: 15, marginRight: 15, }} >
            المسلسلات

          </Navbar.Brand>

          <Navbar.Brand href="#" style={{ fontSize: 15, marginRight: 10 }}  >  الرئيسية </Navbar.Brand>
          <Nav>
            <img src="https://pbs.twimg.com/profile_images/928234856231735296/I8gXgkC6_400x400.jpg" alt="" />

          </Nav>

        </Container>
      </Navbar>


      {/*add button*/}





    </>

  )
}

export default Navigation
