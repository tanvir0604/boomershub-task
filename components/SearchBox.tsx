"use client";
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { FormEvent } from 'react'


export default function SearchBox(props:{ action: Function }) {
  
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="tracking-wide">Search Property</CardTitle>
        <CardDescription>Search by name/city/state.</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={async (event:FormEvent<HTMLFormElement>) => {
          event.preventDefault();
          const formData = new FormData(event.currentTarget)
          await props.action(formData);
        }}>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-2">
              <Label htmlFor="keyword">Keyword</Label>
              <Input id="keyword" name="keyword" placeholder="name/city/state" required/>
            </div>
          </div>
          <div className="flex justify-end">
            <Button type="submit" className="mt-5 tracking-wide">Search</Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
