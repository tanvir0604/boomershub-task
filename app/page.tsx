"use client";
import SearchBox from '@/components/SearchBox'
import ShowTable from '@/components/ShowTable';
import { Property } from '@/lib/interfaces';
import { useState } from 'react';



export default function Home() {

  // let items:Property[] = [];
  const [items, setItems] = useState<Property[]>([]);

  async function getProperties(formData: FormData){
    const response = await fetch('/api/property?keyword='+formData.get('keyword')?.toString(), {
      method: 'GET'
    })
    let data = await response.json();
    setItems(data);
  }

  
  return (
    <div>
      <div><SearchBox action={getProperties}/></div>
      <div className='mt-5'><ShowTable items={items}/></div>
    </div>
  );
}
