import { getPets } from "@/sanity/utils"

const page = async () => {  
  const pets = await getPets();

  return (
    <div>
      {pets.map((pet:any) => (
        <div key={pet._id}>
          <p>{pet._id}</p>
          <p>{pet.name}</p>
        </div>
      ))}
    </div>
  )
}

export default page