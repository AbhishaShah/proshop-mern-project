import jwt from "jsonwebtoken"

import React from 'react'

const generateToken = (id) => {
    return ( jwt.sign({ id }, process_env_JWT_SECRET,{
        expiresIn:'30d'
    })
    )
}

export default generateToken
