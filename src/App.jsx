import { useEffect, useState } from 'react';
import './crud.css';
import { read, create, edit, remove } from './Functions/localStorage';
import Create from './Components/Create';
import List from './Components/List';
import Edit from './Components/Edit';
import { useReducer } from 'react';
import sortReducer from './Components/sortReducer';
import Statistic from './Components/Statistic';

function App() {
  const [lastUpdate, setLastUpdate] = useState(Date.now());

  const [kolts, setKolts] = useState(null);
  const [modalData, setModalData] = useState(null);

  const [createData, setCreateData] = useState(null);
  const [deleteData, setDeletaData] = useState(null);
  const [editData, setEditData] = useState(null);

  const [selectDate, setselectDate] = useState('Last Used');
  const [selectRide, setselectRide] = useState('Total Ride');
  console.log('selectDate', selectDate);

  const [sort, dispachSort] = useReducer(sortReducer, []);
  console.log('sort', sort);

  const sortByKm = (e) => {
    const sortOrder = e.target.value;
    setselectRide(sortOrder);
    if (sortOrder === 'asc') {
      const action = {
        type: 'sort_km_asc',
        payload: kolts,
      };
      dispachSort(action);
    } else if (sortOrder === 'desc') {
      const action = {
        type: 'sort_km_desc',
        payload: kolts,
      };
      dispachSort(action);
    } else {
      const action = {
        type: 'default',
        payload: kolts,
      };
      dispachSort(action);
    }
  };

  const sortByDate = (e) => {
    const sortOrder = e.target.value;
    setselectDate(sortOrder);
    if (sortOrder === 'asc') {
      const action = {
        type: 'sort_date_asc',
        payload: kolts,
      };
      dispachSort(action);
    } else if (sortOrder === 'desc') {
      const action = {
        type: 'sort_date_desc',
        payload: kolts,
      };
      dispachSort(action);
    } else {
      const action = {
        type: 'default',
        payload: kolts,
      };
      dispachSort(action);
    }
  };

  // Read

  useEffect(() => {
    setKolts(read());
  }, [lastUpdate]);

  // Create

  useEffect(() => {
    if (null === createData) {
      return;
    }
    create(createData);
    setLastUpdate(Date.now());
  }, [createData]);

  // Delete

  useEffect(() => {
    if (null === deleteData) {
      return;
    }
    remove(deleteData);
    setLastUpdate(Date.now());
  }, [deleteData]);

  // Edit

  useEffect(() => {
    if (null === editData) {
      return;
    }
    edit(editData);
    setLastUpdate(Date.now());
  }, [editData]);

  return (
    <>
      <div className='container'>
        <Create setCreateData={setCreateData} kolts={kolts} />
        <Statistic kolts={kolts} />
        {/* <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
          <button onClick={sortByKm}>SORT by km.</button>
          <button onClick={refresh}>REFRESH</button>
          <button onClick={sortByDate}>SORT by date</button>
        </div> */}
        <List
          kolts={kolts}
          setDeleteData={setDeletaData}
          setModalData={setModalData}
          selectDate={selectDate}
          selectRide={selectRide}
          sortByDate={sortByDate}
          sortByKm={sortByKm}
        />
      </div>
      <Edit
        setEditData={setEditData}
        modalData={modalData}
        setModalData={setModalData}
        kolts={kolts}
      />
      <div
        style={{
          textAlign: 'center',
          marginBottom: '20px',
        }}
      >
        <h2 style={{ margin: '10px' }}>
          Sorting kolts by total Ride and last used date
        </h2>
        {sort.map((kolt) => (
          <div key={kolt.id}>
            Kolt <b>id_{kolt.id}</b> <i>{kolt.regCode}</i>, total ride:{' '}
            <b>{kolt.totalRide}</b> km., last used: <b>{kolt.lastUsed}</b>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
