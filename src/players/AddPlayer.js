
import { useState } from "react";
import db from "../FirbaseConfig";
import { addDoc, collection } from "@firebase/firestore";

const AddPlayer = () => {
  const [data, setData] = useState("");
  const [form, setForm] = useState([
    {
      match: "",
      matchData: {
        gender: "", 
        genderData: {
          league: "",
          leagueData: {
            player: "",
            captain: "",
            position: "",
            about: "",
            score: "",
            result: "",
          },
        },
      },
    },
  ]);
  const handlePlayerScore = (e) => {
    e.preventDefault();
    // validationPlayer();
    const addForm = document.querySelector("#addPlayer");
    const colRef = collection(db, "livematch");
    addDoc(colRef, {
      league: addForm.league.value,
      gender: addForm.gender.value,
      match: addForm.match.value,
      player: addForm.player.value,
      captain: addForm.captain.value,
      position: addForm.position.value,
      about: addForm.about.value,
      score: addForm.score.value,
      result: addForm.result.value,
    })
      .then((response) => {
        alert("Added");
      })
      .catch((error) => {
        console.log(error.message);
      });
    // console.log(form);
  };
  //  function validationPlayer(){
  //     return
  //  }
  const playerChange = (e) => {
    return e.target.value;
  };
  return (
    <div className="ui-form card col-12">
      <form id="addPlayer" onSubmit={handlePlayerScore}>
        <div className="form-elements col-4 ">
          <label>Match</label>
          <select name="match" onChange={playerChange}>
            <option value="T20">T20</option>
            <option value="ODI">ODI</option>
          </select>
        </div>
        <div className="form-elements col-4">
          <label>Gender</label>
          <select name="gender" onChange={playerChange}>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div className="form-elements col-4">
          <label>League</label>
          <select name="league" onChange={playerChange}>
            <option value="BBL">BBl League</option>
            <option value="InterNational">International</option>
            <option value="IPL">IPL</option>
          </select>
        </div>
        <div className="form-elements col-4">
          <label>Player Name</label>
          <input type="text" name="player" onChange={playerChange} />
        </div>
        <div className="form-elements col-4">
          <label>Captain</label>
          <select name="captain" onChange={playerChange}>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <div className="form-elements col-4">
          <label>Batting position</label>
          <select name="position" onChange={playerChange}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
          </select>
        </div>
        <div className="form-elements col-4">
          <label>About</label>
          <select name="about" onChange={playerChange}>
            <option value="Wk">Wicket Keeper</option>
            <option value="Bat">Battter</option>
            <option value="All">All Rounder</option>
          </select>
        </div>
        <div className="form-elements col-4">
          <label>Score</label>
          <input type="number" name="score" onChange={playerChange} />
        </div>
        <div className="form-elements col-4">
          <label>Result</label>
          <select name="result" onChange={playerChange}>
            <option value="Win">Win</option>
            <option value="Loss">Loss</option>
          </select>
        </div>
        <button className="blue-btn">Submit</button>
      </form>
    </div>
  );
};
export default AddPlayer;

