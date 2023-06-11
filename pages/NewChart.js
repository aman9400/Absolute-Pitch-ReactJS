import React ,{useState,useEffect}from 'react'
import Cookies from "js-cookie";

import {ResponsiveContainer,LineChart,Line,XAxis,YAxis,Tooltip,CartesianGrid,Legend} from "recharts"
const NewChart = () => {

  const [nordData, setNordData] = useState([]);
  useEffect(() => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
    myHeaders.append("Cookie", "PHPSESSID=6fdb4183dbaa64275807f0849965500a");
    
    var urlencoded = new URLSearchParams();
    urlencoded.append("report-graph", "1");
    urlencoded.append("user_id", Cookies.get("userId"));
    urlencoded.append("start_date", "2023-05-01");
    urlencoded.append("end_date", "2023-05-30");
    
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: urlencoded,
      redirect: 'follow'
    };
    
    fetch("https://mylatinhome.com/absolute/appdata/webservice.php", requestOptions)
  .then((response) => response.json())
  .then((responseJson) => {
    if (responseJson.success === "0") {
      alert("report data");
    } else {
      setNordData(responseJson.data);
     
    }
  });
}, [nordData]);
let newData = {};
for(let i=0; i <= nordData.length; i++)
{
newData[i] = nordData[i]
}
console.log(newData,'new...')
    const data = [
        {
          time: '5',
          date:'2023-05-01'
        },
        {
          time: '7',
          date:'2023-05-02'
        },
        {
          time: '3',
          date:'2023-05-03'
        },
        {
          time: '5',
          date:'2023-05-04'
        },
        {
          time: '8',
          date:'2023-05-05'
        },
        {
          time: '6',
          date:'2023-05-06'
        },
        {
          time: '9',
          date:'2023-05-07'
        },
        {
          time: '4',
          date:'2023-05-08'
        },
        {
          time: '6',
          date:'2023-05-09'
        },
        {
          time: '3',
          date:'2023-05-10'
        },
        {
          time: '9',
          date:'2023-05-11'
        },
        {
          time: '2',
          date:'2023-05-12'
        },
      ];
     
  return (
    <div style={{background:'#fff',borderRadius:'10px'}}>
      <ResponsiveContainer width='95%' aspect={3}>
        <LineChart data={data} width={930} height={200} margin={{top:25,right:20,left:20,bottom:20}}>
        <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey='date' />
            <YAxis dataKey='time'/>
            <Tooltip/>
            <Legend />
            {/* <Line dataKey='amt' stroke='red' activeDot={{r:8}} /> */}
            <Line dataKey='time' stroke='green' activeDot={{r:8}} />
            
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default NewChart