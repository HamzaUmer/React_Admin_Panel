import "./single.scss"
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import Charts from '../../components/charts/Charts'
import List from "../../components/table/Table"

const Single = () => {
  return (
   <div className="single">
    <Sidebar/>
    <div className="singleContainer">
      <Navbar/>
      <div className="top">
        <div className="left">
          <div className="editButton">Edit</div>
          <h1 className="title">User Information</h1>
          <div className="item">
            <img src="https://akns-images.eonline.com/eol_images/Entire_Site/2019414/rs_600x600-190514063109-600-George-Clooney-Batman-LT-051419-GettyImages-607408286.jpg?fit=around%7C600:600&output-quality=90&crop=600:600;center,top" alt="" className="itemImg" />
            <div className="details">
              <h1 className="itemTitle">Bruce Wayne</h1>
              <div className="detailItem">
                <span className="itemKey">Email:</span>
                <span className="itemValue">brucewayne@gmail.com</span>
              </div>
              <div className="detailItem">
                <span className="itemKey">Phone:</span>
                <span className="itemValue">+121 222 777</span>
              </div>
              <div className="detailItem">
                <span className="itemKey">Address:</span>
                <span className="itemValue">Gotham St.322 Garden Yd. NY </span>
              </div>
              <div className="detailItem">
                <span className="itemKey">Country:</span>
                <span className="itemValue">America</span>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <Charts aspect={3 / 1} title = "User spending (Last 6 Months)"/>
        </div>
      </div>
      <div className="bottom">
      <h1 className="title">Last Transactions</h1>
        <List/>
      </div>
    </div>
   </div>
  )
}

export default Single