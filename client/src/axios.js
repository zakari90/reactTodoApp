import axios from 'axios';



function getData() {
    axios.get("http://localhost:5000/todo")
    .then((res)=>{console.log(res.data)
      setTodo(res.data)})
    .catch((err)=>{
      console.log(err);
    })
}