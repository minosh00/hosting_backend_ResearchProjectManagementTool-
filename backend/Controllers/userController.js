const mongoose = require('mongoose');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { validationResult } = require("express-validator");
const User = require('../Model/user.js');

var jwtSecret = "mysecrettoken";


 const registerUser = async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password , userRole ,interestsTopicFiled } = req.body;

    
    if(!name || !email  || !password   )
    return res
    .status(400)
    .json({errorMessage : "plz all fill"});

    if(name.length<9)
    return res.status(400).json({
        errorMessage: "Please enter a first name of at least 3 characters.",
    });


    if(password.length<10)
    return res.status(400).json({
        errorMessage: "Please enter a first name of at least 3 characters.",
    });






    try {
        // See if user exists
        let user = await User.findOne({ email });

        if (user) {
            res.status(400).json({ errors: [{ msg: "User already exists" }] });
        }
        user = new User({
            name,
            email,
            password,
            userRole,
            interestsTopicFiled,
        });

        // Encrypt Password
        const salt = await bcrypt.genSalt(10);

        user.password = await bcrypt.hash(password, salt);

        await user.save();

        //Return jsonwebtoken
        const payload = {
            user: {
                id: user.id,
            },
        };

        jwt.sign(payload, jwtSecret, { expiresIn: 360000 }, (err, token) => {
            if (err) throw err;
            res.json({ token, userRole: user.userRole });
            
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server error");
    }
};

const authUser =  async (req, res) => {
	try {
		const user = await User.findById(req.user.id).select("-password");
		res.json(user);
	} catch (err) {
		console.error(err.message);
		res.status(500).send("Server Error");
	}
}

const loginUser = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json([{ msg: "Invalid Credentials" }]);
    }

    const { email, password } = req.body;

    try {
        // See if user exists
        let user = await User.findOne({ email });

        if (!user) {
            return res
                .status(400)
                .json({ errors: [{ msg: "Invalid Credentials" }] });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res
                .status(400)
                .json({ errors: [{ msg: "Invalid Credentials" }] });
        }

        //Return jsonwebtoken
        const payload = {
            user: {
                id: user.id,
            },
        };

        jwt.sign(payload, jwtSecret, { expiresIn: "1 days" }, (err, token) => {
            if (err) throw err;
            res.json({ token , user: user.name , userRole: user.userRole });
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server error");
    }
};



 const getUsers = async (req, res) => { 
    try {
        const users = await User.find();
                 
        res.status(200).json(users);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}


 const getUser = async (req, res) => { 
    const { id } = req.params;

    try {
        const users = await User.findById(id);
        
        res.status(200).json(users);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}



 const createUser = async (req, res) => {
    const users = req.body;

    const newuser = new User({ ...users, creator: req.userId })

    try {
        await newuser.save();

        res.status(201).json(newuser );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}


 const updateUser = async (req, res) => {
    const { id } = req.params;
    const { name, email, password , userRole  } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No user with id: ${id}`);

    const updatedUser = { name,  email, password , userRole , _id:id};

    await User.findByIdAndUpdate(id, updatedUser, { new: true });

    res.json(updatedUser);
}


 const deleteUser = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    await User.findByIdAndRemove(id);

    res.json({ message: "User deleted successfully." });
}

module.exports ={getUsers,getUser ,deleteUser , createUser , updateUser , registerUser , authUser , loginUser};