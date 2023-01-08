import db from '../FirbaseConfig';
import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  query,
  updateDoc,
} from 'firebase/firestore';
import { useEffect, useRef, useState } from 'react';
import React from 'react';
import Edit from '../logo.svg';
import Delete from '../logo.svg';
function MainPage() {
  const [detail, setDetail] = useState([]);
  const userData = async () => {
    const q = query(collection(db, 'cricket'));
    const querySnapshot = await getDocs(q);
    const data = querySnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    setDetail(data);
    console.log(data);
  };

  useEffect(() => {
    userData();
  }, []);
  // Send data from Form to DataBase
  const inputElement = useRef('');
  const getDataLine = async (e) => {
    e.preventDefault();
    console.log(e.target.dataset.value);
    const selectedLineItem = e.target.dataset.value;
    document.getElementById('selectedLine').value = selectedLineItem;

    // Get selected Value data
    const docRef = doc(db, 'cricket', selectedLineItem);
    const docSnap = await getDoc(docRef);
    console.log(docSnap.data());
    // Update selected line to form
    const updateForm = document.querySelector('#editDataItem');
    updateDoc(docRef, {
      match: (updateForm.match.value = docSnap.data().match),
      league: (updateForm.league.value = docSnap.data().league),
      team1: (updateForm.team1.value = docSnap.data().team1),
      team2: (updateForm.team2.value = docSnap.data().team2),
      percentage: (updateForm.percentage.value = docSnap.data().percentage),
      state: (updateForm.state.value = docSnap.data().state),
      result: (updateForm.result.value = docSnap.data().result),
      selectedLine: (updateForm.selectedLine.value =
        docSnap.data().selectedLine),
    })
      .then((response) => {
        alert('Selected line Updated');
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  // Delete Data line
  const deleteDataLine = async (e) => {
    e.preventDefault();
    // alert("Delete working");
    console.log(e.target.dataset.value);
    const selectedLineItem = e.target.dataset.value;
    document.getElementById('selectedLine').value = selectedLineItem;
    // Get selected Value data
    const docRef = doc(db, 'cricket', selectedLineItem);
    const docSnap = await getDoc(docRef);
    console.log(docSnap.data());
    // Update selected line to form
    const updateForm = document.querySelector('#editDataItem');
    deleteDoc(docRef)
      .then((response) => {
        alert('Selected line Deleted');
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div className="ui-mainpage card">
      <div className="ui-table ">
        <table id="CricketData">
          <thead>
            <tr>
              <th className="match">Match</th>
              <th className="League">League</th>
              <th className="team">Team 2</th>
              {/* <th className="">Team 1</th> */}
              <th className="state">State</th>
              <th className="percentage">Last 5 Matchs</th>
              <th className="result">Result(Team2)</th>
              <th className=""></th>
            </tr>
          </thead>
          <tbody>
            {detail.map((val, id) => {
              return (
                <tr key={id}>
                  <td className="match">{val.match}</td>
                  <td className="league">{val.league}</td>
                  <td className="team">{val.team2}</td>
                  {/* <td className="">{val.team1}</td> */}
                  <td className="state">
                    <label className={val.state}>{val.state}</label>
                  </td>
                  <td className="percentage">
                    {val.percentage.split(',').map((value, i) => {
                      return (
                        <label className={value} key={i}>
                          {value}
                        </label>
                      );
                    })}
                  </td>
                  <td className="result">
                    <label className={val.result}>{val.result}</label>
                  </td>
                  <td className="icon" id="selectedLine" value={val.id}>
                    <img
                      src={Edit}
                      alt="edit icon"
                      data-value={val.id}
                      onClick={getDataLine}
                    />
                    <input
                      type="hidden"
                      value={val.id}
                      ref={inputElement}
                      readOnly
                    />
                    <img
                      src={Delete}
                      alt="delete icon"
                      data-value={val.id}
                      onClick={deleteDataLine}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default MainPage;
