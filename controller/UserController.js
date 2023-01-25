import User from "../models/User.js";

export const addUser = async (req, res, next) => {
    try {
        let exist = await User.findOne({ sub: req.body.sub });
        if (exist) {
            res.status(200).json({ msg: 'user already exist' });
            return;
        }
        const newUser = await User.create(req.body);
        res.status(200).json(newUser)
    } catch (error) {
        console.log(error)
    }
}

export const getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        console.log(error);
    }
}