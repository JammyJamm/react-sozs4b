import React from 'react';
import { collection, addDoc } from 'firebase/firestore';
import db from './FirbaseConfig';

function AddData() {
  const colRef = collection(db, 'cricket');
  const handleAddSubmit = (e) => {
    e.preventDefault();
    const addForm = document.querySelector('#addData');
    addDoc(colRef, {
      match: addForm.match.value,
      league: addForm.league.value,
      team1: addForm.team1.value,
      team2: addForm.team2.value,
      percentage: addForm.percentage.value,
      state: addForm.state.value,
      result: addForm.result.value,
    })
      .then((response) => {
        alert('Added');
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="ui-add-data col-6">
      <div className="card">
        <h2>Add New</h2>
        <div className="form-elements">
          <form id="addData" onSubmit={handleAddSubmit}>
            <div className="ui-form-element">
              <label>Match</label>
              <input type="text" name="match" required />
            </div>
            <div className="ui-form-element">
              <label>League</label>
              <input type="text" name="league" required />
            </div>
            <div className="ui-form-element">
              <label>Team2</label>
              <input type="text" name="team2" required />
            </div>
            <div className="ui-form-element">
              <label>Team1</label>
              <input type="text" name="team1" required />
            </div>
            <div className="ui-form-element">
              <label>Percentage</label>
              <input type="number" name="percentage" />
            </div>
            <div className="ui-form-element">
              <label>State</label>
              <input type="text" name="state" required />
            </div>
            <div className="ui-form-element">
              <label>Result</label>
              <input type="text" name="result" required />
            </div>
            <div className="ui-form-fotter">
              <button className="btn btn-primary blue-btn">Add Data</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default AddData;
