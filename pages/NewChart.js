import React ,{useState,useEffect}from 'react'
import {ResponsiveContainer,LineChart,Line,XAxis,YAxis,Tooltip,CartesianGrid,Legend} from "recharts"
const NewChart = () => {
    const data = [
        {
          name: 'Page A',
          uv: 400,
          pv: 240,
          amt: 240,
        },
        {
          name: 'Page B',
          uv: 400,
          pv: 138,
          amt: 210,
        },
        {
          name: 'Page C',
          uv: 200,
          pv: 980,
          amt: 220,
        },
        {
          name: 'Page D',
          uv: 270,
          pv: 398,
          amt: 200,
        },
        {
          name: 'Page E',
          uv: 180,
          pv: 480,
          amt: 211,
        },
        {
          name: 'Page F',
          uv: 230,
          pv: 380,
          amt: 250,
        },
        {
          name: 'Page G',
          uv: 340,
          pv: 430,
          amt: 210,
        },
      ];
      
  return (
    <div style={{background:'#fff'}}>
      <ResponsiveContainer width='79%' aspect={3}>
        <LineChart data={data} width={930} height={200} margin={{top:25,right:20,left:20,bottom:20}}>
        <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey='name' />
            <YAxis/>
            <Tooltip />
            <Legend />
            {/* <Line dataKey='amt' stroke='red' activeDot={{r:8}} /> */}
            <Line dataKey='pv' stroke='green' activeDot={{r:8}} />
            
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default NewChart