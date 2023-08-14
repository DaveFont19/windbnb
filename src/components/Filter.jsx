import React from 'react'
import Label from './Label';
import Label1 from './Label1'


function Filter({newLocation, card, counter, setStaies, staies}) {
            if (card.city == newLocation && card.maxGuests >= counter){
                
                return (
                <div className=''>
                    <img className="photos cursor-pointer sm:w-full md:w-full h-1/1 lg:w-full h-70 rounded-xl mb-2 " src={card.photo}/>
                    <div className='flex container w-full items-baseline'>
                        {card.superHost && <Label className="w-2/6" >Super Host</Label>}
                        <label className='mx-4 w-2/6'>{card.type}</label>
                        {card.beds && <Label1 className="w-2/6">{card.beds}{" beds"}</Label1>}
                        <i class="fa-solid fa-star ml-auto" id='star'></i>
                        <span className="w-1/8 text-end">{card.rating}</span>
                    </div>
                    <p className='font-bold sm:my-4 mb-8 lg:my-4'>{card.title}</p>

                </div>)
    
            }else if(newLocation == undefined){
                
                return(
                <div className=''>
                    <img className="photos cursor-pointer	 sm:w-full md:full h-1/1 lg:w-full h-70 rounded-xl mb-2 " src={card.photo}/>
                    <div className='flex container w-full items-baseline'>
                        {card.superHost && <Label className="w-2/6" >Super Host</Label>}
                        <label className='mx-4 w-2/6'>{card.type}</label>
                        {card.beds && <Label1 className="w-2/6">{card.beds}{" beds"}</Label1>}
                        <i class="fa-solid fa-star ml-auto" id='star'></i>
                        <span className="w-1/8 text-end">{card.rating}</span>
                    </div>
                    <p className='font-bold mt-4'>{card.title}</p>

                  </div>)
            }
        }
export default Filter