import React ,{useState,useEffect}from 'react'
import {ResponsiveContainer,LineChart,Line,XAxis,YAxis,Tooltip,CartesianGrid,Legend} from "recharts"
const NewChart = () => {
    const data = [
        {
          time: '1',
          date:'1'
        },
        {
          time: '2',
          date:'5'
        },
        {
          time: '3',
          date:'2'
        },
        {
          time: '4',
          date:'7'
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
      <ResponsiveContainer width='79%' aspect={3}>
        <LineChart data={data} width={930} height={200} margin={{top:25,right:20,left:20,bottom:20}}>
        <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey='time' />
            <YAxis />
            <Tooltip style={{width:'100px !important'}}/>
            <Legend />
            {/* <Line dataKey='amt' stroke='red' activeDot={{r:8}} /> */}
            <Line dataKey='date' stroke='green' activeDot={{r:8}} options={options}/>
            
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default NewChart