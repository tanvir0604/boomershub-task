import Link from "next/link"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import { Property } from "@/lib/interfaces"
  
export default function ShowTable(props: {items:Property[]|[]}) {
    return(
        <div className="border rounded-lg p-5 space-y-1.5">
            <h3 className="text-2xl font-semibold leading-none tracking-wide">Search Result</h3>
            <p className="text-sm text-muted-foreground">Searched by keyword</p>
            <div className="border p-3">
                <Table>
                    {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
                    <TableHeader>
                        <TableRow>
                            <TableHead>Name</TableHead>
                            <TableHead>State</TableHead>
                            <TableHead>City</TableHead>
                            <TableHead className="text-right">Country</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {props.items.map((item:Property, index:number) => (
                            <TableRow key={index}>
                                <TableCell className="font-medium">{item.name}</TableCell>
                                <TableCell>{item.state}</TableCell>
                                <TableCell>{item.city}</TableCell>
                                <TableCell className="text-right">{item.country}</TableCell>
                            </TableRow>
                        ))}
                        
                    </TableBody>
                </Table>
            </div>
        </div>
    )
}