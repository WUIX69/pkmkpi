import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import BackToTop from "../components/BackToTop"
import ScrollToTop from "../components/ScrollToTop"
import PageTransition from "../components/PageTransition"

function MainLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-base-200 text-base-content">
      <ScrollToTop />
      <Navbar />
      <main id="main-content" className="flex-1">
        <PageTransition>
          <Outlet />
        </PageTransition>
      </main>
      <Footer />
      <BackToTop />
    </div>
  )
}

export default MainLayout
