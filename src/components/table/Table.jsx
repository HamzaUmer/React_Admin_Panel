import "./table.scss"
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const List = () => {
    const rows = [
        {
          id: 1143155,
          product: "Macbook",
          img: "https://m.media-amazon.com/images/I/61aUBxqc5PL._AC_SL1500_.jpg",
          customer: "Mutayyab Ali",
          date: "8 january",
          amount:1200,
          method: "Cash on Delivery",
          status: "Approved",
        },
        {
          id: 2235235,
          product: "Xbox",
          img: "https://assets.xboxservices.com/assets/d2/d4/d2d49e15-65ea-4e87-9d35-66123e183423.jpg?n=Cyberpunk-2077_Feature-0_XSX_767x628.jpg",
          customer: "Muhammad Nauman",
          date: "22 November",
          amount: 727,
          method: "Online Payment",
          status: "Pending",
        },
        {
          id: 2342353,
          product: "Gaming PC",
          img: "https://vrlatech.com/wp-content/uploads/2021/12/PhoenixMain45-Edit-Edit.jpg",
          customer: "Mirza Hamza Umar",
          date: "7 November",
          amount: 2000,
          method: "Cash on Delivery",
          status: "Pending",
        },
        {
          id: 2357741,
          product: "Iphone 14",
          img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-pro-model-unselect-gallery-2-202209_GEO_US?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1660753617560",
          customer: "Umama Rateeb",
          date: "22 April",
          amount: 920,
          method: "Online",
          status: "Approved",
        },
        {
          id: 2342355,
          product: "Nike Shoes",
          img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4f37fca8-6bce-43e7-ad07-f57ae3c13142/air-force-1-07-mens-shoes-5QFp5Z.png",
          customer: "Mirza Hamza Umar",
          date: "21 Novermber",
          amount: 700,
          method: "Online",
          status: "Pending",
        },
      ];
  return (
    <TableContainer component={Paper} className="table">
    <Table sx={{ minWidth: 650 }} aria-label="simple table" className="tabless">
      <TableHead>
        <TableRow >
          <TableCell className="tableCell">Tracking ID</TableCell>
          <TableCell className="tableCell">Product</TableCell>
          <TableCell className="tableCell">Customer</TableCell>
          <TableCell className="tableCell">Date</TableCell>
          <TableCell className="tableCell">Amount</TableCell>
          <TableCell className="tableCell">Payment Method</TableCell>
          <TableCell className="tableCell">Status</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <TableRow key={row.id}>
            <TableCell className="tableCell">{row.id}</TableCell>
            <TableCell className="tableCell">
              <div className="cellWrapper">
                <img src={row.img} alt="" className="image" />
                {row.product}
              </div>
            </TableCell>
            <TableCell className="tableCell">{row.customer}</TableCell>
            <TableCell className="tableCell">{row.date}</TableCell>
            <TableCell className="tableCell">{row.amount}</TableCell>
            <TableCell className="tableCell">{row.method}</TableCell>
            <TableCell className="tableCell">
              <span className={`status ${row.status}`}>{row.status}</span>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  )
}

export default List