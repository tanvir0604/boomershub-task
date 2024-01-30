"use client";
import SearchBox from '@/components/SearchBox'
import ShowTable from '@/components/ShowTable';
import { Property } from '@/lib/interfaces';
import { useState } from 'react';
import { useToast } from "@/components/ui/use-toast"



export default function Home() {
  const { toast } = useToast()

  // let items:Property[] = [];
  const [items, setItems] = useState<Property[]>([]);

  async function getProperties(formData: FormData){
    const response = await fetch('/api/property?keyword='+formData.get('keyword')?.toString(), {
      method: 'GET'
    })
    let data = await response.json();
    setItems(data);
    if(data.length == 0){
      toast({
        title: "Warning!!",
        description: "No data found",
      })
    }
  }

  
  return (
    <div>
      <div><SearchBox action={getProperties}/></div>
      <div className='mt-5'><ShowTable items={items}/></div>
    </div>
  );
}
