import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import CommentForm from './CommentFormComponent';




function RenderDish({dish}) {
    if (dish != null) {
        return ( 
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
        return (
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

function RenderComments({comments}) {
    if (comments != null ) {
        return (
            <div className="col-12 col-md-5 m-1">
                <h4>Comments</h4>
                <ul className="list-unstyled">
                    {comments.map((comment) => {
                        return (
                            <li key={comment.id}>
                                <p>{comment.comment}</p>
                                <p>-- {comment.author}, {FormatDate(comment.date.substring(0,10))}</p>
                            </li>
                        );
                    })}
                </ul>
                <CommentForm />
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
    if (props.dish != null ) {
        return(
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <RenderDish dish={props.dish} />
                    <RenderComments comments={props.comments} />
                </div>
            </div>
        );
    }
    else {
        return (
            <div>None</div>
        );
    }
}    
        
export default DishDetail;
  