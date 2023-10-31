import Navbar from "./Navbar";
import Cocktails from "./Cocktails";

function App() {
  
  return (
      <div className="w-[100%] h-[130vh] ">
        <Navbar />
        <div className="hover:translate-x-10 h-[20vh] md:h-[30vh] mt-[2rem] w-[100%] flex justify-center">
          <img className="h-[4rem] md:h-[8rem]" src="https://www.creativefabrica.com/wp-content/uploads/2020/06/18/1592479206/Martini-black-580x386.jpg" alt="" />
         <b className=" text-center text-gradient-to-r from-indigo-500 text-[0.9rem] md:text-[1rem] text-brown w-[75vw] lg:text-[1.2rem]  md:pt-[2rem] mb-[2rem]">
         Bienvenido a Cocktail's. Un sitio en el que encontrarás recetas de bebidas y cócteles de todo el mundo.
          <p className="hidden md:block"> También ofrecemos diversos datos de las mismas con fin informativo, ludico y educativo.
          Si le gusta el sitio, considere apoyarnos en todas nuestras plataformas. 
         </p></b>
          </div>
        <Cocktails/>
      </div>
  );
}

export default App;
