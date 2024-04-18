import { useState } from "react";

// import {userOBJ} from '../../../types/interface'
export default function index(props:any) {
  const {data, id, deleteData} = props
  let [count, setCount]:any = useState(1)
  return (
    <tr>
      <td className="text-center font-medium ">{id}</td>
      <td className="text-center font-medium ">{data.firstname}</td>
      <td className="text-center font-medium ">{data.lastname}</td>
      <td className="text-center font-medium ">{data.number}</td>
      <td className="text-center font-medium ">
        <input type="checkbox" className=" cursor-pointer"/>
      </td>
      <td className="w-[70px] mx-auto text-center font-medium flex justify-center gap-3 items-center">
        <i className="bx bx-minus cursor-pointer" onClick={() => {
          if(count != 1) {
            setCount(count - 1)
          }
        }}></i>
        {count}
        <i className="bx bx-plus cursor-pointer" onClick={() => setCount(count+=1)}></i>
      </td>
      <td className="text-center font-medium ">
        <button id={data.id} onClick={deleteData()} className="border w-[60px] rounded-xl">
          <i id={data.id}className="bx bx-user-x "></i>
        </button>
      </td>
    </tr>
  );
}
