
import Charts from "../../components/charts/Charts"
import Navbar from "../../components/navbar/Navbar"
import Progress from "../../components/progress/Progress"
import Sidebar from "../../components/sidebar/Sidebar"
import Table from "../../components/table/Table"
import Widgets from "../../components/widgets/Widgets"
import "./home.scss"

const Home = () => {
  return (
    <div className="home">
      <Sidebar/>
      <div className="homeContainer">
        <Navbar/>
        <div className="widgets">
          <Widgets type="user"/>
          <Widgets type="order"/>
          <Widgets type="earning"/>
          <Widgets type="balance"/>
        </div>
        <div className="charts">
          <Progress/>
          <Charts aspect={3 / 1} title="Last 6 Months (Revenue)"/>
        </div>
        <div className="listContainer">
          <div className="listTitle">Lastest Transactions</div>
           <Table/>
        </div>
      </div>
    </div>
  )
}

export default Home