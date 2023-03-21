import "./balnce.css"
import { useSelector } from "react-redux"
import { toast } from "react-toastify"


export default function Currentbalance() {
    let plus = 0
    let minus = 0
    let total = 0

    //----------------expence-----------
    let obj = useSelector((store) => {
        return store.valueSection.expence
    })

    console.log(obj)

    for (let data of obj) {
        if (data.type == "plus") {
            plus += parseInt(data.dollar)
            total += +data.dollar

        } else if (data.type == "minus") {

            if ( 0 >= total && total <=0) {
                toast.success('zero income!');
                
            } else {
                total += parseInt(data.dollar)
                minus -= +data.dollar
            }

        }
    }

   
    return <>
        <div id="container">
            <h2 className="heading">Expense Tracker by Adil Altaf</h2>
            <h3 className="balance">CURRENT BALANCE</h3>
            <div id="current-price">
                <span>{"$" + total + ".00"}</span>
            </div>
            <div id="income-container">
                <div className="income-price">
                    <h4>INCOME</h4>
                    <p className="income-count">{plus + ".00"}</p>
                </div>
                <hr className="current-hr" />
                <div className="expence-price">
                    <h4>EXPENCE</h4>
                    <p className="expence-count">{minus + ".00"}</p>
                </div>


            </div>

        </div>


    </>

}