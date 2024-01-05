import { useState } from "react"

const AddPlayer = ()=>{
    const [league,setLeague] = useState({
        league:"BBl",
        player:"Maxwell",
        position:4,
        state: "All Rounder",
        captan:true,
        score: 24,
       result:"Win",
    })
    const addPlayerForm = ()=>{
        console.log("form")
    }
    return(
        <div className="ui-playerform">
           <form onSubmit={addPlayerForm}>
           <div class="ui-form-element">
            <select name="league">
                <option>Data</option>
            </select>
            </div>
            <div class="ui-form-element">
            <input type="text" name="player"></input>
            </div>
            <div class="ui-form-element">
            <select name="state">
                <option value={"Wk"}>Wicket Keeper</option>
                <option value={"Bat"}>Batter</option>
                <option value={"All"}>All Rounder</option>
                <option value={"Bowl"}>Bowler</option>
            </select>
            </div>
            <div class="ui-form-element">
            <select name="captan">
                <option value="yes" >Yes</option>
                <option value="no" >No</option>
            </select>  
            </div>
            <div class="ui-form-element"> 
            <input type="text" name="score"></input>
            </div>
            <div class="ui-form-element">
            <select name="result">
                <option value="win" >Win</option>
                <option value="loss" >loss</option>
            </select>  
            </div>
           </form>
        </div>
    )
}
export default AddPlayer;