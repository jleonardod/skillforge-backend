const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const createProgress = async (req, res) => {
  const { userId, lessonId, completed } = req.body
  try{
    const progress = await prisma.progress.create({
      data: {
        userId,
        lessonId,
        completed
      }
    })
    res.status(201).json(progress)
  } catch (error) {
    res.status(500).json({ message: 'Error al crear el progreso', error })
  }
}

module.exports = {
  createProgress
}
