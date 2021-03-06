const express = require('express');
const route = express.Router()

const services = require('../services/render');
const controller = require('../controller/controller');


/**
 * @description Root Rout
 * @method GET
 */

route.get('/',services.homeRoutes);

/**
 * @description add users
 * @method GET add user
 */

route.get('/add_user',services.add_user)

/**
 * @description appdate users
 * @method GET appdate user
 */

route.get('/appdate_user',services.appdate_user)


//API
route.post('/api/users', controller.create);
route.get('/api/users', controller.find);
route.put('/api/users/:id', controller.update);
route.delete('/api/users/:id', controller.delete);


module.exports=route