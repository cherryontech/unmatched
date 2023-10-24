import Resh from '../assets/reshma.jpg';
import {useState} from 'react'
import SingleCard from './SingleCard';
const data = 
[
    {
        "id": 1,
        "name":"Reshma Saujani",
        "body":"Asian founder of Girls Who Code",
        "image": Resh

        
    },
    {
        "id": 2,
        "name":"Anna Lytical",
        "body":"LGBTQ+ coding educator using drag persona",
        "image": Resh
    },
    {
        "id": 3,
        "name":"Farida Bedwei",
        "body":"A Ghanaian engineer with cerebral palsy",
        "image": Resh
    },
    {
        "id": 4,
        "name":"Jedidah Isler",
        "body":"African American astrophysicist and professor",
        "image": Resh
        }
]

const Card = (props) => {
  const[profile, setProfile] = useState(data)
  const details = profile.map((detail)=>{
    return(<SingleCard image={detail.image} name = {detail.name} body = {detail.body}/>)
  }

  )
  return (
    <>
    <div className="w-full py-[10rem] px-4 bg-white">
      <div className="max-w-[1040px] grid md:grid-cols-3 gap-8 ">
        {details}
      </div>
    </div>
   </>
  );
};
export default Card;
