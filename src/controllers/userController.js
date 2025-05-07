const { PrismaClient } = require('@prisma/client')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const prisma = new PrismaClient()


const register = async (req, res) => {
  const { email, password } = req.body
  try{
    const hashedPassword = await bcrypt.hash(password, 10)
    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword
      }
    })
    res.status(201).json({ message: 'Usuario creado exitosamente', user })
  } catch (error) {
    res.status(500).json({ message: 'Error al crear el usuario', error })
  }
}

const login = async (req, res) => {
  const { email, password } = req.body
  try{
    const user = await prisma.user.findUnique({where: {email}})
    if(!user) {
      return res.status(404).json({ message: 'Usuario no encontrado' })
    }
    const validPassword = await bcrypt.compare(password, user.password)
    if(!validPassword) {
      return res.status(401).json({ message: 'Contraseña incorrecta' })
    }

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' })

    res.status(200).json({ message: 'Inicio de sesión exitoso', token })
  } catch (error) {
    res.status(500).json({ message: 'Error al iniciar sesión', error })
  }
}

module.exports = {
  register,
  login
}
