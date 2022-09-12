import "./sidebar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import StoreMallDirectoryIcon from '@mui/icons-material/StoreMallDirectory';
import WalletOutlinedIcon from '@mui/icons-material/WalletOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import QueryStatsOutlinedIcon from '@mui/icons-material/QueryStatsOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import MonitorHeartOutlinedIcon from '@mui/icons-material/MonitorHeartOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { Link } from "react-router-dom";
import { NightModeContext } from "../../context/nightModeContext";
import { useContext } from "react";

const Sidebar = () => {
    const {dispatch} = useContext(NightModeContext);
  return (
    <div className="sidebar">
        <div className="top">
            <Link to="/" style={{textDecoration: "none"}}>
            <span className="logo">MHU Admin Panel</span>
            </Link>
        </div>
        <hr />
        <div className="center">
            <ul>
                <p className="title">MAIN</p>
                <li>
                    <DashboardIcon className="icon"/>
                    <span>Dashboard</span>
                </li>
                <p className="title">LISTS</p>
                <Link to="/users" style={{textDecoration: "none"}}>
                <li>
                    <AccountCircleIcon className="icon"/>
                    <span>Users</span>
                </li>
                </Link>
                <Link to="/products" style={{textDecoration: "none"}}>
                <li>
                    <StoreMallDirectoryIcon className="icon"/>
                    <span>Products</span>
                </li>
                </Link>
                <li>
                    <WalletOutlinedIcon className="icon"/>
                    <span>Orders</span>
                </li>
                <li>
                    <LocalShippingOutlinedIcon className="icon"/>
                    <span>Delivery</span>
                </li>
                <p className="title">FUNCTIONS</p>
                <li>
                    <QueryStatsOutlinedIcon className="icon"/>
                    <span>Stats</span>
                </li>
                <li>
                    <NotificationsActiveOutlinedIcon className="icon"/>
                    <span>Notifications</span>
                </li>
                <p className="title">SERVICE</p>
                <li>
                    <MonitorHeartOutlinedIcon className="icon"/>
                    <span>System Health</span>
                </li>
                <li>
                    <PsychologyOutlinedIcon className="icon"/>
                    <span>Logs</span>
                </li>
                <li>
                    <SettingsOutlinedIcon className="icon"/>
                    <span>Settings</span>
                </li>
                <p className="title">USER</p>
                <li>
                    <AccountBoxOutlinedIcon className="icon"/>
                    <span>Profile</span>
                </li>
                <li>
                    <LogoutOutlinedIcon className="icon"/>
                    <span>Logout</span>
                </li>
            </ul>
        </div>
        <div className="bottom">
            <div className="colorOption" onClick={()=> dispatch({type: "SAND"})}></div>
            <div className="colorOption" onClick={()=> dispatch({type: "NIGHT"})}></div>
        </div>
    </div>
  )
}

export default Sidebar