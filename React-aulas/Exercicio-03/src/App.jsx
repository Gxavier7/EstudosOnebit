import './App.css'
import Profile from '../public/components/Profile'

function App() {

  return (
    <>
      <div style={{
        margin: "0px",
        width:"100vw",
        height:"100vh",
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"#428cd1"
      }}>
        <Profile
          imageUrl="https://randomuser.me/api/portraits/men/75.jpg"
          name = "John Doe"
          description = "Web Developer"
          number = "(31) 9 9236-2387"
          mail = "johnDoe@gmail.com"
          gitHub="https://github.com/Gxavier7"
          linkedln="https://www.linkedin.com/feed/"
          twitter="https://x.com/?lang=pt-br"

        />
      </div>
        
    </>
  )
}

export default App
