import Header from "@/components/header"

function layout({ children }: { children: React.ReactNode }) {
    return (
        <main className="max-w-7xl p-4 m-auto">
            <Header />
            {children}
        </main>
    )
}

export default layout