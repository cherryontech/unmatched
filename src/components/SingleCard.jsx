const SingleCard = (props) => {
  return (
    <div className="relative h-96 w-80 border-2 shadow-xl flex flex-col p-6 my-2 rounded-[13px] hover:scale-105 duration-300">
    <img
      className="object-cover h-80 bg-white rounded-[13px]"
      src={props.image}
      alt="woman"
      />
    <h2 className="text-2xl font-bold text-center py-8">{props.name}</h2>
  </div>
  )
}
export default SingleCard