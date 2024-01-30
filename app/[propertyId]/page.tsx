import * as db from "@/lib/db";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export default async function PropertyDetails({params}: {params: {propertyId: string}}) {
    console.log(params);
    const item = await db.fetchPropertyDetails(+params.propertyId);
    // const item = [];
    
    return (
        <div className="border rounded-lg p-8">
          <h1 className="mb-8">
            <span className="block text-3xl text-center leading-8 font-bold sm:text-4xl border-b pb-4">
              {item?.name}
            </span>
          </h1>
          {/* <Image src={TestImage} alt="title image" className="rounded-lg mt-8 border"></Image> */}
          <div className="max-w-xs m-auto">
            <div className="flex grid-cols-2 justify-between">
                <span className="font-bold">City: </span> <span>{item?.city}</span>
            </div>
            <div className="flex grid-cols-2 justify-between">
                <span className="font-bold">State: </span> <span>{item?.state}</span>
            </div>
            <div className="flex grid-cols-2 justify-between">
                <span className="font-bold">Zip Code: </span> <span>{item?.zipCode}</span>
            </div>
            <div className="flex grid-cols-2 justify-between">
                <span className="font-bold">Country: </span> <span>{item?.country}</span>
            </div>
            <div className="flex grid-cols-2 justify-between">
                <span className="font-bold">Phone: </span> <span>{item?.phone}</span>
            </div>
            <div className="flex grid-cols-2 justify-between">
                <span className="font-bold">Type: </span> <span>{item?.type}</span>
            </div>
            <div className="flex grid-cols-2 justify-between">
                <span className="font-bold">Capacity: </span> <span>{item?.capacity}</span>
            </div>
          </div>
        </div>
    )
}