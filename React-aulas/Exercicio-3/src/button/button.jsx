import "./button.css"

function Button ({text, link}) {
  return (
    <>
    <button className="button" >
      <a href={link}>{text}</a>
    </button>
    </>
  )
}

export default Button