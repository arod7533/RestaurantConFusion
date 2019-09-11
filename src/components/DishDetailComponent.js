import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';


class DishDetail extends Component {
    constructor(props) {
        super(props);
    }

    renderDish(dish) {
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
            )
        }
    }

    formatDate(dateString) {
        var d = new Date(dateString.trim());
        var month = d.toLocaleDateString("en-US", {month: "short"});
        var day = d.toLocaleDateString("en-US", {day: "2-digit"});
        var year = d.toLocaleDateString("en-US", {year: "numeric"});
        var fullDate = month + ", " + day + " " + year;
        console.log(dateString);
        console.log(d);
        console.log(month);
        console.log(day);
        console.log(year);
        console.log(fullDate);
        return fullDate;

    }

    renderComments(comments) {

        if (comments != null ) {
        
        const comment = comments.map((comm) => {
            return (
                <ul className="commList" key={comm.id}>
                    <li>{comm.comment}</li>
                    <li>--{comm.author}, {this.formatDate(comm.date.substring(0,10))}</li>
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



    render() {
        return(
            <div className="row">
                {this.renderDish(this.props.selectedDish)}
                {this.renderComments(this.props.comments)}
            </div>
        );
    }
}
    


export default DishDetail;
  