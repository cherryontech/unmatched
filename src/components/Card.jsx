import Resh from '../assets/reshma.jpg';
import {useState} from 'react'
import SingleCard from './SingleCard';
const data = 
[
    {
        "id": 1,
        "name":"Reshma Saujani",
        "body":"Founder of Girls Who Code",
        "image": Resh

        
    },
    {
        "id": 2,
        "name":"Anna Lytical",
        "body":"A software engineer who uses drag to introduce LGBTQ+ folks to coding and technology",
        "image": Resh
    },
    {
        "id": 3,
        "name":"Farida Bedwei",
        "body":"Farida Bedwei  is a Ghanaian woman software engineer with cerebral palsy",
        "image": Resh
    },
    {
        "id": 4,
        "name":"Jedidah Isler",
        "body":"Jedidah C. Isler is an astrophysicist, educator, and an advocate for diversity in STEM.",
        "image": Resh
        }
]

const Card = (props) => {
  const[profile, setProfile] = useState(data)
  const details = profile.map((detail)=>{
    return(<SingleCard image={detail.image} name = {detail.name} />)
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
