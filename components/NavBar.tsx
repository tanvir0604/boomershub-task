import { Button } from "./ui/button"

export default function NavBar() {
    return(
        <nav className="flex items-center justify-between border-b py-5">
            <h1 className="font-bold text-2xl">BoomerHubTask</h1>
            <Button className="tracking-wide">Scrap Data</Button>
        </nav>
    )
}