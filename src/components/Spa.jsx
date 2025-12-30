import { Brush, Mail, Instagram, Import } from "lucide-react";
import CardImg from "./CardImg";
import img1 from "../assets/pexels-pixabay-147411.jpg";
import insta from "../assets/instagram.png";
import x from "../assets/x.png";
import { useState } from "react";

import ShopCard from "./ShopCard";
import OpinionCard from "./OpinionCard";

import Header from "./Header";


const Spa = () => {
  const [count, setCount] = useState(6);
  
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

  const shopCards = [
    {
      id: 1,
      img: img1,
      title: "producto numero 1",
      style: "estilo de dibujado mixto",
      price: "$120",
    },
    {
      id: 2,
      img: img1,
      title: "producto numero 1",
      style: "estilo de dibujado mixto",
      price: "$120",
    },
    {
      id: 3,
      img: img1,
      title: "producto numero 1",
      style: "estilo de dibujado mixto",
      price: "$120",
    },
  ];

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

  const [form, setForm] = useState({
    nombre: "",
    email: "",
    asunto: "",
    mensaje: "",
  });

  const [errors, setErrors] = useState({
    nombre: false,
    email: false,
    asunto: false,
    mensaje: false,
  });



  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors({
      ...errors,
      nombre: false,
      email: false,
      asunto: false,
      mensaje: false,
    });
  };

  const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.nombre == "") {
      setErrors({ ...errors, nombre: true });
      return;
    } else if (!validateEmail(form.email)) {
      setErrors({ ...errors, email: true });
      return;
    } else if (form.asunto == "") {
      setErrors({ ...errors, asunto: true });
    } else if (form.mensaje == "") {
      setErrors({ ...errors, mensaje: true });
    }
  };
  // const [isOpen, setIsOpen] = useState(false);
  const handleCount = () => {
    setCount(cards.length);
  };



  window.addEventListener("scroll", () => {
    const header = document.getElementById("header");
    if (window.scrollY > 10) {
      header.classList.add("opacity-50");
    } else {
      header.classList.add("bg-white");
      header.classList.remove("opacity-50");
    }
  });

 

  return (
    <div className="relative">
      <Header></Header>
      <main className="w-full" id="inicio">
        <section className="bg-pink-100 flex justify-around items-center p-20 lg:h-[75vh] max-md:flex-col max-md:justify-center max-md:p-0">
          <div className="flex flex-col gap-12 max-md:justify-center max-md:items-center max-md:mt-6 max-md:h-[75vh]">
            <h1 className="text-7xl w-156 max-md:text-6xl max-md:w-fit max-md:text-center">
              <span className="text-[#821943] font-bold">Arte que</span>
              <span className="text-[#df3e86] font-bold"> inspira</span>
              <span className="text-[#821943] font-bold"> y</span>
              <span className="text-[#df3e86] font-bold"> transforma</span>
            </h1>
            <h2 className="w-150 text-[#94214f] text-2xl max-md:text-xl max-md:w-fit max-md:text-center">
              Descubre dibujos únicos creados con pasión y técnica. Cada obra
              cuenta una historia y puede ser tuya.
            </h2>
            <div className="flex gap-6 mt-6 max-md:">
              <button className="bg-[#e62d77] w-28 h-12 text-center text-white rounded-md hover:brightness-90">
                <a href="#Galería">Ver Galería</a>
              </button>
              <button className="bg-white border-[#ed4898] w-28 h-12 border-2 text-pink-500 rounded-md hover:brightness-90">
                <a href="#Sobre-mí">Sobre Mí</a>
              </button>
            </div>
          </div>
          <div className="relative">
            <img
              src={img1}
              alt=""
              className="w-12/12 h-100 max-md:object-cover max-md:w-[90vw]"
            />
            <div class="absolute -bottom-4 -left-4 h-24 w-24 max-md:w-16 max-md:h-16 rounded-full bg-pink-400"></div>
            <div class="absolute -top-4 -right-4 h-12 w-12 max-md:w-12 max-md:h-12 rounded-full bg-pink-400 opacity-95"></div>
          </div>
        </section>

        <section
          id="Galería"
          className="justify-center items-center flex flex-col section-box"
        >
          <h2 className="mt-20 mb-2 justify-center items-center flex text-5xl text-[#821943] font-bold">
            Galería
          </h2>
          <span className="text-xl text-[#be195c] max-md:text-center">
            Una selección de mis mejores creaciones
          </span>
          <div className="grid grid-cols-3 grid-rows-2 lg:mr-50 lg:mb-10 lg:ml-50 lg:mt-10 gap-4">
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
              className="bg-[#e62d77] p-3 text-center text-white rounded-md hover:brightness-90 cursor-pointer"
              onClick={handleCount}
            >
              Ver todos los dibujos
            </button>
          )}
        </section>

        <section
          id="Sobre-mí"
          className="bg-[#fae4f9] flex items-center mt-15 pt-26 pb-26 lg:pl-60 gap-6 max-md:flex-col"
        >
          <div className="w-140 max-md:w-[90vw]">
            <img
              className="h-[40vh] w-full max-md:object-cover"
              src={img1}
              alt=""
            />
          </div>{" "}
          {/* arreglar img para que cubra div */}
          <div className="w-[75%] self-start mt-10 max-md:self-center max-md:w-[85vw]">
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

        <section className="pt-24 " id="Comisiones">
          <div className="flex flex-col items-center">
            <h2 className="text-4xl text-[#821943] font-semibold">
              Tienda De Arte
            </h2>
            <h3 className="text-[#be195c] mt-4 text-xl">
              Llévate una pieza única y especial
            </h3>
          </div>
          <div className="flex items-center justify-center gap-6 mt-12 max-md:flex-col">
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
            <a
              href=""
              className="p-3 bg-[#e62d77] hover:brightness-95 rounded-md text-white"
            >
              Visitar Tienda Completa
            </a>
          </div>
        </section>

        <section className="mt-24 bg-[#89264d] text-white h-120 flex flex-col justify-center gap-8">
          <h2 className="text-4xl flex justify-center font-semibold max-md:text-center">
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

        <section id="Contacto" className="mt-16 flex justify-between mx-60">
          <div>
            <h2 className="text-[#821943] font-semibold text-3xl">
              ¿Interesado en mi Arte?
            </h2>
            <p className="w-170 mt-8 text-[#ba3167]">
              Si tienes alguna pregunta sobre mis obras, estás interesado en una
              comisión personalizada o simplemente quieres saber más sobre mi
              proceso creativo, no dudes en contactarme.
            </p>
            <ul className="flex flex-col mt-8 gap-6">
              <li className="flex gap-4 text-[#ba3167]">
                <div>
                  <Mail color="#ba3167" />
                </div>{" "}
                artista@ejemplo.com
              </li>
              <li className="flex gap-4 text-[#ba3167]">
                <div>
                  <img src={insta} alt="" className="w-6 " />
                </div>{" "}
                @nombre_artista
              </li>
              <li className="flex gap-4 text-[#ba3167]">
                <div>
                  <img src={x} alt="" className="w-6" />
                </div>{" "}
                @nombre_artista
              </li>
            </ul>
          </div>
          <div className="border-1 border-pink-100 rounded-sm p-6">
            <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-8">
              <div>
                <label className="text-[#821943]">Nombre</label>
                <input
                  type="text"
                  required
                  name="nombre"
                  placeholder="Emiliano Perez"
                  value={form.nombre}
                  onChange={handleChange}
                  className={
                    errors.nombre
                      ? "w-full border border-gray-300 rounded-lg bg-red-300 p-2 focus:outline-none focus:ring-2 focus:ring-red-400"
                      : "w-full border border-pink-200 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-pink-400 dark:focus:ring-[hsl(327,65%,49%)]"
                  }
                />
              </div>
              <div>
                <label className="text-[#821943]">Email</label>
                <input
                  type="email"
                  required
                  name="email"
                  placeholder="emiliano@gmail.com"
                  value={form.email}
                  onChange={handleChange}
                  className={
                    errors.email
                      ? "w-full border border-gray-300 rounded-lg bg-red-300 p-2 focus:outline-none focus:ring-2 focus:ring-red-400"
                      : "w-full border border-pink-200 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-pink-400 dark:focus:ring-[hsl(327,65%,49%)]"
                  }
                />
              </div>

              <div className="col-span-2">
                <label className="text-[#821943]">Asunto</label>
                <input
                  type="text"
                  required
                  name="asunto"
                  placeholder="comisiones"
                  value={form.asunto}
                  onChange={handleChange}
                  className={
                    errors.asunto
                      ? "w-full border border-gray-300 rounded-lg bg-red-300 p-2 focus:outline-none focus:ring-2 focus:ring-red-400"
                      : "w-full border border-pink-200 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-pink-400 dark:focus:ring-[hsl(327,65%,49%)]"
                  }
                />
              </div>
              <div className="col-span-2">
                <label className="text-[#821943]">Mensaje</label>
                <textarea
                  type="text"
                  required
                  name="mensaje"
                  placeholder="tenía una duda sobre..."
                  rows="3"
                  value={form.mensaje}
                  onChange={handleChange}
                  className={
                    errors.mensaje
                      ? "w-full border border-gray-300 rounded-lg bg-red-300 p-2 focus:outline-none focus:ring-2 focus:ring-red-400"
                      : "w-full border border-pink-200 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-pink-400 dark:focus:ring-[hsl(327,65%,49%)]"
                  }
                />
              </div>

              <button
                type="submit"
                className="col-span-2 bg-[#e62d77] text-white p-1 rounded-sm"
              >
                Enviar Mensaje
              </button>
            </form>
          </div>
        </section>
      </main>
      <footer className="flex justify-between mt-12 pt-2 px-20 bg-[#fae4f9]">
        <div className="flex gap-6">
          <div className="text-[#e1488c] flex gap-3 text-2xl align-center justify-center">
            <Brush className="h-10 w-10 "></Brush>
            <h2 className="">
              {" "}
              <a href="#inicio">Allyn</a>
            </h2>
          </div>
          <ul className="flex gap-4 items-center">
            <li>
              <Mail color="#ba3167" />
            </li>
            <li>
              <img src={insta} alt="" className="w-6 " />
            </li>
            <li>
              <img src={x} alt="" className="w-6" />
            </li>
          </ul>
        </div>
        <p className="self-center text-[#ba3167]">
          © 2025 ArtistName. Todos los derechos reservados.
        </p>
      </footer>
    </div>
  );
};

export default Spa;
