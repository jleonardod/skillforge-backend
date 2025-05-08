const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const createCourse = async (req, res) => {
  const { title } = req.body
  try {
    const course = await prisma.course.create({data: { title }})
    res.status(201).json(course)
  } catch (error) {
    res.status(500).json({ message: 'Error al crear el curso', error })
  }
}

const getCourses = async (req, res) => {
  try {
    const courses = await prisma.course.findMany({
      include: { moudules: true },
    })
    res.status(200).json(courses)
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los cursos', error })
  }
}

module.exports = {
  createCourse,
  getCourses,
}
