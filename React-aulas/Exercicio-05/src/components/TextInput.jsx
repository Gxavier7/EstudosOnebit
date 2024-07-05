export default function TextInput({id, label, value, setValue}) {
    return(
        <div style={{
            "display": "flex",
            "alignItems": "start",
            "flexDirection": "column",
            "justifyContent": "start",
        }}>
            <label htmlFor={label}>{label}:</label>
            <input 
            type="text"
            name={id}
            id={id}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            style={{"width": "300px"}}
             />
        </div>
    )
}