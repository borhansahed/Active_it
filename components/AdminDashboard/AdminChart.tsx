
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import style from '../../styles/chart.module.css'

const data = [
    {
      name: 'January',
      order:220,
     Total:14400,
    },
    {
        name: 'February',
        order:500,
       Total:10000,
    },
    {
        name: 'March',
        order:300,
       Total:30000,
    },
    {
        name: 'April',
        order:400,
       Total:40000,
    },
    {
        name: 'May',
        order:120,
       Total:15000,
    },
    {
        name: 'June',
        order:300,
       Total:30000,
    },
    {
        name: 'July',
        order:500,
       Total:20000,
    },
  ];
const AdminChart = () => {
    return (
        <div className='mt-8'>
            <h1 className='text-xl ml-2'>Last 7 months (Revenue)</h1>
           <AreaChart className='mt-3 ml-20'  width={1300} height={450} data={data}
  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
  <defs>
    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
    </linearGradient>
    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
    </linearGradient>
  </defs>
  <XAxis dataKey="name" stroke='gray'/>
  
  <CartesianGrid strokeDasharray="3 3" />
  <Tooltip />
  <Area type="monotone" dataKey="order" stroke="gray" fillOpacity={1} fill="gray" />
  <Area type="monotone" dataKey="Total" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
</AreaChart>
        </div>
    );
};

export default AdminChart;