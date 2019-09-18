import React, { Component } from 'react';
import Menu from './MenuComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import DishDetail from './DishDetailComponent';
import '../shared/css/custom.css'
import { DISHES } from '../shared/js/dishes';
import { COMMENTS } from '../shared/js/comments';
import { LEADERS } from '../shared/js/leaders';
import { PROMOTIONS } from '../shared/js/promotions';
import { Switch, Route, Redirect } from 'react-router-dom';


class Main extends Component {

  constructor(props) {
    super(props);

    this.state = {
      dishes: DISHES,
      comments: COMMENTS,
      leaders: LEADERS,
      promotions: PROMOTIONS
    };
  }

  render() {
    const HomePage = () => {
      return (
        <Home dish={this.state.dishes.filter((dish) => dish.featured)[0]}
          promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
          leader={this.state.leaders.filter((leader) => leader.featured)[0]} />
      );
    }

    const DishWithID = ({match}) => {
      return (
        <DishDetail dish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]}
          comments={this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))}
        />
      );
    }

    return (
      <div className="App">
        <Header />
          <Switch>
            <Route path="/home" component={HomePage} />
            <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes} /> }/>
            <Route path="/menu/:dishid" component={DishWithID} />
            <Route exact path="/contactus" component={Contact} />
            <Redirect to="/home" />
          </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;
