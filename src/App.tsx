import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LanguageProvider } from "@/i18n/LanguageContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Home from "@/pages/Home";
import SeasonalCollections from "@/pages/SeasonalCollections";
import Catalog from "@/pages/Catalog";
import Contact from "@/pages/Contact";
import About from "@/pages/About";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <div className="flex-1">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/temporadas" element={<SeasonalCollections />} />
                <Route path="/catalogo" element={<Catalog />} />
                <Route path="/contacto" element={<Contact />} />
                <Route path="/quienes-somos" element={<About />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </div>
            <Footer />
            <WhatsAppButton />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
