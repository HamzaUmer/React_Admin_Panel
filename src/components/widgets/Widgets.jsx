import "./widgets.scss"
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";

const Widgets = ({type}) => {
    let data;

    const amount = 700;
    const percentage = 47;

    switch(type) {
        case "user": 
        data = {
            title : "USERS",
            isMoney: false,
            link: "See all users",
            icon : <PersonOutlineOutlinedIcon className="icon" style={{color: "#c49102", backgroundColor: " #FBE106"}}/>
        };
        break;
        case "order": 
        data = {
            title : "ORDERS",
            isMoney: false,
            link: "View all users",
            icon : <ShoppingCartOutlinedIcon className="icon" style={{color: "#4b6043", backgroundColor: "#95bb72"}}/>
        };
        break;
        case "earning": 
        data = {
            title : "EARNINGS",
            isMoney: true,
            link: "View Earning",
            icon : <MonetizationOnOutlinedIcon className="icon" style={{color: "#021b22", backgroundColor: "#008ab2"}}/>
        };
        break;
        case "balance": 
        data = {
            title : "BALANCE",
            isMoney: true,
            link: "See balance record",
            icon : <AccountBalanceWalletOutlinedIcon className="icon" style={{color: "#b65c28", backgroundColor: "#ff3f9a9a"}}/>
        };
        break;
        default :
        break;
    }
  return (
    <div className="widget">
        <div className="left">
            <span className="title">{data.title}</span>
            <span className="counter">{data.isMoney && "$"} {amount}</span>
            <span className="link">{data.link}</span>
        </div>
        <div className="right">
            <div className="per positive">
               <KeyboardArrowUpOutlinedIcon/>
               {percentage} %
            </div>
               {data.icon}
        </div>
    </div>
  )
}

export default Widgets