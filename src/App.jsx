import Navbar from "./Navbar";
import Cocktails from "./Cocktails";
function App() {
  
  return (
    <>
      <div className="w-[100%] h-[130vh] ">
        <Navbar />
        <div className="hover:translate-x-10 h-[20vh] md:h-[27vh] mt-[2rem] w-[100%] flex justify-center w-[100%]">
          <img className="h-[4rem] md:h-[8rem]" src="https://www.creativefabrica.com/wp-content/uploads/2020/06/18/1592479206/Martini-black-580x386.jpg" alt="" />
         <b className=" text-center text-gradient-to-r from-indigo-500 text-[1rem] md:text-xl text-brown w-[70vw]  md:pt-[2rem] mb-[2rem]">
         Bienvenido a Cocktail's. Un sitio en el que encontrarás recetas de bebidas y cócteles de todo el mundo.
          {/* También ofrecemos diversos datos de las mismas con fin informativo, ludico y educativo.
          Si le gusta el sitio, considere apoyarnos en todas nuestras plataformas. */}
         </b>
          </div>
        <Cocktails/>
      </div>
    </>
  );
}

export default App;
