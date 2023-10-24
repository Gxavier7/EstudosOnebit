import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/globals.css'
import Profile from './profile/Profile'
import ProfileAvatar from '/Myphoto.jpg'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Profile 
      avatar={ProfileAvatar} 
      name="Gabriel Xavier"
      bio="Full-stack javascript developer"
      phone="31 995247215"
      email="Gabrim0070@gmail.com"
      githubUrl="https://github.com/Gxavier7"
      linkedinUrl="https://www.linkedin.com/in/gabriel-m-xavier-4a2717257/"
      twitterUrl="https://twitter.com"
      />
  </React.StrictMode>,
)
