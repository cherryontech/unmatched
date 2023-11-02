const SingleCard = (props) => {
  return (
    <div className=" h-106 w-72 border-2 shadow-xl flex flex-col p-6 my-2 rounded-[13px] hover:scale-105 duration-300">
    <img
      className="object-cover h-48 max-h-48 bg-white rounded-[13px]"
      src={props.image}
      alt="woman"
      />
    <h2 className="text-xl text-[#0A2E50] font-bold text-left py-5">{props.name}</h2>
    <p className="  text-[#0A2E50] text-left">{props.body}</p>
    <button className="bg-[#A855F7] w-[100px] rounded-[15px] text-xs text-white mt-6 float-right mx-auto mr-0 p-1">Learn More</button>
  </div>
  )
}
export default SingleCard