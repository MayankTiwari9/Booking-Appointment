const User = require('../model/user');

exports.postAddUser = (req, res, next) => {
    const name = req.body.name;
    const email = req.body.email;
    const number = req.body.number;

    User.create({
        name: name,
        email: email,
        number: number
    })
    .then(() => {
        console.log("User Created", name, email, number);
        res.status(201).json({message: 'User created successfully'});
    }).catch((err) => {
        console.log(err);
    })
}

exports.getUsers = (req, res, next) => {
    User.findAll()
    .then((users) => {
        res.status(200).json(users);
    })
    .catch((err) => console.log(err));
}

exports.postDeleteUser = (req, res, next) => {
    const userId = req.body.id;
    User.findOne({where: {id: userId}})
    .then((user) => {
        if(!user){
            return res.status(404).json({message: "User Not Found"});
        }
        return user.destroy();
    })
    .then(() => {
        res.status(200).json({message: "User Delete Successfully"});
    })
    .catch((err) => console.log(err));
}