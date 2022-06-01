import React from "react";
import { Card,CardBody,CardImg,CardTitle,CardText } from "reactstrap";
import LoadComments from "./LoadComments";

const DishDetail = (props)=>{
    return(
        <div>
            <Card style={{marginTop:'10px'}}>
                <CardBody >
                    <CardImg top width="100%" src={props.dish.image} alt={props.dish.name} />
                    <CardTitle style={{fontWeight:'bolder',fontSize:'20px'}}>{props.dish.name}</CardTitle>
                    <CardText>{props.dish.description}</CardText>
                    <p>Price: {props.dish.price} Taka only</p>
                    <LoadComments dishComment={props.dish.comments}/>
                </CardBody>
            </Card>
        
        </div>
    );
}

export default DishDetail;