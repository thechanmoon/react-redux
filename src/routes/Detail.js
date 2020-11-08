import React from "react";
import { connect } from "react-redux";
// import { useParams } from "react-router-dom";
// 

// function Detail(props){
//     // const id = useParams();
//     // console.log(id);
//     console.log(props);
//     return <h1>Detail</h1>
// }

function Detail({toDo}){
    console.log('toDo')
    console.log(toDo)
    return(
        <>
            <h1>{toDo?.text}</h1>
            <h5>Created at: {toDo?.id}</h5>
        </>
    )
}

function mapStateToProps(state, ownProps){
    const {
        match:{
            params:{
                id
            }
        }
    } = ownProps;
    console.log(id);
    console.log('state');
    console.log(state);
    // return {toDos: state};
    // return {toDo: state.find(toDo => 
    //     {
    //         console.log('toDo : ' + toDo);
    //         console.log('toDo.id :' + toDo.id);
    //         console.log('id : '+ id);
    //         console.log('toDo.id === id : '+ toDo.id === id);
    //         return toDo.id === parseInt(id)
    //     }
    //     )};
    return {toDo: state.find(toDo =>toDo.id === parseInt(id))};
}

export default connect(mapStateToProps)(Detail);