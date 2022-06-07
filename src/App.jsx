import { useEffect, useState } from 'react';
import './crud.css';
import { read, create, edit, remove } from './Functions/localStorage';
import Create from './Components/Create';
import List from './Components/List';

function App() {
  const [lastUpdate, setLastUpdate] = useState(Date.now());

  const [kolts, setKolts] = useState(null);
  const [modalData, setModalData] = useState(null);

  const [createData, setCreateData] = useState(null);
  const [deleteData, setDeletaData] = useState(null);
  const [editData, setEditData] = useState(null);

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
    <div class='container'>
      <Create setCreateData={setCreateData} />
      <List
        kolts={kolts}
        setDeleteData={setDeletaData}
        setModalData={setModalData}
      />
    </div>
  );
}

export default App;
