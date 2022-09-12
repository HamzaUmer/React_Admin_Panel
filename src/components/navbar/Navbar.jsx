import "./navbar.scss"
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import { useContext } from "react";
import { NightModeContext } from "../../context/nightModeContext";

const Navbar = () => {
  const {dispatch} = useContext(NightModeContext);
  return (
   <div className="navbar">
    <div className="wrapper">
      <div className="search">
        <input type="text" placeholder="Search.." />
        <SearchOutlinedIcon/>
      </div>
      <div className="items">
        <div className="item">
          <LanguageOutlinedIcon className="icon"/>
          English
        </div>
        <div className="item">
          <DarkModeOutlinedIcon className="icon" onClick={() => dispatch({type: "TOGGLE"})}/>
        </div>
        <div className="item">
          <FullscreenExitOutlinedIcon className="icon"/>
        </div>
        <div className="item">
          <NotificationsNoneOutlinedIcon className="icon"/>
          <div className="counter">7</div>
        </div>
        <div className="item">
          <ChatBubbleOutlineOutlinedIcon className="icon"/>
          <div className="counter">7</div>
        </div>
        <div className="item">
          <ListOutlinedIcon className="icon"/>
        </div>
        <div className="item">
          <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt="" className="person"/>
        </div>
      </div>
    </div>
   </div>
  )
}

export default Navbar