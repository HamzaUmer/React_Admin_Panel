import "./progress.scss"
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar,buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css"
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";

const Progress = () => {
  const percentage = 77;
  return (
    <div className="progress">
      <div className="top">
        <h1 className="title">Total Revenue</h1>
        <MoreVertIcon fontSize="small"/>
      </div>
      <div className="bottom">
        <div className="progressBar">
              <CircularProgressbar value={77} text={`${percentage}%`} strokeWidth={5} styles={buildStyles({
                pathColor: `rgba(129,24,26, ${percentage / 100})`,
                textColor: '#81181a',
              })}/>
        </div>
        <p className="title">Total sales made today</p>
        <p className="amount">$770</p>
        <p className="desc">Payment will include in a week.</p>
        <div className="summary">
          <div className="item">
            <div className="itemTitle">Target</div>
            <div className="itemResult  positive">
              <KeyboardArrowUpOutlinedIcon fontSize="small"/>
              <div className="resultAmount">$79.7k</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last Week</div>
            <div className="itemResult negative">
              <KeyboardArrowDownIcon fontSize="small"/>
              <div className="resultAmount">$5.7k</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last Month</div>
            <div className="itemResult positive">
              <KeyboardArrowUpOutlinedIcon fontSize="small"/>
              <div className="resultAmount">$22.3k</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Progress