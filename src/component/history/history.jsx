import "./history.css"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
export default function History(){

 

   let dispatch=useDispatch();


    let spending = useSelector((store) => {
        return store.valueSection.expence
    })




    return<>
        <div id="history-container">
        <h3 className="heading">Transaction History</h3>
        <hr className="hrline" />
        <ul className="list">
            {
                spending.map((data)=>{
                    
                    return <li className={ data.dollar > 0 ? "plus" : "minus"}>{data.decription}<span>{"$"+data.dollar}</span>
                   <button className="delete-btn" onClick={()=>{
                        dispatch({
                            type:"DELETEM",
                            payload:data.id
                        })
                    
                    }} >X</button>
                    <button className="delete-edit" onClick={()=>{
                        let  newdec = prompt("enter dec")
                        let  newprice = prompt("enter price")
                        let id= data.id
                        dispatch({
                          
                            type:"Edit",
                            payload:{
                                newdec,
                                newprice,
                                id
                            }
                        })
                    }} >E</button>
                   </li>
                })
            }
       
            </ul> 
            </div>
       
       
    
    </>
}