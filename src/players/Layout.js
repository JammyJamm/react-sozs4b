import NavLayout from "../NavLayout";
import AddPlayer from "./AddPlayer";
import PlayerData from "./PlayerData"
const PlayerLayout = ()=>{
    return(
        
        <div className="">
            <NavLayout/> 
           <PlayerData />
           <AddPlayer/>
        </div>
       
    )
}
export default PlayerLayout;