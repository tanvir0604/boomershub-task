import { PrismaClient } from '@prisma/client'
import { Property } from './interfaces';

const prisma = new PrismaClient()

export async function fetchProperties(keyword:string):Promise<Property[]|[]>{
    const items:Property[]|[] = await prisma.property.findMany({
        select: {
            name:      true,
            city:      true,
            state:     true,
            zipCode:   true,
            country:   true,
            phone:     true,
            type:      true,
            capacity:  true
        },
        orderBy: {
            name: 'asc'
        },
        where: {
            OR: [
                {
                    name: {
                        contains: keyword
                    }
                },
                {
                    city: {
                        contains: keyword
                    }
                },
                {
                    state: {
                        contains: keyword
                    }
                }
            ]
        }
    });
    return items;
}