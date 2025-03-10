"use client"

import { Button } from "@/components/ui/button"
import ExplorePage from "../../components/exploreComponent"
import { Navbar } from "@/components/Navbar"
import { useRouter } from "next/navigation";

export default function HomePage() {

    const router = useRouter();

    const handleNavCreate = () => router.push("/create");

    return (
        <main className="min-h-screen bg-white">
            <Navbar></Navbar>
            <div className="flex-col p-10 mt-5 ml-5 mr-5">
                <div className="flex items-center justify-between p-10">
                    <div className="flex-col">
                        <div className="text-9xl font-bold">
                            Welcome
                        </div>
                        <div className="text-xl font-bold p-4 ml-3">
                            would you like to start your story?
                        </div>
                    </div>
                    <Button onClick={handleNavCreate} className="text-xl">
                        Start a Book
                    </Button>
                </div>
                <div className="mt-10 h-px bg-gray-300 my-4 max-w-screen-2xl mx-auto" />
                <div className="pt-10 text-black">
                    <ExplorePage></ExplorePage>
                </div>
            </div>

        </main>
    )
}