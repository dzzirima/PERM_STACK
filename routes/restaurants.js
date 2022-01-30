import Router from 'express';
import { createRestaurant, deleteRestaurant, getAllRestaurants, getRestaurant, updateRestaurant } from '../controllers/restaurant.js';

// import all controllers
// import SessionController from './app/controllers/SessionController';

const routes = new Router();

// Add routes
 routes.get('/',getRestaurant);
routes.post('/',createRestaurant);
routes.put('/',updateRestaurant);
routes.delete('/',deleteRestaurant);
routes.get('/all',getAllRestaurants)



export default routes ;
