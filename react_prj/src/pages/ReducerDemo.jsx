import { useReducer } from "react";
let itemdetails = [{itemid:101,name:'sugar',price:40,qty:4},{itemid:102,name:'tea',price:50,qty:2},{itemid:103,name:'rice',price:80,qty:2}];
const reducer =(state,action) =>{
        switch(action.type)
        {
               case 'INCREMENT':
                    return state.map((item)=>{
                        if(item.itemid===action.itemid && item.qty<10)
                        {
                            return {...item,qty:item.qty+1};
                        }
                        else
                            return item;
                    });
                case 'DECREMENT':
                    return state.map((item)=>{
                        if(item.itemid===action.itemid && item.qty>1)
                        {
                            return {...item,qty:item.qty-1};
                        }
                        else
                            return item;
                    });
                default:
                        return state;
        }
};
export default function ReducerDemo()
{
    const [itemlist,dispatch]=useReducer(reducer,itemdetails);
    const increaseQty=(item)=>{
        dispatch({type:'INCREMENT',itemid:item.itemid});
    }
    const decreaseQty= (item)=>{
        dispatch({type:'DECREMENT',itemid:item.itemid});
    }
    return (
        
    <div className="container-fluid py-5 mt-5">
        <div style={{'marginTop':'30px'}}></div>
        <div className="container">
            <table>
                <tr><th>Item id </th>
                <th>Item name </th>
                <th>Item price </th>
                <th>Item qty </th>
                <th>total price </th>
                <th>Action</th>
                </tr>
            {itemlist.map((item)=>(
                <tr key={item.itemid}>
                        <td>{item.itemid}</td>
                        <td>{item.name}</td>
                        <td>{item.price}</td>
                        <td>{item.qty}</td>
                        <td>{item.price*item.qty}</td>
                        <td><input type="button" onClick={()=>increaseQty(item)} value="Increase qty"/>| <input type="button" onClick={()=>decreaseQty(item)} value="Decrease qty"/></td>
                </tr>

            ))}

            </table>

        </div>
    </div>
    );
  

}