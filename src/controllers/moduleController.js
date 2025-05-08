const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const createModule = async (req, res) => {
  const { title, courseId } = req.body
  try {
    const module = await prisma.module.create({
      data: { title, courseId }
    })
    res.status(201).json(module)
  } catch (error) {
    res.status(500).json({ message: 'Error al crear el módulo', error })
  }
}

const getModules = async (req, res) => {
  try {
    const modules = prisma.module.findMany({
      include: { lessons: true },
    })
    res.status(200).json(modules)
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los módulos', error })
  }
}

module.exports = {
  createModule,
  getModules,
}
