import CircleIcon from "./components/Icons/CircleIcon";
import EquisIcon from "./components/Icons/EquisIcon";
import MoonIcon from "./components/Icons/MoonIcon";

import { useState } from "react";

const App = () => {
  const [todos, settodos] = useState([]);

  const addTodos = () => {};

  return (
    <div className="m-auto min-h-screen max-w-xl bg-slate-800 p-8">
      <header className="mb-5 flex items-center justify-between p-5">
        <h1 className="text text-4xl font-bold uppercase tracking-[0.2em] text-white">
          tareas
        </h1>
        <button>
          <MoonIcon stroke={"white"} fill={"transparent"} />
        </button>
      </header>
      <section>
        {/* <img src="../src/assets/img.jpg" alt="" /> */}
        <div className="mb-5 flex justify-between gap-5 rounded bg-white p-5">
          <input className="border-b-2 border-b-blue-500 flex-grow p-2 outline-none" type="text" />
          <button className="rounded bg-blue-600 p-2 text-white">
            Guardar
          </button>
        </div>
      </section>
      <section>
        <article className="mb-2 flex justify-between gap-5 rounded bg-white p-5 hover:bg-slate-50">
          <button>
            <CircleIcon stroke={"gray"} fill={"none"} />
          </button>
          <p className="flex-grow text-gray-600">Nuevo Todo generado</p>
          <button>
            <EquisIcon stroke={"gray"} fill={"none"} />
          </button>
        </article>
        <article className="mb-2 flex justify-between gap-5 rounded bg-white p-5 hover:bg-slate-50">
          <button>
            <CircleIcon stroke={"gray"} fill={"none"} />
          </button>
          <p className="flex-grow text-gray-600">Nuevo Todo Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, sequi? generado</p>
          <button>
            <EquisIcon stroke={"gray"} fill={"none"} />
          </button>
        </article>
        <article className="mb-2 flex justify-between gap-5 rounded bg-white p-5 hover:bg-slate-50">
          <button>
            <CircleIcon stroke={"gray"} fill={"none"} />
          </button>
          <p className="flex-grow text-gray-600">Nuevo Todo generado</p>
          <button>
            <EquisIcon stroke={"gray"} fill={"none"} />
          </button>
        </article>
        <article className="mb-2 flex justify-between gap-5 rounded bg-white p-5 hover:bg-slate-50">
          <button>
            <CircleIcon stroke={"gray"} fill={"none"} />
          </button>
          <p className="flex-grow text-gray-600">Nuevo Todo generado</p>
          <button>
            <EquisIcon stroke={"gray"} fill={"none"} />
          </button>
        </article>
      </section>
    </div>
  );
};

export default App;
