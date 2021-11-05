import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Admin User',
        email:'admin@example.com',
        password:bcrypt.hashSync('123456',10),
        isAdmin:true
    },
    {
        name: 'Jenny Yana',
        email:'jenny@example.com',
        password:bcrypt.hashSync('123456',10),
    },
    {
        name: 'Siera Naje',
        email:'siera@example.com',
        password:bcrypt.hashSync('123456',10),
    }
]

export default users