import React, {useState, useEffect} from "react";
import axios from "axios";

const APIShowpost = (props) =>{
    const[showpost, setShowpost] = useState([]);

    useEffect(()=>{
        axios.get("http://127.0.0.1:8000/api/showpost")
        .then(resp=>{
        console.log(resp.data);
        setShowpost(resp.data);
         }).catch(err=>{
        console.log(err);
    });
    },[]);
        
    return(
        <div>
             { <table>
                <tr>
                    <th>Id</th> 
                    <th>Name</th> 
                    <th>Budget</th> <t/>
                    <th>Description</th>  <t/>
                    <th>Posted by</th> 
                </tr>
                    {showpost.map(sp=>(
                <tr key={sp.id}>
                    <td >{sp.wp_id}</td> 
                    <td >{sp.wp_type}</td> 
                    <td >{sp.wp_budget}</td> <t/>
                    <td >{sp.wp_description}</td> <t/>
                    <td >{sp.wp_posted_by}</td>
                    
                </tr>
                    ))}
            </table> }
           
                
        </div>
    )
}
export default APIShowpost;