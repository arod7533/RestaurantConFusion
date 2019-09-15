import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';


function RenderDish({dish}) {
    if (dish != null) {
        return( 
            <div key={dish.id} className="col-12 col-md-5 m-1">
                <Card>
                    <CardImg src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle heading>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        );
    }
    else {
        return(
            <div></div>
        );
    }
}

function FormatDate(dateString) {
    var d = new Date(dateString.trim());
    var month = d.toLocaleDateString("en-US", {month: "short"});
    var day = d.toLocaleDateString("en-US", {day: "2-digit"});
    var year = d.toLocaleDateString("en-US", {year: "numeric"});
    var fullDate = month + ", " + day + " " + year;
    return fullDate;

}

function RenderComments({dish}) {

    if (dish != null ) {
    
    const comment = dish.comments.map((comm) => {
        return (
            <ul className="commList" key={comm.id}>
                <li>{comm.comment}</li>
                <li>--{comm.author}, {FormatDate(comm.date.substring(0,10))}</li>
            </ul>
        );
    });

    return (

        <div className="col-12 col-md-5 m-1">
            <h4 className="commentTitle">Comments</h4>
            <br></br>
            {comment}
        </div>
        );
    }
    else {
        return (
            <div></div>
        );
    }
}

const DishDetail = (props) => {
    return(
        <div className="container">
            <div className="row">
                <RenderDish dish={props.dish} />
                <RenderComments dish={props.dish} />
            </div>
        </div>
    );
}    
        
export default DishDetail;
  