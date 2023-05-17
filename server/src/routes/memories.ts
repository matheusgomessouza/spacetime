import { FastifyInstance } from "fastify";
import { z } from 'zod';
import { prisma } from "../lib/prisma";

export async function memoriesRoutes(app: FastifyInstance) {
  app.get('/memories', async (req, res) => {
    const memories = await prisma.memory.findMany({
      orderBy: {
        createdAt: 'asc'
      },
    })
    
    return memories.map((memory) => {
      return {
        id: memory.id,
        coverUrl: memory.coverUrl,
        excerpt: memory.content.substring(0, 115).concat('...'),
      }
    })
  })

  app.get('/memories/:id', async (req, res) => {
    const paramsSchema = z.object({
      id: z.string().uuid(),
    })

    const { id } = paramsSchema.parse(req.params)
    const memory = await prisma.memory.findUniqueOrThrow({
      where: {
        id,
      }
    })

    return memory
  })

  app.post('/memories/', async (req, res) => {
    const bodySchema = z.object({
      content: z.string(),
      coverUrl: z.string(),
      isPublic: z.coerce.boolean().default(false),
    })

    const { content, isPublic, coverUrl  } = bodySchema.parse(req.body)

    const memory = await prisma.memory.create({
      data: {
        content,
        coverUrl,
        isPublic,
        userId: '975bc54b-c75d-47ac-bc6f-9e4ec571764b'
      }
    })

    return memory
  })  
  
  app.put('/memories/:id', async (req, res) => {
    const paramsSchema = z.object({
      id: z.string().uuid(),
    })

    const { id } = paramsSchema.parse(req.params)

    const bodySchema = z.object({
      content: z.string(),
      coverUrl: z.string(),
      isPublic: z.coerce.boolean().default(false),
    })

    const { content, isPublic, coverUrl  } = bodySchema.parse(req.body)

    const memory = await prisma.memory.update({
      where: {
        id,
      },
      data: {
        content,
        coverUrl,
        isPublic
      }
    })

    return memory
  })  

  app.delete('/memories/:id', async (req, res) => {
    const paramsSchema = z.object({
      id: z.string().uuid(),
    })

    const { id } = paramsSchema.parse(req.params)
    await prisma.memory.delete({
      where: {
        id,
      }
    })
  })  

}