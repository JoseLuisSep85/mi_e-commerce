
const ItemCount = ({ cantidad, handleAgregar, handleQuitar, handleConfirmar }) => {

    return (
        <div className='contador flex gap-4 justify-center m-4 items-center'>
            <div className='controles flex gap-4 text-center items-center'>
                <button className='boton bg-sky-600 rounded-md h-8 w-8 text-white text-center hover:bg-sky-500' onClick={handleAgregar}>+</button>
                <h4 className='numero text-sm items-center'>{cantidad}</h4>
                <button className='boton boton bg-sky-600 rounded-md h-8 w-8 text-white hover:bg-sky-500' onClick={handleQuitar}>-</button>   
            </div>
            <div>
                <button className='boton bg-sky-600 rounded-lg h-12 p-3 hover:bg-sky-500 text-white' onClick={handleConfirmar}>Agregar al carrito</button>
            </div>
        </div>
      )
    
}
   


export default ItemCount