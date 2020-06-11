import { Application } from 'express';

import MatchController from '../controllers/matchRoutes';

export default class AuthRoutes {

  static init(app: Application) {
    // Register/Login a user
    app.get('/restaurant', MatchController.findRestaurant);
 
	}
}