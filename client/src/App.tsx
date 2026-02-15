import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Cosmetics from "./pages/Cosmetics";
import AITraining from "./pages/AITraining";
import Profile from "./pages/Profile";
import News from "./pages/News";
import NewsDetail from "./pages/NewsDetail";
import Contact from "./pages/Contact";
import ScrollToTop from "./components/ScrollToTop";

function Router() {
  return (
    <>
      <Navigation />
      <ScrollToTop />
      <Switch>
        <Route path={"/"} component={Home} />
        <Route path={"/cosmetics"} component={Cosmetics} />
        <Route path={"/ai-training"} component={AITraining} />
        <Route path={"/profile"} component={Profile} />
        <Route path={"/news"} component={News} />
        <Route path={"/news/:id"} component={NewsDetail} />
        <Route path={"/contact"} component={Contact} />
        <Route path={"/404"} component={NotFound} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
