import { BrowserRouter } from "react-router-dom";

// import Navbar from './components/Navbar'
// import Hero from './components/Hero'

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          {/* <Navbar/> */}hi
          {/* <Hero /> */}
        </div>
        {/* <About /> */}
        {/* <Experience /> */}
        {/* <Tech /> */}
        {/* <Works /> */}
        {/* <Feedbacks /> */}
        <div className='relative z-0'>
          {/* <Contact /> */}
          {/* <StarsCanvas /> */}
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
