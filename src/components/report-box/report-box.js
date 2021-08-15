import React from 'react';
import { BarChart, Bar } from 'recharts';
import yes from '../../assets/icons/yes.png';
import no from '../../assets/icons/no.png';

const data = [
  {
    name: 'Page A',
    uv: 4000,
  },
  {
    name: 'Page B',
    uv: 3000,
  },
  {
    name: 'Page C',
    uv: 2000,
  },
  {
    name: 'Page D',
    uv: 2780,
  },
  {
    name: 'Page E',
    uv: 1890,
  },
  {
    name: 'Page F',
    uv: 2390,
  },
  {
    name: 'Page G',
    uv: 3490,
  },
  {
    name: 'Page F',
    uv: 2390,
  },
  {
    name: 'Page G',
    uv: 3490,
  },
  {
    name: 'Page F',
    uv: 2390,
  },
  {
    name: 'Page G',
    uv: 3490,
  },
  {
    name: 'Page F',
    uv: 2390,
  },
  {
    name: 'Page G',
    uv: 3490,
  },
];

const typeDictionary = {
  'yes': "Positive",
  'no': "Negative"
}

const srcProvider = (type) => {
  if (type==='yes') {
    return yes
  }
  else {
    return no
  }
}


const ReportBox = ({type,}) => {
  return(
    <div className={`report-box ${type==='no' ? "negative":""}`}>
      <div>
        <div className="icon-tray">
          <div className={`icon-shadow purple large`}>
            <img className="icon-img large" src={srcProvider(type)} alt={type}/>
          </div>
        </div>
        <div>
          <p className="text-medium">Statistics</p>
          <p className="text-large">{typeDictionary[type]}</p>
        </div>
      </div>
      <div>

          <BarChart width={300} height={100} data={data}>
            <Bar radius={10} dataKey="uv" fill="white" />
          </BarChart>
      </div>
    </div>
  )
}
export default ReportBox;