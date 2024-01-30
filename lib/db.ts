import { PrismaClient } from '@prisma/client'
import { Property } from './interfaces';

const prisma = new PrismaClient()

export async function createProperty(data:Property[]){
    const property = await prisma.property.createMany({
        data: data,
        skipDuplicates: true,
    })
    console.log(property)
}

export async function fetchProperties(keyword:string):Promise<Property[]|[]>{
    const items:Property[]|[] = await prisma.property.findMany({
        select: {
            id:        true,
            name:      true,
            address:   true,
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


export async function fetchPropertyDetails(propertyId:number):Promise<Property|null>{
    const item:Property|null = await prisma.property.findUnique({
        select: {
            id:        true,
            name:      true,
            address:   true,
            city:      true,
            state:     true,
            zipCode:   true,
            country:   true,
            phone:     true,
            type:      true,
            capacity:  true
        },
        where: {
            id: propertyId
        }
    });
    return item;
}