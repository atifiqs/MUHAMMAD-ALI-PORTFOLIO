import React from 'react'
import Card from './conponents/Card'

const App = () => {
  let arr = [1, 2, 3, 6]

const users = [
  {
    name: "Ali Khan",
    email: "ali.khan@example.com",
    image: "https://images.unsplash.com/photo-1761839258045-6ef373ab82a7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8",
  },
  {
    name: "Sara Ahmed",
    email: "sara.ahmed@example.com",
    image: "https://plus.unsplash.com/premium_photo-1766341850770-9c7bd261ccb5?q=80&w=435&auto=format&fit=crop",
  },

  // 🔽 New Users
  {
    name: "Usman Ali",
    email: "usman.ali@example.com",
    image: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "Ayesha Noor",
    email: "ayesha.noor@example.com",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "Hassan Raza",
    email: "hassan.raza@example.com",
    image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "Fatima Zahra",
    email: "fatima.zahra@example.com",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "Bilal Ahmed",
    email: "bilal.ahmed@example.com",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "Noor Ul Ain",
    email: "noor.ulain@example.com",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "Zain Malik",
    email: "zain.malik@example.com",
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "Hira Khan",
    email: "hira.khan@example.com",
    image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "Saad Farooq",
    email: "saad.farooq@example.com",
    image: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?auto=format&fit=crop&w=500&q=60",
  },
]


return (


    <div className='flex gap-5 p-8 flex-wrap items-center justify-center'>
      {users.map(function(elem){
        return (
          <Card name={elem.name} email={elem.email} image={elem.image} />
        )
      })}
    </div>
  )
}

export default App