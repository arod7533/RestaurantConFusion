import React, { Component } from 'react';
import Menu from './MenuComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import About from './AboutComponent';
import DishDetail from './DishDetailComponent';
import '../shared/css/custom.css'
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
      dishes:  state.dishes,
      comments: state.comments,
      leaders: state.leaders,
      promotions: state.promotions
    }
}

class Main extends Component {



  render() {
    const HomePage = () => {
      return (
        <Home dish={this.props.dishes.filter((dish) => dish.featured)[0]}
          promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
          leader={this.props.leaders.filter((leader) => leader.featured)[0]} />
      );
    }

    const DishWithID = ({match}) => {
      return (
        <DishDetail dish={this.props.dishes.filter((dish) => dish.id === parseInt(match.params.dishid,10))[0]}
          comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishid,10))} />
      );
    }

    const AboutPage = () => {
      return (
        <About leaders = {this.props.leaders} />
      );
    }

    return (
      <div className="App">
        <Header />
          <Switch>
            <Route path="/home" component={HomePage} />
            <Route exact path="/aboutus" component={AboutPage} />
            <Route exact path="/menu" component={() => <Menu dishes={this.props.dishes} /> }/>
            <Route path="/menu/:dishid" component={DishWithID} />
            <Route exact path="/contactus" component={Contact} />
            <Redirect to="/home" />
          </Switch>
        <Footer />
      </div>
    );
  }
}

export default withRouter((connect(mapStateToProps)(Main)));
