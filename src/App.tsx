import {Container} from '@containers'
import {Input, Button, Tr} from '@ui'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const url = 'http://localhost:3000'
  function submitBtn(){
      if(firstname.trim().length > 0 && lastname.trim().length > 0 && number.trim().length > 0){
        const user = {
          firstname: firstname,
          lastname: lastname,
          number: number,
        }
        axios.post('http://localhost:3000/Users', user);

        toast.success('User add succusfuly', {
          position: "top-right",
          autoClose: 1000,
          });
        setTimeout(() => {
          window.location.reload()
        }, 1300);
      }else{
        alert('Please fill in all fields')
      }
  }
  let [firstname, setFirstname]:any = useState('')
  let [lastname, setLastname]:any = useState('')
  let [number, setNumber]:any = useState('')
  let [data, setData]:any = useState([])
  useEffect(() => {
    axios.get(url + "/Users").then(res => {
      setData(res.data)
    });
  }, [])


  function deleteData(id:any){
    let idd = id.target.id
    axios.delete(url + "/Users/" + idd)
    toast.success('User deleted succusfuly', {
      position: "top-right",
      autoClose: 1000,
      });
    setTimeout(() => {
      window.location.reload()
    }, 1300);
  }
  return (
    <>
    <ToastContainer />
      <section>
          <Container>
              <div className='w-[400px] mx-auto border-[2px] mt-[100px] p-[30px] rounded-xl shadow-xl'>
                  <form>
                      <Input type={'text'} placeholder={"firstname"} state={setFirstname}/>
                      <Input type={'text'} placeholder={"lastname"}  state={setLastname}/>
                      <Input type={'text'} placeholder={"number"}  state={setNumber}/>
                  </form>
                      <Button text={'Submit'} click={() => submitBtn}/>
              </div>
          </Container>
      </section>

      <section>
         <Container>
            <div>
              <table className="w-[800px] mx-auto border-[2px] mt-[100px] p-[30px] rounded-xl shadow-xl">
                <thead>
                  <tr>
                    <th className="text-center">#</th>
                    <th className="text-center">Firstname</th>
                    <th className="text-center">Lastname</th>
                    <th className="text-center">Number</th>
                    <th className="text-center">Active</th>
                    <th className="text-center">Count</th>
                    <th className="text-center">Action</th>
                  </tr>
                </thead>
                <tbody>
                   {
                    data.map((e:object, i:number)=> {
                      return <Tr key={i} data={e} id={i+1} deleteData={() => deleteData}/>
                    })
                   }
                </tbody>
              </table>
            </div>
         </Container>
      </section>
    </>
  );
};

export default App;