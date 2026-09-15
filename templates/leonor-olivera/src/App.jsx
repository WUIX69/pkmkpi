import { HashRouter, Routes, Route } from "react-router-dom"
import AccessibilityProvider from "./components/AccessibilityProvider"
import MainLayout from "./layouts/MainLayout"
import Home from "./pages/Home"
import AboutUs from "./pages/AboutUs"
import OurTeam from "./pages/OurTeam"
import News from "./pages/News"
import NewsArticle from "./pages/NewsArticle"
import Press from "./pages/Press"
import SupportUs from "./pages/SupportUs"
import Contact from "./pages/Contact"
import Contribute from "./pages/Contribute"

function App() {
  return (
    <AccessibilityProvider>
      <HashRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/team" element={<OurTeam />} />
            <Route path="/news" element={<News />} />
            <Route path="/news/:slug" element={<NewsArticle />} />
            <Route path="/press" element={<Press />} />
            <Route path="/support" element={<SupportUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/contribute" element={<Contribute />} />
            <Route path="*" element={<Home />} />
          </Route>
        </Routes>
      </HashRouter>
    </AccessibilityProvider>
  )
}

export default App
