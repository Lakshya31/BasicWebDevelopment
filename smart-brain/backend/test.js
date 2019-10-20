const bcrypt = require('bcrypt');

bcrypt.hash("0000", 10, function(err, hash) {
    if(!err){
        console.log(hash);
    }
    else{
        throw err;
    }
});