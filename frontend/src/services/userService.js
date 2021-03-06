import axiosModule from "axios";
import { auth } from "./firebase-auth";

const API_URL = "http://localhost:5000";
let token;

const axios = axiosModule.create({
    baseURL: API_URL,
    withCredentials: true
});

const userService = {
    createUserAccount: async (data) => {
        try {
            const resp = await axios.post("/user/register", data) // name, email, password, age, weight, height
            return resp.data;
        } catch (e) {
            console.log(e);
            return {
                success: false
            }
        }
    },

    loginAccount: async (email, password) => {
        await auth().signOut();
        return auth().signInWithEmailAndPassword(email, password);
    },

    getProfile: async () => {
        try {
            const bearertoken = await userService._getToken();
            if (!bearertoken) return console.log(`Not Logged In`);
            const resp = await axios.get("/user/profile", {
                headers: {
                    authorization: `Bearer ${token}`
                }
            });
            return resp.data;
        } catch (e) {
            console.log(e);
            return {
                success: false
            }
        }

    },

    joinQueue: async () => {
        try {
            const bearertoken = await userService._getToken();
            if (!bearertoken) return console.log(`Not Logged In`);
            const resp = await axios.get("/game/joinqueue", {
                headers: {
                    authorization: `Bearer ${token}`
                }
            });
            return resp.data;
        } catch (e) {
            console.log(e);
            return {
                success: false
            }
        }
    },

    queueStatus: async () => {
        try {
            const resp = await axios.get("/game/queuestatus")
            return resp.data;
        } catch (e) {
            console.log(e);
            return {
                success: false
            }
        }
    },

    uploadExercise: async (formdata) => {
        try {
            const bearertoken = await userService._getToken();
            if (!bearertoken) return console.log(`Not Logged In`);
            const formData = new FormData();
            formData.append("exercise", formdata);
            const resp = await axios.post("/game/upload", formData, {
                headers: {
                    "content-type": "multipart/form-data",
                    authorization: `Bearer ${token}`
                }
            });
            return resp.data;
        } catch (e) {
            console.log(e);
            return {
                success: false
            }
        }
    },

    _getToken: async () => {
        if (token) return token;
        token = await auth().currentUser.getIdToken();
        if (!token) return false;
        return token;
    }
}

export default userService;