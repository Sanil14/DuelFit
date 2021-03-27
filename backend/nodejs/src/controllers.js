const { admin } = require("./services/firebase-auth");

const controller = {
    registerUser: async (req, res) => {
        const { name, email, password, age, weight, height} = req.body;
        if (!name || !email || !password || !age || !weight || !height) return res.unAuthorized();
        const user = await admin().auth().createUser({
            name,
            email,
            password,
            age,
            weight,
            height
        });
        return res.success(user);
    }
}

module.exports = controller;