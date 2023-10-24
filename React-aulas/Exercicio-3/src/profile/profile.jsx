import Button from "../button/button.jsx"
import Style from "./profile.module.css"

function Profile({avatar, name, bio, email, phone, githubUrl, linkedinUrl, twitterUrl}) {
  return (
    <>
    <div className={Style.background}>
      <div className={Style.card}>
        <div className={Style.top}>
          <img src={avatar} alt="{name}" className={Style.avatar}/>
          <h4>{name}</h4>
        </div>
        <hr/>
        <p>{bio}</p>
        <hr />
        <p>{phone}</p>
        <hr />
        <p>{email}</p>
        <hr />
        <Button text="GitHub" link={githubUrl}/>
        <Button text="Linkedin" link={linkedinUrl}/>
        <Button text="Twitter" link={twitterUrl}/>
      </div>
    </div>
    </>
  )
}

export default Profile
