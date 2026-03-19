import { BrowserRouter } from "react-router-dom";
import { useEffect } from "react";
import emailjs from "@emailjs/browser";

import { config } from "./constants/config";
import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  NGO,
  Resume,
  Tech,
  Works,
  StarsCanvas,
} from "./components";
import SectionDivider from "./components/atoms/SectionDivider";

const App = () => {
  useEffect(() => {
    if (document.title !== config.html.title) {
      document.title = config.html.title;
    }
    const publicKey = import.meta.env.VITE_EMAIL_JS_ACCESS_TOKEN;
    if (publicKey) {
      emailjs.init(publicKey);
    } else {
      console.warn("EmailJS public key is missing in .env");
    }
  }, []);

  return (
    <BrowserRouter>
      <div className="bg-primary relative z-0">
        <div className="bg-hero-pattern bg-cover bg-center bg-no-repeat">
          <Navbar />
          <Hero />
        </div>
        <About />
        <SectionDivider />
        <Experience />
        <SectionDivider />
        <Tech />
        <SectionDivider />
        <Works />
        <SectionDivider />
        <NGO />
        <SectionDivider />
        <Resume />
        <SectionDivider />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
