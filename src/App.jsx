import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import necessary router components
import { ApiProvider } from "./context/ApiContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import RecipeList from "./components/RecipeList";
import ContactSection from "./components/ContactSection"; // Import ContactSection

function App() {
  return (
    <ApiProvider>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <div
            className="App"
            style={{
              cursor: "default",
            }}
          >
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <Header />
                    <RecipeList />
                    <Footer />
                  </>
                }
              />{" "}
              {/* Main page */}
              <Route
                path="/contact"
                element={
                  <>
                    <ContactSection />
                  </>
                }
              />{" "}
              {/* Contact page */}
            </Routes>
          </div>
        </Suspense>
      </Router>
    </ApiProvider>
  );
}

export default App;
