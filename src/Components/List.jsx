import Kolt from './Kolt';

function List({ kolts, setDeleteData, setModalData }) {
  return (
    <>
      <h2 className='heading'>ADMIN KOLT SCOOTER RENTAL</h2>
      <div className='flex-card'>
        <div className='flex-row'>
          <h4>ID</h4>
          <h4>Reg. Code</h4>
          <h4>Availability</h4>
          <h4>Last Used</h4>
          <h4>Total Ride</h4>
        </div>
        {kolts
          ? kolts.map((klt) => (
              <Kolt
                key={klt.id}
                kolt={klt}
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
