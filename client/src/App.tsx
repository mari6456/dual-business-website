import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Cosmetics from "./pages/Cosmetics";
import AITraining from "./pages/AITraining";
import Profile from "./pages/Profile";
import News from "./pages/News";
import NewsDetail from "./pages/NewsDetail";
import Contact from "./pages/Contact";
import Company from "./pages/Company";
import Privacy from "./pages/Privacy";
import ScrollToTop from "./components/ScrollToTop";
import CosmeticsLP from "./pages/CosmeticsLP";
import AITrainingLP from "./pages/AITrainingLP";
import Works from "./pages/Works";
import AIJournal from "./pages/AIJournal";
import AIJournalDetail from "./pages/AIJournalDetail";
import SEO from "./components/SEO";

function Router() {
  return (
    <>
      <Navigation />
      <SEO />
      <ScrollToTop />
      <Switch>
        <Route path={"/"} component={Home} />
        <Route path={"/about"} component={About} />
        <Route path={"/cosmetics"} component={Cosmetics} />
        <Route path={"/ai-training"} component={AITraining} />
        <Route path={"/lp/cosmetics-development"} component={CosmeticsLP} />
        <Route path={"/lp/ai-training"} component={AITrainingLP} />
        <Route path={"/works"} component={Works} />
        <Route path={"/ai-journal"} component={AIJournal} />
        <Route path={"/ai-journal/:id"}>{(params) => <AIJournalDetail id={params.id} />}</Route>
        <Route path={"/profile"} component={Profile} />
        <Route path={"/news"} component={News} />
        <Route path={"/news/:id"}>{(params) => <NewsDetail id={params.id} />}</Route>
        <Route path={"/contact"} component={Contact} />
        <Route path={"/company"} component={Company} />
        <Route path={"/privacy"} component={Privacy} />
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
