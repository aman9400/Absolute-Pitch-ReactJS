import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
} from "recharts";
const NewChart = () => {
  const [nordData, setNordData] = useState([]);
  useEffect(() => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
    myHeaders.append("Cookie", "PHPSESSID=3f94713d343f0a88ab41de4b9d30ee37");

    var urlencoded = new URLSearchParams();
    urlencoded.append("report-graph", "1");
    urlencoded.append("user_id", Cookies.get("userId"));
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: urlencoded,
      redirect: "follow",
    };

    fetch(
      "https://mylatinhome.com/absolute/appdata/webservice.php",
      requestOptions
    )
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
  for (let i = 0; i <= nordData.length; i++) {
    newData[i] = nordData[i];
  }
  console.log(newData, "new...");
  const data = [
    {
      time: "5",
      date: "2023-05-01",
    },
    {
      time: "7",
      date: "2023-05-02",
    },
    {
      time: "3",
      date: "2023-05-03",
    },
    {
      time: "5",
      date: "2023-05-04",
    },
    {
      time: "8",
      date: "2023-05-05",
    },
    {
      time: "6",
      date: "2023-05-06",
    },
    {
      time: "9",
      date: "2023-05-07",
    },
    {
      time: "4",
      date: "2023-05-08",
    },
    {
      time: "6",
      date: "2023-05-09",
    },
    {
      time: "3",
      date: "2023-05-10",
    },
    {
      time: "9",
      date: "2023-05-11",
    },
    {
      time: "2",
      date: "2023-05-12",
    },
  ];

  return (
    <div style={{ background: "#fff", borderRadius: "10px" }}>
     <h1>sorry</h1>
    </div>
  );
};

export default NewChart;
