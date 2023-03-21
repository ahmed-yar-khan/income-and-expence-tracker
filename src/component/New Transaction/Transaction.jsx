import "./transaction.css"
import {useForm } from "react-hook-form"
import { useDispatch } from "react-redux"
import { type } from "@testing-library/user-event/dist/type"


export default function Transaction(){
let dispatch = useDispatch()
let {register,handleSubmit,formState:{errors}}=useForm()



const savedata =(data)=>{
  if(data.dollar.includes("-")){
     data.type ="minus"
  }else{
   data.type ="plus"
  }
  data.id = Math.floor(Math.random() * 1000);
 dispatch({
    type:"Dollar-Detail",
    payload:data
})
console.log(data)
}





    return<>
    <div id="transaction-container">
    
    <h3 className="heading">Add New Transaction</h3>
        <hr className="hrline" />
     
     <form onSubmit={handleSubmit(savedata)}>
        <h4>Description</h4>
       <input className="dec" type="text" placeholder="Detail of Transication"{...register("decription",{required:true})}  />
     {errors.decription&&errors.decription.type==="required" ? <div style={{color:"red"}}>Please Enter Decription</div>:null}
       
       
       <h4>Transaction Amount</h4>
       <input className="dec" {...register('dollar', {required:true})}  placeholder="Dollar Value of Transaction" type="Number" /><br />
          {errors.dollar && errors.dollar.type === 'required' ? <div  style={{color:"red"}}>Please Enter Value</div> : null }
      
      
      
       <button className="btn">Add Transaction</button>

     </form>




        </div>
    
    </>

}