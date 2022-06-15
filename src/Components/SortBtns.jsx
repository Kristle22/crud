import { useState, useReducer } from 'react';
import sortReducer from './sortReducer';

function SortBtns({ kolts, selectDate, selectRide, sortByDate, sortByKm }) {
  // const [selectDate, setselectDate] = useState('Last Used');
  // const [selectRide, setselectRide] = useState('Total Ride');
  // console.log('selectDate', selectDate);

  // const [sort, dispachSort] = useReducer(sortReducer, []);
  // console.log('sort', sort);
  // const sortByKm = (e) => {
  //   const sortOrder = e.target.value;
  //   setselectRide(sortOrder);
  //   if (sortOrder === 'asc') {
  //     const action = {
  //       type: 'sort_km_asc',
  //       payload: kolts,
  //     };
  //     dispachSort(action);
  //   } else {
  //     const action = {
  //       type: 'default',
  //       payload: kolts,
  //     };
  //     dispachSort(action);
  //   }
  // };

  // const sortByDate = (e) => {
  //   const sortOrder = e.target.value;
  //   setselectDate(sortOrder);
  //   if (sortOrder === 'asc') {
  //     const action = {
  //       type: 'sort_date_asc',
  //       payload: kolts,
  //     };
  //     dispachSort(action);
  //   } else {
  //     const action = {
  //       type: 'default',
  //       payload: kolts,
  //     };
  //     dispachSort(action);
  //   }
  // };

  // const handleSelectDate = (e) => {
  //   const sortOrder = e.target.value;
  //   const copyKolts = [...kolts];
  //   setselectDate(sortOrder);

  //   copyKolts.sort((x, y) => {
  //     let a = new Date(x.lastUsed);
  //     let b = new Date(y.lastUsed);
  //     return sortOrder === 'asc'
  //       ? a.lastUsed - b.lastUsed
  //       : b.lastUsed - a.lastUsed;
  //   });
  //   setselectDate(copyKolts);
  // };

  // const handleSelectRide = (e) => {
  //   const sortOrder = e.target.value;
  //   const copyKolts = [...kolts];
  //   setselectRide(sortOrder);

  //   copyKolts.sort((a, b) => {
  //     return sortOrder === 'asc'
  //       ? a.totalRide - b.totalRide
  //       : b.totalRide - a.totalRide;
  //   });
  //   setselectRide(copyKolts);
  // };

  return (
    <>
      <select className='sorting' value={selectDate} onChange={sortByDate}>
        <option default value='last_used' selected>
          Last Used
        </option>
        <option value='asc'>sort 0 - 9</option>
        <option value='desc'>sort 9-0</option>
        <option value='def'>default</option>
      </select>
      <select className='sorting' value={selectRide} onChange={sortByKm}>
        <option default value='total_ride' selected>
          Total Ride
        </option>
        <option value='asc'>sort 0 - 9</option>
        <option value='desc'>sort 9-0</option>
        <option value='def'>default</option>
      </select>
    </>
  );
}

export default SortBtns;
