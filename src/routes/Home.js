// export default () => "Home";
import React, {useState} from 'react';
import {connect} from 'react-redux';
function Home({toDos})
{
    // console.log(props);
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
            <ul>{JSON.stringify(toDos)}</ul>
        </>
    )
} 

function mapStateToProps(state){
    // console.log(state);
    // console.log(ownProps);
    // return { tiburon: 'special' };
    return {toDos: state};
}

function mapDispatchToProps(dispatch){
    console.log(dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);