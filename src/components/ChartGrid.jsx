import React, {useContext} from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { reactMainContext } from '../App';


export const ChartGrid = () => {

    const { propertyWiseRecords, roomWiseRecords, countryWiseRecords, reviewsWiseRecords} = useContext(reactMainContext);
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
                    { dataKey: 'minimum_price', label: 'Minimum Price', propertyValueFormatter },
                    { dataKey: 'maximum_price', label: 'Maximum Price', propertyValueFormatter }
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
                    { dataKey: 'minimum_price', label: 'Minimum Price', roomValueFormatter },
                    { dataKey: 'maximum_price', label: 'Maximum Price', roomValueFormatter }
                  ]}
                  layout="vertical"
                  grid={{vertical: true}}
                  {...chartSetting}
                />
            </div>
          </div>
          <div className='box-border bg-slate-300 shadow-md'>
            <h3 className='font-bold pl-15 pt-10'>Property Type Wise No of Reviews</h3>
            <div  className="m-10">
                <BarChart
                  dataset={reviewsWiseRecords}
                  xAxis={[{ dataKey: '_id', scaleType: "band"}]}
                  series={[
                    { dataKey: 'no_of_reviews', label: 'Number of reviews' }
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