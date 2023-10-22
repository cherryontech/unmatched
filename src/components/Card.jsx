import Resh from '../assets/reshma.jpg'

const Card= () => {
  return (
    <div className="w-full py-[10rem] px-4 bg-white">
    <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8 ">
      <div className="w-full border">
        <img src={Resh} className="max-w-xs mx-auto bg-white" alt="woman"/>
        <h2 className='text-2xl font-bold text-center py-8'>Resh Sar</h2>

      </div>
    </div>

    </div>
  )
}
export default Card;
