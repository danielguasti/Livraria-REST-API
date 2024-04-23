import jsonwebtoken from "jsonwebtoken";
import secretToken from "../Secret/secretToken.js"

export default async (req, res, next) => {
    const token = req.headers.authorization

    if (!token) {
        return res.status(401).send('Access token nao informado')
    }

    const [, accessToken] = token.split(" ")

    try {
        jsonwebtoken.verify(accessToken, secretToken)

        const email = await jsonwebtoken.decode(accessToken);

        req.usuarioEmail = email

        return next()
    } catch (error) {
        res.status(401).send('Usuario não autorizado')
    }
}