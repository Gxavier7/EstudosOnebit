export default function Button(props) {
    return (
        <>
            <button
                style={{
                    border:"none",
                    padding:"1rem",
                    color:"#f3f3f3",
                    fontSize:"16px",
                    cursor:"pointer",
                    borderRadius:"7px",
                    backgroundColor:"#121212"
                }}
            >{props.text}</button>
        </>
    )
}