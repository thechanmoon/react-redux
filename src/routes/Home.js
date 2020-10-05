// export default () => "Home";
import React, {useState} from 'react';

function Home()
{
    const [text, setText] = useState("");
    const onChange = (e) => { setText(e.target.value) }
    const onSubmit = (e) => { e.preventDefault(); console.log(text) ; setText("")}
    return(
        <>
            <h1>To do</h1>
            <form onSubmit={onSubmit}>
                <input type = "text" value = {text} onChange={onChange} />
                <button>Add</button>
            </form>
        </>
    )
} 

export default Home;