import { useEffect, useState } from "react";
import "./App.css";
import Nav from "./components/Nav";
import logo from "./img/logo.png"
import Filter from "./components/Filter";


function App() {
  // La variable data es la que va a almacenar los datos de "stays.json" y setData nos ayudará a guardar esos datos en esa variable. Es necesario que inicialicemos esa variable como un array vacío para evitar errores.
  const [data, setData] = useState([]);
  const [newLocation,setNewLocation] = useState();
  const [counter, setCounter] = useState()

  // Función para traer los datos de "stays.json".
  const getData = async () => {
    // Esta sentencia try-catch sirve para manejar los errores que se podrían generar al importar los datos de "stays.json".
    try {
      const res = await fetch("stays.json");
      const resJson = await res.json();
      // Aquí guardamos los datos de "stays.json" en la variable data.
      setData(resJson);
    } catch (error) {
      console.log(error);
    }
  };

  // Este Hook te va a ejecutar la función getData cada vez que la página se renderice.
  useEffect(() => {
     getData();
  }, []);
  // Puedes ver la variable data en consola.

  const [staies,setStaies] = useState (0)
  return (
    <>
      <div className="lg: logo-inputs flex h-12 mt-8 ml-28 mx-28">
        <img className="lg: picture  h-5 align-middle" src={logo}/>
        <Nav 
        data={data}
        setNewLocation={setNewLocation}
        setCounter={setCounter}/>
      </div>
      <div className="lg: titles flex ">
        <h1 className="lg: text-2xl font-bold mt-10 ml-28">
        Stays in Finland
        </h1>
        <label className="lg:font-bold mr-28">{staies > 12 ? "+ 12" : staies}{""} Stays</label>

      </div>
      <section className=" lg:grid grid-cols-3 mx-24 my-8 gap-12">
      {/* Aquí te dejo un ejemplo de cómo podrías imprimir varios elementos a la vez. */}

        {data.map(card => (
              <Filter
              card={card}
              newLocation={newLocation}
              counter={counter}
              setStaies={setStaies}
              />
        ))}
      </section>
    </>
  );
}

export default App;
