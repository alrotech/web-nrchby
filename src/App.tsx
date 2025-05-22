
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Index from "./pages/Index";
import About from "./pages/About";
import Documents from "./pages/Documents";
import NotFound from "./pages/NotFound";

// Placeholder components for routes that will be built later
const Finances = () => (<div className="container mx-auto px-4 py-12"><h1 className="text-3xl font-bold">Финансы</h1><p className="mt-4">Страница в разработке</p></div>);
const Residents = () => (<div className="container mx-auto px-4 py-12"><h1 className="text-3xl font-bold">Жильцам</h1><p className="mt-4">Страница в разработке</p></div>);
const Renovation = () => (<div className="container mx-auto px-4 py-12"><h1 className="text-3xl font-bold">Ремонт и перепланировка</h1><p className="mt-4">Страница в разработке</p></div>);
const Communication = () => (<div className="container mx-auto px-4 py-12"><h1 className="text-3xl font-bold">Общение</h1><p className="mt-4">Страница в разработке</p></div>);
const Contacts = () => (<div className="container mx-auto px-4 py-12"><h1 className="text-3xl font-bold">Контакты</h1><p className="mt-4">Страница в разработке</p></div>);

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Index />} />
            <Route path="about" element={<About />} />
            <Route path="finances" element={<Finances />} />
            <Route path="documents" element={<Documents />} />
            <Route path="residents" element={<Residents />} />
            <Route path="renovation" element={<Renovation />} />
            <Route path="communication" element={<Communication />} />
            <Route path="contacts" element={<Contacts />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
