import { DISHES } from '../shared/js/dishes';
import { COMMENTS } from '../shared/js/comments';
import { LEADERS } from '../shared/js/leaders';
import { PROMOTIONS } from '../shared/js/promotions';


export const initialState = {
    dishes: DISHES,
    comments: COMMENTS,
    leaders: LEADERS,
    promotions: PROMOTIONS
};

export const Reducer = (state = initialState, action) => {
    return state;
};