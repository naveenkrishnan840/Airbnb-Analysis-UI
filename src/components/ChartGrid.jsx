import React, {useContext} from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import {axisClasses} from "@mui/x-charts/ChartsAxis"
import { reactMainContext } from '../App';
import { alignProperty } from '@mui/material/styles/cssUtils';



export const ChartGrid = () => {

    const countryWise = [
        {
          "_id": "Brazil",
          "avgPrice": 343
        },
        {
          "_id": "Portugal",
          "avgPrice": 67
        },
        {
          "_id": "Spain",
          "avgPrice": 89
        },
        {
          "_id": "Australia",
          "avgPrice": 166
        },
        {
          "_id": "United States",
          "avgPrice": 137
        },
        {
          "_id": "Canada",
          "avgPrice": 85
        },
        {
          "_id": "Hong Kong",
          "avgPrice": 604
        },
        {
          "_id": "Turkey",
          "avgPrice": 234
        },
        {
          "_id": "China",
          "avgPrice": 448
        }
      ];

    const { propertyWiseRecords, roomWiseRecords, countryWiseRecords} = useContext(reactMainContext);
    const chartSetting = {
      width: 1000,
      height: 500,
    };
      const countryValueFormatter = (value) => `₹ ${value}`;
      const propertyValueFormatter = (value) => `₹ ${value}`;
      const roomValueFormatter = (value) => `₹ ${value}`;
    return (
      <>
          <div className='box-border bg-slate-300 shadow-md'>
            <h3 className='font-bold pl-15 pt-10'>Country Wise Avergae Price</h3>
            <div  className="m-10">
                <BarChart
                  dataset={countryWiseRecords}
                  xAxis={[{ dataKey: '_id', scaleType: "band"}]}
                  series={[{ dataKey: 'avgPrice', label: 'Average Price', countryValueFormatter }]}
                  layout="vertical"
                  grid={{vertical: true}}
                  {...chartSetting}
                />
            </div>
          </div>
          <div className='box-border bg-slate-300 shadow-md'>
            <h3 className='font-bold pl-15 pt-10'>Property Type Wise </h3>
            <div  className="m-10">
                <BarChart
                  dataset={propertyWiseRecords}
                  xAxis={[{ dataKey: '_id', scaleType: "band"}]}
                  series={[
                    { dataKey: 'minimum_night', label: 'Minimum Night', propertyValueFormatter },
                    { dataKey: 'maximum_night', label: 'Maximum Night', propertyValueFormatter }
                  ]}
                  layout="vertical"
                  grid={{vertical: true}}
                  {...chartSetting}
                />
            </div>
          </div>
          <div className='box-border bg-slate-300 shadow-md'>
            <h3 className='font-bold pl-15 pt-10'>Room Type Wise </h3>
            <div  className="m-10">
                <BarChart
                  dataset={roomWiseRecords}
                  xAxis={[{ dataKey: '_id', scaleType: "band"}]}
                  series={[
                    { dataKey: 'minimum_night', label: 'Minimum Night', roomValueFormatter },
                    { dataKey: 'maximum_night', label: 'Maximum Night', roomValueFormatter }
                  ]}
                  layout="vertical"
                  grid={{vertical: true}}
                  {...chartSetting}
                />
            </div>
          </div>
      </>
    )
}