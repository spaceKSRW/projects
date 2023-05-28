import logo from "./logo.svg";
import Header from "./components/Header";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
// import Button from '@mui/material/Button';
// import Stack from '@mui/material/Stack';
import PersonRemoveAlt1Icon from '@mui/icons-material/PersonRemoveAlt1';


import "./App.css";

function App() {
  const [form, setForm] = useState({});
  const [data, setData] = useState([]);

  const addData = () => {
    setData([...data, form]); //stores data of all entries inserted
    setForm(form);
  };
  const removeItem=(index)=>{
   let arr=data;
   arr.splice(index,1);
   setData([...arr]);

  }
  return (
    <div className="App">
      <Header />
      <div className="form">
        <Stack direction="row" spacing={2}>
          <TextField
            value={form.name}
            onChange={(event) => setForm({...form,name:event.target.value})}
            id="outlined-basic"
            label="name"
            variant="outlined"
          />
          <TextField
            value={form.email}
            onChange={(event) => setForm({...form,email: event.target.value})}
            id="outlined-basic"
            label="Email"
            variant="outlined"
          />
          <Button onClick={addData} color="success" variant="contained">
            <AddIcon />
          </Button>
        </Stack>
      </div>
      {/* Data is displayed here*/}  
      <div className="data">
        <div className="data-val">
          <h4>Name</h4>
          <h4>Email</h4>
          <h4>Remove</h4>
        </div>
        {data.map((element, index) => {
          return (
            <div key={index} className="data-val">
              <h4>{element.name}</h4>
              <h4>{element.email}</h4>
              <Stack direction="row" spacing={2}>
                <Button onClick={()=>removeItem(index)} variant="outlined" color="error">
                  <PersonRemoveAlt1Icon></PersonRemoveAlt1Icon>
                </Button>
              </Stack>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
