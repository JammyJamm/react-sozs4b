import { useEffect, useState } from "react";
import AddPlayer from "./AddPlayer";
import { collection, getDocs, query } from "@firebase/firestore";
import db from "../FirbaseConfig";
const PlayerData = () => {
    const [playerData,setPlayerData] = useState("")
  const [detail, setDetail] = useState([]);
  const userData = async () => {
    // document.getElementById("loaderSpinner").style.display = "flex";
    // Get selected Value data
    const q = query(collection(db, "livematch"));
    const querySnapshot = await getDocs(q);
    const data = querySnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
      //
      ...doc.data(),
    }));
    setDetail(data);
    handleFilter(data);
   
    // document.getElementById("loaderSpinner").style.display = "none";
  };
  useEffect(() => {
    userData();
  }, []);

  /// userData
  const handleFilter = (data) => {
    const addForm = document.querySelector("#playerFilter");
    const selectMatch = addForm.match;
    const selectGender = addForm.gender;
    const selectLeague = addForm.league;
    const ds = detail.filter(
      ({ match, league, gender }) =>
        match === selectMatch.value &&
         league === selectLeague.value &&
         gender === selectGender.value
    );
    setPlayerData(ds)
  };

  return (
    <div className="ui-player">
      <form id="playerFilter" className="ui-form card col-12">
        <div className="form-elements col-4 ">
          <label>Match</label>
          <select name="match" onChange={handleFilter}>
            <option value="T20">T20</option>
            <option value="ODI">ODI</option>
          </select>
        </div>
        <div className="form-elements col-4">
          <label>Gender</label>
          <select name="gender" onChange={handleFilter}>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div className="form-elements col-4">
          <label>League</label>
          <select name="league" onChange={handleFilter}>
            <option value="BBL">BBl League</option>
            <option value="InterNational">International</option>
            <option value="IPL">IPL</option>
          </select>
        </div>
      </form>
      <div className="card col-12">
        <table>
          <thead>
            <tr>
              <th>Player Name</th>
              <th>Batting position</th>
              <th>Role</th>
              <th>Captain</th>
              <th>Score</th>
              <th>Win</th>
            </tr>
          </thead>
          <tbody>
            {playerData.map((list) => {
              return (
                <tr>
                  <td>{list.player}</td>
                  <td>{list.position}</td>
                  <td>{list.about}</td>
                  <td>{list.captain}</td>
                  <td>{list.score}</td>
                  <td>{list.result}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <AddPlayer />
    </div>
  );
};
export default PlayerData;

