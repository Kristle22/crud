import Kolt from './Kolt';
import SortBtns from './SortBtns';

function List({
  kolts,
  setDeleteData,
  setModalData,
  selectDate,
  selectRide,
  sortByDate,
  sortByKm,
}) {
  // console.log(kolts);
  return (
    <>
      <div className='heading'>
        <h2>ADMIN COLT SCOOTER RENTAL</h2>
      </div>
      <div className='flex-card'>
        <div className='flex-row'>
          <h4>ID</h4>
          <h4>Reg. Code</h4>
          <h4>Ready to use</h4>
          <SortBtns
            kolts={kolts}
            selectDate={selectDate}
            selectRide={selectRide}
            sortByDate={sortByDate}
            sortByKm={sortByKm}
          />
          <option value=''></option>
        </div>
        {kolts
          ? kolts.map((klt) => (
              <Kolt
                key={klt.id}
                kolt={klt}
                kolts={kolts}
                setDeleteData={setDeleteData}
                setModalData={setModalData}
              />
            ))
          : null}
      </div>
    </>
  );
}

export default List;
