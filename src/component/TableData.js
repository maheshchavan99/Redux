import { Table } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { deleteItem } from "../redux/action/action"
import EditData from "./EditData"

export const TableData=()=>{

  const dispatch=useDispatch()

  const selectState=useSelector(state=>{
    console.log(">>>>>>",state)
     return state
   })
    return(
        <Table striped bordered hover className="mt-4">
        <thead>
          <tr>
            <th>Username</th>
            <th>Email</th>
            <th>password</th>
            <th>MobileNumber</th>
          </tr>
        </thead>
        <tbody>
          
         {selectState.map((data,index)=>{
           return(
            <tr key={index}>
            <td>{data.username}</td>
            <td>{data.email}</td>
            <td>{data.password}</td>
            <td>{data.mobilenumber}</td>
            <td><button type="submit" className="btn btn-primary">EDIT</button></td>
            <td><button type="submit" className="btn btn-danger" onClick={(()=>{
              dispatch(deleteItem())
            })}>DELETE</button></td>
            
          </tr>
           )
         })}
        </tbody>
       
      </Table>
    )
}