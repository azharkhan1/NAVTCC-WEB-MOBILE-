import React, { useState, useRef, useEffect } from "react";






function App() {

    // var [value , setValue ] = useState(0);
    // var [arr , setArr ] = useState([1,2,4,5,76,2]);
    var [todo, setTodo] = useState([]);
    var myName = useRef();
    // function add(){
    //   setValue(value = value+1); value 
    //   setValue(value = value+1);
    //   setValue(value = value+1);
    //   setValue(value = value+1);
    //   setValue(value = value+1);
    // setValue(value = value+1);
    // setValue(value+1)  // 1
    // setValue(value+1) // 1
    // setValue(value+1) // 1
    // }

    // fetch('https://jsonplaceholder.typicode.com/todos/1')
    //     .then(response =>
    //         response.json())
    //     .then(json => console.log(json))

    function add() {
        // console.log(...todo) // spread operator

        //  setTodo([...todo  , {
        //      name : document.getElementById("name").value,
        //      post : document.getElementById("postValue").value
        //  }]);

        console.log("reference is => ", myName.current.value)
        var newData = {
            // name: document.getElementById("name").value,
            name: myName.current.value,
            post: document.getElementById("postValue").value,
        }
        setTodo((prev) => {
            return prev.concat([newData]);
        })
    }
    
    return (
        <div style={{ textAlign: "center" }}>
            <input
                placeholder="add name"
                // id="name"
                ref={myName}
            />
            <input
                placeholder="add post"
                id="postValue"
            />
            <button onClick={add}>
                Add
         </button>

            {/* {
        arr.map((value,index)=>{
           return ( <p>{value}</p>
        )})
        } */}
            {
                todo.map((value, index) => {
                    return (
                        <div key={index}>
                            <h4>
                                Name : {value.name}
                            </h4>
                            <p>
                                Post : {value.post}</p>
                            <img
                                src={"https://propakistani.pk/wp-content/uploads/2020/10/AcuraSType-MAIN_i-e1602837084858.jpg"}
                            />
                        </div>
                    )
                })
            }
        </div>
    )
}






export default App