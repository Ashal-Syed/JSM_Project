import Navbar from "@/app/Components/Navbar";

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <main className="font-Work-sans">
            <Navbar /> 
            {children}
        </main>
    )
}