import Navbar from "@/components/navbar"
import Hero from "./Hero"

export default function LandingPage() {
  return (
    <>
      <Navbar  />
      <div className="min-h-screen px-16 py-12">
        <Hero />
      </div>
    </>
  )
}
