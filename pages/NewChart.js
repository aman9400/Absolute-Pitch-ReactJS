import React ,{useState,useEffect}from 'react'
import Tooltips from '@mui/material/Tooltip';
import {ResponsiveContainer,LineChart,Line,XAxis,YAxis,Tooltip,CartesianGrid,Legend} from "recharts"
const NewChart = () => {

  const [nordData, setNordData] = useState([]);
  useEffect(() => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
    myHeaders.append("Cookie", "PHPSESSID=6fdb4183dbaa64275807f0849965500a");
    
    var urlencoded = new URLSearchParams();
    urlencoded.append("report-graph", "1");
    urlencoded.append("user_id", "10");
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
          time: '1',
          date:'2'
        },
        {
          time: '2',
          date:'5'
        },
        {
          time: '3',
          date:'4'
        },
        {
          time: '4',
          date:'4'
        },
        {
          time: '5',
          date:'4'
        },
        {
          time: '6',
          date:'9'
        },
        {
          time: '7',
          date:'5'
        },
        {
          time: '8',
          date:'6'
        },
        {
          time: '9',
          date:'9'
        },
        {
          time: '10',
          date:'10'
        },
        {
          time: '11',
          date:'6'
        },
        {
          time: '12',
          date:'5'
        },
      ];
      const options = {
        title: {
          display: true,
          text: "Number of downloads of our app"
        },
        scales: {
          yAxes: [
            {
              ticks: {
                min: 0,
                max: 20,
                stepSize: 3
              }
            }
          ]
        }
      };
  return (
    <div style={{background:'#fff',borderRadius:'10px'}}>
      <ResponsiveContainer width='95%' aspect={3}>
        <LineChart data={nordData} width={930} height={200} margin={{top:25,right:20,left:20,bottom:20}}>
        <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey='date' />
            <YAxis dataKey='time'/>
            <Tooltip dataKey='time'/>
            <Legend />
            {/* <Line dataKey='amt' stroke='red' activeDot={{r:8}} /> */}
            <Line dataKey='date' stroke='green' activeDot={{r:8}} options={options}/>
            
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default NewChart