import React from "react";
import "./styles.css";



export default function CreateNews() {


    return (

        <div className="News" style={{backgroundColor: "white", width: "60%", margin: "0 auto", marginTop: "10%", textAlign: "center",  borderRadius: "25px"}}>
            <form style={{border:"solid 7px #3F51B5", borderRadius: "25px"}} method="post" action="/api/NewPost">
            <div style={{margin: "20px"}}>
            <label style={{margin: "20px", fontFamily: "Roboto", fontSize: "20px"}}for="fname">Title:</label>
            <input style={{margin: "20px"}}type="text" id="title" name="title"/>
            </div>

                <textarea name="message" style={{width:"60%", height:"500px",  fontSize: "20px"}}>
                    Your announcement here...
                </textarea>
                    <div>
                <button style={{marginLeft: "45%", margin: "20px", fontFamily: "Roboto", fontSize: "20px"}} type="button" onclick="submit">Submit</button>
                </div>
            </form>

        </div>






    )



}