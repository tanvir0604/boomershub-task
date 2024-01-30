import { createProperty } from "@/lib/db";
import { NextResponse, NextRequest } from 'next/server';
import { Property, Item } from "@/lib/interfaces";

export async function POST(request: NextRequest) {
    // console.log(request.json());
    const data = await request.json();
    let propertyData:Property[] = [];
    data.forEach((item:Item) => {
        propertyData.push(
            {
                name: item.Name,
                address: item.Address,
                city: item.City,
                state: item.State,
                zipCode: item['Zip Code'],
                country: item.Country,
                phone: item.Phone,
                type: item.Type,
                capacity: item.Capacity
            }
        );
    });
    // console.log(propertyData);
    await createProperty(propertyData);
    return NextResponse.json({'status': true, 'msg': 'data parsed successfully!'});
    
}