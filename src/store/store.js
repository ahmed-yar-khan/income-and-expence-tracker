import { createStore, combineReducers } from "redux";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';


let olData = {
    expence:[]
}

function valueSection(puranaData = olData, newData){
    if(newData.type === "Dollar-Detail"){
    
          puranaData.expence.push(newData.payload)

   
        }else if(newData.type==="DELETEM"){
        
           puranaData.expence = puranaData.expence.filter(data=>data.id != newData.payload);

        }else if(newData.type ==  'persist/REHYDRATE' && newData.payload){
            return newData.payload.valueSection  ;
        }else if(newData.type === "Edit"){
            puranaData.expence.forEach(element => {
                    if (element.id==newData.payload.id) {
                        element.decription= newData.payload.newdec
                        element.dollar= newData.payload.newprice
                    }
                });
                console.log(puranaData);
        }


    
    return  { expence:[...puranaData.expence]};
    //  puranaData;

   
}




let bigSection = combineReducers({valueSection});

const persistConfig = {
    key: 'root',
    storage,
  }
  const persistedReducer = persistReducer(persistConfig, bigSection)

export let meraStore = createStore(persistedReducer);
export  let persistor = persistStore(meraStore);



// let myStore = createStore(bigSection);
// export default myStore;