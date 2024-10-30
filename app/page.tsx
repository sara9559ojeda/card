import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-gradient-to-r from-cyan-500 to-blue-600 w-full h-screen flex justify-center items-center">
      <section className=" h-[47%] w-[50%]  ">
        <article className="bg-slate-900 rounded-xl p-10 grid lg:grid-cols-2 grid-cols-1">
          <img className=" justify-center sm:transition sm:ease-in-out sm:delay-150 h-[150px] w-[150px]  rounded-full sm:w-[90%] lg:-ml-32 lg:-mt-0 -mt-28 sm:rounded-3xl lg:w-[200px] lg:h-[200px] object-cover" src="./img/img.png" alt="mujer" />
          <dl className="flex flex-col text-center lg:text-start">
            <h1 className=" lg:-ml-44 pt-3 lg:justify-start justify-center text-gray-100 font-serif font-bold text-2xl"> Jess Wilson</h1>
            <h3 className=" lg:-ml-44 text-gray-400 lg:justify-start font-serif font-semibold">UX engineer</h3>
            <h3 className="lg:-ml-44 text-gray-400 lg:w-[400px] w-[90%] justify-center items-center font-serif">Empowering users throw  captivating interfaces, turning indeas into pixel-perfect realities.</h3><br />
            <dl className=" flex gap-1 lg:items-start">
              <button className="  w-[50%] p-2 text-gray-100 font-serif  border rounded-3xl">
                Profile
              </button>
              <button className="  w-[50%] p-2 text-gray-900 font-serif bg-slate-200 rounded-3xl">
                Follow
              </button>
            </dl>
          </dl>

        </article>

      </section>

    </main>
  );
}
