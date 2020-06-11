import { Request, Response } from 'express';
import places from '../models/restaurant';
export default class AuthController {

    /**
     * findRestaurant
     * @param req , res
     */

    public static async findRestaurant(req, res) {
        try {
            const { lat, lng } = req.query;
            if (!lat || !lng) {
                res.json({
                    status: 200,
                    mesasge: 'Cords is an empty object'
                })
            }
            console.log(Number(lat) , Number(lng))
            const restaurant = await places.find({ 'geometry.coordinates':
            { $geoWithin:
               { $centerSphere: [ [  lng ,  lat ],  0.0004 ]  } } }, {name : 1})
            if (restaurant) {
                res.json({
                    status: 200,
                    data: restaurant,
                    mesasge: 'Restaurant'
                })
            } else {
                res.json({
                    status: 200,
                    data: {},
                    mesasge: 'Not found'
                })
            }
        } catch (error) {
            res.json({
                status: 500,
                data: {},
                mesasge: 'Internal Server Errro'
            })
        }
    }
}