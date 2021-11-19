const axios = require('axios');



exports.homeRoutes = (req, res) =>{

axios.get('http://localhost:5000/api/users')
    .then(function(response){
        console.log(response.data)
    res.render('index', {users:response.data});
    })
    .catch(err =>{
        res.send(err);
    })

    
}

exports.add_user = (req, res) =>{
    res.render('add-user');
}

exports.appdate_user = (req, res) =>{
    res.render('update-user');
}