// export default () => "Home";
import React, {useState} from 'react';
import {connect} from 'react-redux';
import {actionCreators} from '../store';
import ToDo from '../component/ToDo';
function Home({toDos,addToDo})
{
    //// console.log(props);
    const [text, setText] = useState("");
    const onChange = (e) => { setText(e.target.value) }
    const onSubmit = (e) => { 
        e.preventDefault(); 
        console.log(text) ; 
        setText("")
        addToDo(text);
    }
    return(
        <>
            <h1>To do</h1>
            <form onSubmit={onSubmit}>
                <input type = "text" value = {text} onChange={onChange} />
                <button>Add</button>
            </form>
            <ul>{toDos.map(toDo =>(
                <ToDo {...toDo} key = {toDo.id}></ToDo>
            ))}</ul>
        </>
    )
} 

function mapStateToProps(state){
    console.log("mapStateToProps");
    console.log(state);
    // console.log(ownProps);
    // return { tiburon: 'special' };
    return {toDos: state};
}

function mapDispatchToProps(dispatch){
    console.log("mapDispatchToProps");
    console.log(dispatch);
    // return{dispatch}
    return{
        addToDo: text => dispatch(actionCreators.addToDo(text))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);