import authService from "../services/authService.js";

const AuthService = new authService();

class authController{
    static async login(req,res) {
        const {email, senha} = req.body

        try {
        const login = await AuthService.login({email, senha});

        res.status(200).json(login);
        } catch (error) {
            res.status(401).send({ message: error.message});
        }
    }
}

export default authController;