import { Brush, Mail } from "lucide-react";
import CardImg from "./CardImg";
import img1 from "../assets/pexels-pixabay-147411.jpg";
import { useState } from "react";
import BtnCommerce from "./BtnCommerce";
import ShopCard from "./ShopCard";
import OpinionCard from "./OpinionCard";
//import { useState } from "react";

const Spa = () => {
  const [count, setCount] = useState(6);
  const navNames = [
    { name: "Galería", href: "#Galería" },
    { name: "Sobre mí", href: "#Sobre-mí" },
    { name: "Comisiones", href: "#Comisiones" },
    { name: "Contacto", href: "#Contacto" },
  ];
  const cards = [
    { id: 1, img: img1, title: "titulo", style: "estilo", size: "30x40cm" },
    { id: 2, img: img1, title: "titulo", style: "estilo", size: "30x40cm" },
    { id: 3, img: img1, title: "titulo", style: "estilo", size: "30x40cm" },
    { id: 4, img: img1, title: "titulo", style: "estilo", size: "30x40cm" },
    { id: 5, img: img1, title: "titulo", style: "estilo", size: "30x40cm" },
    { id: 6, img: img1, title: "titulo", style: "estilo", size: "30x40cm" },
    { id: 7, img: img1, title: "titulo", style: "estilo", size: "30x40cm" },
    { id: 8, img: img1, title: "titulo", style: "estilo", size: "30x40cm" },
  ];

  const shopCards = [{ id: 1, img: img1, title: "producto numero 1", style: "estilo de dibujado mixto", price: "$120" }, { id: 2, img: img1, title: "producto numero 1", style: "estilo de dibujado mixto", price: "$120" }, { id: 3, img: img1, title: "producto numero 1", style: "estilo de dibujado mixto", price: "$120" }]
  
  const opinions = [
    {
      id: 1,
      text: "Los dibujos son aún más hermosos en persona. La atención al detalle es impresionante y ahora tengo una pieza única que todos admiran en mi hogar.",
      name: "María González",
    },
    {
      id: 2,
      text: "Compré un dibujo como regalo para mi esposa y quedó encantada. La calidad del trabajo es excepcional y el proceso de compra fue muy sencillo.",
      name: "Carlos Rodríguez",
    },
    {
      id: 3,
      text: "He comprado varias obras y cada una tiene su propia personalidad. Me encanta cómo cada pieza cuenta una historia diferente y aporta carácter a mi espacio.",
      name: "Laura Martínez",
    },
  ];
  // const [isOpen, setIsOpen] = useState(false);
  const handleCount = () => {
    setCount(cards.length)
  }

  window.addEventListener("scroll", () => {
    const header = document.getElementById("header");
    if (window.scrollY > 10) {
      header.classList.add("opacity-90");
    } else {
      header.classList.add("bg-white");
      header.classList.remove("opacity-90");
    }
  });

  return (
    <>
      <header
        className="bg-white sticky top-0 w-full z-50 transition-colors duration-300 p-5 overflow-x-hidden"
        id="header"
      >
        <nav className="flex justify-between items-center ">
          <div className="text-[#e1488c] flex gap-3 text-2xl align-center justify-center">
            <Brush className="h-10 w-10 "></Brush>
            <h2 className="">
              {" "}
              <a href="#inicio">Allyn</a>
            </h2>
          </div>
          <div className="flex gap-6 text-pink-800">
            {navNames.map((n) => {
              return (
                <a href={n.href} className="hover:text-red-400">
                  {n.name}
                </a>
              );
            })}
          </div>
          <div className="flex gap-8 items-center">
            <a
              href=""
              className="flex gap-4 border-1 border-pink-400 rounded-md p-2 text-pink-400 hover:bg-[#6661]"
            >
              <Mail></Mail> Contacto
            </a>
            <BtnCommerce></BtnCommerce>
          </div>
        </nav>
      </header>
      <main className="w-full" id="inicio">
        <section className="bg-pink-100 flex justify-around items-center p-20 h-[75vh]">
          <div className="flex flex-col gap-5">
            <h1 className="text-7xl w-156">
              <span className="text-[#821943] font-bold">Arte que</span>
              <span className="text-[#df3e86] font-bold"> inspira</span>
              <span className="text-[#821943] font-bold"> y</span>
              <span className="text-[#df3e86] font-bold"> transforma</span>
            </h1>
            <h2 className="w-150 text-[#94214f] text-2xl">
              Descubre dibujos únicos creados con pasión y técnica. Cada obra
              cuenta una historia y puede ser tuya.
            </h2>
            <div className="flex gap-6 mt-6">
              <button className="bg-[#ed4898] w-28 h-12 text-center text-white rounded-md hover:brightness-90">
                <a href="#Galería">Ver Galería</a>
              </button>
              <button className="bg-white border-[#ed4898] w-28 h-12 border-2 text-pink-500 rounded-md hover:brightness-90">
                <a href="#Sobre-mí">Sobre Mí</a>
              </button>
            </div>
          </div>
          <div className="relative">
            <img src={img1} alt="" className="w-12/12 h-100" />
            <div class="absolute -bottom-4 -left-4 h-24 w-24 rounded-full bg-pink-400"></div>
            <div class="absolute -top-4 -right-4 h-12 w-12 rounded-full bg-pink-400 opacity-95"></div>
          </div>
        </section>

        <section
          id="Galería"
          className="justify-center items-center flex flex-col section-box"
        >
          <h2 className="mt-20 mb-2 justify-center items-center flex text-5xl text-[#821943] font-bold">
            Galería
          </h2>
          <span className="text-xl text-[#be195c]">
            Una selección de mis mejores creaciones
          </span>
          <div className="grid grid-cols-3 grid-rows-2 mr-50 mb-10 ml-50 mt-10 gap-4">
            {cards.slice(0, count).map((c) => (
              <CardImg
                key={c.id}
                img={c.img}
                title={c.title}
                style={c.style}
                size={c.size}
              />
            ))}
          </div>
          {!(count === cards.length) && (
            <button
              className="bg-[#ed4898] p-3 text-center text-white rounded-md hover:brightness-90 cursor-pointer"
              onClick={handleCount}
            >
              Ver todos los dibujos
            </button>
          )}
        </section>
        <section className="bg-[#fae4f9] flex items-center mt-15 pt-20 pb-20 pl-60 gap-6">
          <div className="w-140">
            <img className="h-[40vh] w-full" src={img1} alt="" />
          </div>{" "}
          {/* arreglar img para que cubra div */}
          <div className="w-[75%] self-start mt-10">
            <h2 className="mb-4 text-4xl text-[#821943] font-bold">Sobre mí</h2>
            <p className="mb-4 text-[#ba3167]">
              Lorem dasdasghsdghs d gsdjg jsndg skdg s gksg k
            </p>
            <p className="w-[75%] text-[#ba3167]">
              Lorem ipsum, dolor sit amet coturi repellendus, possimus odio
              porro unde iure deleniti, odit ipsum exercitationem laborum ullam
              eius dolore velit sapiente natus! Ea quis suscipit eos!
            </p>
          </div>
        </section>

        <section className="mt-24">
          <div className="flex flex-col items-center">
            <h2 className="text-4xl text-[#821943] font-semibold">
              Tienda De Arte
            </h2>
            <h3 className="text-[#be195c] mt-4 text-xl">
              Llévate una pieza única y especial
            </h3>
          </div>
          <div className="flex items-center justify-center gap-6 mt-12">
            {shopCards.map((c) => (
              <ShopCard
                key={c.id}
                img={c.img}
                title={c.title}
                style={c.style}
                price={c.price}
              ></ShopCard>
            ))}
          </div>
          <div className="flex items-center justify-center mt-16">
            <a href="" className="p-3 bg-[#e62d77] rounded-md text-white">
              Visitar Tienda Completa
            </a>
          </div>
        </section>
        <section className="mt-24 bg-[#89264d] text-white h-120 flex flex-col justify-center gap-8">
          <h2 className="text-4xl flex justify-center font-semibold">
            Lo Que Dicen Mis Clientes
          </h2>
          <h3 className="text-gray-300 flex justify-center">
            Experiencias de quienes ya disfrutan de mi arte
          </h3>
          <div className="flex justify-center gap-6 items-center">
            {opinions.map((o) => (
              <OpinionCard key={o.id} text={o.text} name={o.name}></OpinionCard>
            ))}
          </div>
        </section>
        {/* <button onClick={()=> setIsOpen(!isOpen)}className="mt-8">achus</button> */}
        <section className="mt-16 flex">
          <div>
            <h2>¿Interesado en mi Arte?</h2>
            <p>
              Si tienes alguna pregunta sobre mis obras, estás interesado en una
              comisión personalizada o simplemente quieres saber más sobre mi
              proceso creativo, no dudes en contactarme.
            </p>
          </div>
          <div></div>
        </section>
      </main>
      <footer></footer>
    </>
  );
};

export default Spa;
