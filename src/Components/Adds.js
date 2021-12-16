import React, {useState, useEffect} from "react";
import axios from "axios";

const APIAdds = (props) =>{
    const[adds, setAdds] = useState([]);

    useEffect(()=>{
        axios.get("http://127.0.0.1:8000/api/adds")
        .then(resp=>{
        console.log(resp.data);
        setAdds(resp.data);
         }).catch(err=>{
        console.log(err);
    });
    },[]);
        
    return(
        <div>
             { <table>
                <tr>
                    <th>Id</th> <t/>
                    <th>Name</th> <t/>
                    <th>Type</th> <t/>
                    <th>Description</th>  <t/>
                    <th>Price</th> 
                </tr>
                    {adds.map(a=>(
                <tr key={a.id}>
                    <td >{a.add_id}</td> <t/>
                    <td >{a.add_name}</td> <t/>
                    <td >{a.add_type}</td> <t/>
                    <td >{a.add_desc}</td> <t/>
                    <td >{a.add_price}</td>
                </tr>
                    ))}
            </table> }
           
                
        </div>
    )
}
export default APIAdds;