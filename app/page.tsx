import Header from "@/components/header"
import ThreeBoxGrid from '@/components/ThreeBoxGrid'
import Carousel from "@/components/carousel"
import Footer from "@/components/footer"

export default function Home() {

  return (
    <main className="max-w-7xl p-4 m-auto">
    
       <Header />
       <ThreeBoxGrid/>
       <Carousel/>
       <Footer/>
    </main>
  )
}
