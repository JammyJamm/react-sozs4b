const PlayerData  = ()=>{
    const shoot = () => {
        console.log("Senthmail")
      }
    return (
        <div className="PayerData">
            <button onClick={shoot}>BBL</button>
            <table>
                <thead>
                    <tr>
                        <th>Player Name</th>
                        <th>Position </th>
                        <th>Details </th>
                        <th>Score</th>
                        <th>Result</th> 
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            Maxwell
                        </td>
                        <td>2</td>
                        <td>All Rouder</td>
                        <td>28</td>
                        <td></td>   
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
export default PlayerData;