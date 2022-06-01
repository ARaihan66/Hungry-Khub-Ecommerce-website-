import React from 'react';
import {Card, CardImg, CardImgOverlay, CardTitle, CardBody} from 'reactstrap';

function ManuItem(props) {
    return (
        <div>
            <Card onClick={props.onDishSelected} style={{margin:"10px",cursor:"pointer"}}>
            <CardBody>
                <CardImg width="100%" alt={props.dish.name} src={props.dish.image} style={{opacity:"0.7"}}/>
                    <CardImgOverlay>
                    <CardTitle style={{fontWeight:"bolder",fontSize:"20px"}}>{props.dish.name}</CardTitle>
                    </CardImgOverlay>
                        
            </CardBody>
        </Card>

        </div>
    );
}

export default ManuItem;