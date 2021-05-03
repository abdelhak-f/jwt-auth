const express = require("express");
const router = express.Router();

router.get('/', (req, res) => {
    
    res.send('Hello world !!');
});

router.route('/register').post((req,res)=>{
    if(!isEmpty(req.body.firstName) && !isEmpty(req.body.lastName) && !isEmpty(req.body.email) && !isEmpty(req.body.password)){
        if(isEmail(req.body.email)){
            Account.findOne({email : req.body.email})
            .then(response => {
                if(response){
                    return res.status(400).json({message : "Email already used, please try again."})
                }
                else {
                    newAccount = new Account({
                        firstName : req.body.firstName,
                        lastName : req.body.lastName,
                        email : req.body.email,
                        password : req.body.password,
                        joinedDate : Date.now()
                    })
                    newAccount.password = bcrypt.hashSync(req.body.password,10);
                    newAccount.save()
                    .then(response=> {
                        if(response) {
                            return res.status(200).json({message : "Account created successfully, please log in."});
                        }
                    })
                    .catch(err => {
                        return res.status(500).json({message : "Oops, we're sorry but it appears that something went wrong."});
                    })
                }
            })
            .catch(err=>{
                return res.status(500).json({message : "Oops, we're sorry but it appears that something went wrong."});
            })
        }
        else {
            return res.status(400).json({msg : "Please enter a valid email address."});
        }
    }
    else {
        return res.status(400).json({msg : "All fields are required, please try again."})
    }
})

module.exports = router;