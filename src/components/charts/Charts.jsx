import "./charts.scss"
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  {name: "July", Total: 777},
  {name: "August", Total: 1300},
  {name: "September", Total: 1344},
  {name: "October", Total: 1500},
  {name: "November", Total: 2500},
  {name: "December", Total: 1200},
];

const Charts = ({aspect,title}) => {
  return (
    <div className="chart">
      <div className="title">{title}</div>
      <ResponsiveContainer width="100%" aspect={aspect}>
      <AreaChart width={730} height={250} data={data}
  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
  <defs>
    <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#71517c" stopOpacity={1} />
      <stop offset="95%" stopColor="#71517c" stopOpacity={0.4} />
    </linearGradient>
  </defs>
  <XAxis dataKey="name" stroke="#71517c"/>
  <CartesianGrid strokeDasharray="3 3" className="chartGrid"/>
  <Tooltip />
  <Area type="monotone" dataKey="Total" className="area" fillOpacity={1} fill="url(#total)" />
</AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Charts