import Image from "next/image";
import Hero from "./component/hero";
import Contact from "./component/contact";
import About from "./component/about";
import Skills from "./component/skills";



export default function Home() {
  return (
    <div>
       <Hero /> 
       <About />
       <Skills />
       <Contact /> 
     

       
        
    </div>
  );
}
