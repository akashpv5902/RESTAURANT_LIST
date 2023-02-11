import React from 'react'
import { useParams } from 'react-router-dom'
import { useState,useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'
import ListGroup from 'react-bootstrap/ListGroup';
import Restop from './Restop';
import Restreview from './Restreview'

function Viewrest() {
    const urlParams=useParams()
    console.log(urlParams.id);

    const [restaurantlist,setRestaurantlist]=useState([])

  //to create a function for API call
  const getRestaurant=async()=>{
    //async await
    await fetch('/restaurants.json')  //Asynchronous call
    .then((data)=>data.json()
      .then((result)=>setRestaurantlist(result.restaurants))
    )
  }
  console.log(restaurantlist);

  useEffect(()=>{
    getRestaurant()
  },[])

  const viewrest=restaurantlist.find(item=>item.id==urlParams.id)
  console.log(viewrest);

  return (
    <div>
        {

            viewrest?(
                <Row className='m-4'>
                    <Col md={3}>
                        <Image src={viewrest.photograph}  fluid/>
                    </Col>
                    <Col className=''md={8}>
                        <h1 className='mb-4'>{viewrest.name}</h1>
                        <ListGroup>
                            <ListGroup.Item variant="dark">Id : {viewrest.id}</ListGroup.Item>
                            <ListGroup.Item variant="dark">Name : {viewrest.name}</ListGroup.Item>
                            <ListGroup.Item variant="dark">Address : {viewrest.address}</ListGroup.Item>
                            <ListGroup.Item variant="dark">Neighborhood : {viewrest.neighborhood}</ListGroup.Item>
                            <ListGroup.Item variant="dark">Cuisine type : {viewrest.cuisine_type}</ListGroup.Item>
                            <ListGroup.Item variant="dark">Latitude and Longitude : </ListGroup.Item>
 
                        </ListGroup>
                        <><Restop rev={viewrest.reviews} op={viewrest.operating_hours}/></>
                        <Restreview review={viewrest.reviews}/>
                            <></>
                        <></>
                    </Col>
                </Row>
            ):'null'
            
        }
    </div>
  )
}

export default Viewrest