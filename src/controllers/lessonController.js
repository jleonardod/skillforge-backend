const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const createLesson = async (req, res) => {
  const { title, content, moduleId } = req.body
  try {
    const lesson = await prisma.lesson.create({
      data: { title, content, moduleId }
    })
    res.status(201).json(lesson)
  } catch (error) {
    res.status(500).json({ message: 'Error al crear la lección', error })
  }
}

const getLessons = async (req, res) => {
  try {
    const lessons = await prisma.lesson.findMany()
    res.status(200).json(lessons)
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener las lecciones', error })
  }
}

module.exports = {
  createLesson,
  getLessons,
}
