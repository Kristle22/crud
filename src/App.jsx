import { useEffect, useState } from 'react';
import './crud.css';
import { read, create, edit, remove } from './Functions/localStorage';
import Create from './Components/Create';
import List from './Components/List';
import Edit from './Components/Edit';
import { useReducer } from 'react';
import sortReducer from './Components/sortReducer';

function App() {
  const [lastUpdate, setLastUpdate] = useState(Date.now());

  const [kolts, setKolts] = useState(null);
  const [modalData, setModalData] = useState(null);

  const [createData, setCreateData] = useState(null);
  const [deleteData, setDeletaData] = useState(null);
  const [editData, setEditData] = useState(null);

  const [sort, dispachSort] = useReducer(sortReducer, []);

  const sortByKm = () => {
    const action = {
      type: 'sort_km',
      payload: kolts,
    };
    dispachSort(action);
  };

  const refresh = () => {
    const action = {
      type: 'refresh',
      payload: kolts,
    };
    dispachSort(action);
  };

  const sortByDate = () => {
    const action = {
      type: 'sort_date',
      payload: kolts,
    };
    dispachSort(action);
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
        <Create setCreateData={setCreateData} />
        <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
          <button onClick={sortByKm}>SORT by km.</button>
          <button onClick={refresh}>REFRESH</button>
          <button onClick={sortByDate}>SORT by date</button>
        </div>
        <List
          kolts={kolts}
          setDeleteData={setDeletaData}
          setModalData={setModalData}
        />
      </div>
      <Edit
        setEditData={setEditData}
        modalData={modalData}
        setModalData={setModalData}
      />
      {/* <div
        style={{
          textAlign: 'center',
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
      </div> */}
    </>
  );
}

export default App;
