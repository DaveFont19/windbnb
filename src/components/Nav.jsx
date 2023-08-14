import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import { useState } from 'react';


const style = {
  position: 'absolute',
  top: '0',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
function Nav({setNewLocation, setCounter, data}) {

  const [location, setLocation] = useState("Whole")
  const [countAdult, setCountAdult] = useState (0)
  const [countChild, setCountChild] = useState (0)
  const [listHidden, setListHidden] = useState (true)
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

const toggleHideFalse = () =>{
  setListHidden(false);
}
const toggleHideTrue = () => {
  setListHidden(true)
}
//de esta manera siempre hago que esté en true por más clicks que den ése input, que viene siendo el de location, ve al ternario que hace si se escribe hide en las className 
  const handleClick = (event) => {
    const location = event.target.getAttribute('data-location');
    setLocation(location);
  };

  const handleSent = ()=>{
    setNewLocation(location);
    setCounter(addGuests);
  }
  
  function increase(){
    setCountAdult(countAdult + 1);
  }

  function decrease(){
    if(countAdult === 0){
      return
    } else {  
        setCountAdult(countAdult - 1);
}
  }

  function increaseChild(){
    setCountChild(countChild + 1);

  }

  function decreaseChild(){
    if(countChild === 0){
      return
    }else{
    setCountChild(countChild - 1);

    }
  }

  const addGuests = countAdult + countChild
  //lo hice con constante porque con el useState se quedaba atrasado

const location1 = location + " , Finland"
const uniqueCities = new Set(data.map(item => item.city));


  return (
    <div className='flex w-90'>
      <button onClick={handleOpen} className='button container'>
        
          <input type='text' className="lg:w-2/5 rounded-l-lg shadow-md h-10 pl-4" value={location1}></input>
          <input type='text' className="lg:w-2/5 shadow-md h-10 pl-4"   value={addGuests !== 0 ? addGuests : "Add guests"}/>
          {/*con el ternario si addGuests es distinto a 0, si es true, que imrpima la constante, si es false, que imprima el texto*/}
          <button className='lg:button-search rounded-r-lg shadow-md h-11 px-5'><span id="lupa" class="material-symbols-outlined">
                search
          </span>
          </button>
        </button>





      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box className="w-full h-70" sx={style}>
            <Typography className='mt-4' id="transition-modal-title" variant="h6" component="h2">
              Text in a modal
            </Typography>
            <Typography  id="transition-modal-description" sx={{ mt: 2 }}>
          {/*Esta parte son los inputs superiores del modal*/ }
            <section className="container h-1/2 mt-40">
              <input className='mt-60 w-5/12 h-12 drop-shadow-md rounded-l-lg' value={location1} onClick={toggleHideTrue}></input>
              {/*en React no existe algun tipo de classList.remove como en JavaScript, asi que llamo a la funcion toggleHideTrue, ve a la funcion en la parte de arriba */}
              <input className='mt-60 w-5/12 h-12 drop-shadow-md' value={addGuests !== 0 ? addGuests : "Add guests"} onClick={toggleHideFalse}/>
              {/*Lo mismo de arriba pero en toggleHideFalse */}
              <button className="bg-red-600 rounded-md drop-shadow-md text-white w-2/12 h-12" variant="contained" onMouseUp={handleClose} onClick={handleSent}><span class="material-symbols-outlined">
                search
              </span>Search</button>
            </section>


              {/*Las localizaciones */}
            <section id="location-counter" className='lg:flex w-full'>
              <ul className={`w-1/3 ${listHidden ? '' : 'hide'}`}>
                {/*Como la variable ListHidden está en True desde el inicio, este listado es lo primero que va a aparecer, si se quiere hacer un ternario es necesario poner el $, el booleano compara, como es True, no escribe el Hide, pero cuando cambie el Hide a false con la funcion de arriba, se añadirá hide a la className */}
                {[...uniqueCities].map(city => (
                  <li key={city} className='mt-8' data-location={city} onClick={handleClick}><i id="location" class="fa-solid fa-location-dot"></i>{city + " , Finland"}</li>
                ))}
              </ul>


              {/*Esta parte de aqui son los contadores  */}
              <section className={` w-2/3 ml-40 mt-8 ${listHidden ? 'hide' : ''}`}>
                {/*Como la variable ListHidden es True, se escribe el hide en el className */}
                  <h3 className='font-bold'>
                    Adults
                  </h3>
                  <p>Ages 13 or above</p>
                <div className='py-8 flex gap-4 pr-4'>
                  <span id="minus" class="material-symbols-outlined" onClick={decrease}>
                    indeterminate_check_box
                    </span>
                    <span>{countAdult}</span>
                  <span id='plus' class="material-symbols-outlined" onClick={increase}>
                  add_box
                  </span>
                </div>
                  <h3 className='font-bold'>
                    Children
                  </h3>
                  <p>Ages 2 - 12</p>
                  <div className='py-8 flex gap-4 pr-4'>
                  <span id="minus" class="material-symbols-outlined" onClick={decreaseChild}>
                    indeterminate_check_box
                    </span>
                    <span>{countChild}</span>
                  <span id='plus' class="material-symbols-outlined" onClick={increaseChild}>
                  add_box
                  </span>
                  </div>
              </section>
            </section>
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}


export default Nav