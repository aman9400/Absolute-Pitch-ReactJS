import { useState } from 'react';
import Calendar from 'react-calendar';
import { Grid, makeStyles,} from "@material-ui/core";
import 'react-calendar/dist/Calendar.css'
const useStyles = makeStyles({
   cal:{},
   width:'100%',
   height:'100% !important',
  });
const Calender = () => {
    const classes = useStyles();
    const [date, setDate] = useState(new Date());
  return (
    <div style={{background:'grey',color:'black',borderRadius:'10px',height:'100%',width:'100%'}}>
    
    <div style={{height:'100%',width:'100%'}}>
      <Calendar onChange={setDate} value={date} height="900px" selectRange={true} showFixedNumberOfWeeks={true} defaultView="month"/ >
    </div>
    {date.length > 0 ? (
    <p>
      <span>Start:</span>{' '} {date[0].toDateString()}
      &nbsp; to &nbsp;
      <span>End:</span> {date[1].toDateString()}
    </p>
         ) : (
    <p>
      <span>Default selected date:</span>{' '} {date.toDateString()}
    </p>
         )}
  </div>
  )
}

export default Calender
