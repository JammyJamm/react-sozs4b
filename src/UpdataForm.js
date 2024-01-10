import { doc, updateDoc } from 'firebase/firestore';
import db from './FirbaseConfig';
import React from 'react';
function UpdataForm() {
  // Form upodated - Form to Database
  const handleUpdateFormSubmit = (e) => {
    e.preventDefault();
    const getSelectedLineValue = document.getElementById('selectedLine').value;
    if (getSelectedLineValue != undefined) {
      // const examcollref = doc(db, "cricket", "4Rq2HGQU2mXq787L3Gfd");
      const examcollref = doc(db, 'cricket', getSelectedLineValue);
      const updateForm = document.querySelector('#editDataItem');
      updateDoc(examcollref, {
        match: updateForm.match.value,
        league: updateForm.league.value,
        team1: updateForm.team1.value,
        team2: updateForm.team2.value,
        percentage: updateForm.percentage.value,
        state: updateForm.state.value,
        result: updateForm.result.value,
        selectedLine: updateForm.selectedLine.value,
      })
        .then((response) => {
          alert('updated from form');
        })
        .catch((error) => {
          console.log(error.message);
        });
    } else {
      alert('Please select some value line item');
    }
  };
  // Form Updated - DataBase to updated form
  // Update form data

  return (
    <div className="ui-update-form  form-elements col-6">
      <div className="card">
        <h2>Update Form</h2>
        <form id="editDataItem" onSubmit={handleUpdateFormSubmit} value="jammy">
          <div className="ui-form-element">
            <label>Match</label>
            <input type="text" name="match" />
          </div>
          <div className="ui-form-element">
            <label>League</label>
            <input type="text" name="league" />
          </div>
          <div className="ui-form-element">
            <label>Team2</label>
            <input type="text" name="team2" />
          </div>
          <div className="ui-form-element">
            <label>Team1</label>
            <input type="text" name="team1" />
          </div>
          <div className="ui-form-element">
            <label>Percentage</label>
            <input type="text" name="percentage" />
          </div>
          <div className="ui-form-element">
            <label>State</label>
            <input type="text" name="state" />
          </div>
          <div className="ui-form-element">
            <label>Result</label>
            <input type="text" name="result" />
          </div>
          <div className="ui-form-element">
            <input type="hidden" id="selectedLine" value="" />
          </div>
          <div className="ui-form-fotter">
            <button className="btn btn-primary blue-btn">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default UpdataForm;
