"use client";
import { Button } from "./ui/button"
import Link from "next/link"
import { Input } from "./ui/input"
import { useRef, useState, useEffect } from "react"
import Papa from "papaparse"
import { Loader2 } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"

export default function NavBar() {
    const inputRef = useRef<HTMLInputElement>(null);
    const [loadingCsv, setLoadingCsv] = useState(false);
    const { toast } = useToast()

    const handleClick = () => {
        inputRef.current?.click();
    }
    
    async function handleFileUpload(event: React.ChangeEvent<HTMLInputElement>) {
        if (!event.target.files || event.target.files.length === 0) {
          return; // User canceled file selection
        }
    
        const file = event.target.files[0];
        setLoadingCsv(true);

        Papa.parse(file, {
            header: true,
            skipEmptyLines: true,
            complete: async function (results:{data:{}}) {
                await fetch('/api/file', {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(results.data)
                }).then((res) => {
                    toast({
                        title: "Success!!",
                        description: "Data uploaded successfully",
                    })
                    setLoadingCsv(false);
                });
            },
        });
    
        
    }
    return(
        <nav className="flex items-center justify-between border-b py-5">
            <Link href={'/'}><h1 className="font-bold text-2xl">BoomerHubTask</h1></Link>
            <Button className="tracking-wide" onClick={handleClick} disabled={loadingCsv}>
                {loadingCsv && (
                    <span>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin inline-block" />
                        Please wait
                    </span>
                )}

                {!loadingCsv && (
                    <span>
                        Scrap Data
                    </span>
                )}
            </Button>
            <Input id="csv" onChange={handleFileUpload} ref={inputRef} type="file" className="hidden" accept=".csv"/>
        </nav>
    )
}