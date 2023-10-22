import Resh from '../assets/reshma.jpg';
// import data from '../data/data.json'

const Card = () => {
  return (
    <div className="w-full py-[10rem] px-4 bg-white">
      <div className="max-w-[1040px] grid md:grid-cols-3 gap-8 ">
        <div className="relative h-96 w-80 border-2 shadow-xl flex flex-col p-6 my-2 rounded-[13px] hover:scale-105 duration-300">
          <img
            className="object-cover h-80 bg-white rounded-[13px]"
            src={Resh}
            alt="woman"
          />
          <h2 className="text-2xl font-bold text-center py-8">Reshma Saujani</h2>
        </div>
      </div>
    </div>
  );
};
export default Card;
