import Image from "next/image";
import img1 from './img/teste.jpeg';
import img2 from './img/img_fundo_portifolio.jpg';


export default function Home() {
  return (
    <main className="flex flex-col items-center fustify-between">
      <div className="relative w-full">

        <div className="absolute -z-10 w-full">
          <Image src={img2} alt="backgoundImage" className="w-full"/>
        </div>

        <div className="max-w-screen-lg m-auto h-[200vh] py-5 px-5 my-10 text-center text-2xl rounded-lg bg-white shadow-[0px_8px_48px_rgba(0,0,0,0.25)]">
          <p className="text-black">Como colocar imagem de fundo</p>
        </div>
      </div>
      
      <div className="relative w-full">

        <div className="absolute -z-10 w-full">
          <Image src={img1} alt="backgoundImage" className="w-full"/>
        </div>

        <div className="max-w-screen-lg m-auto h-[200vh] py-5 px-5 my-10 text-center text-2xl rounded-lg bg-white shadow-[0px_8px_48px_rgba(0,0,0,0.25)]">
          <p className="text-black">Como colocar imagem de fundo</p>
        </div>
      </div>
      
    </main>
   
   
  );
}
