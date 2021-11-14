import jwt from "jsonwebtoken"

const generateToken = (id) => {
    return ( jwt.sign({ id }, process_env_JWT_SECRET,{
        expiresIn:'30d'
    })
    )
}

export default generateToken
