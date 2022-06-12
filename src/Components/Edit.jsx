import { useState, useEffect, useRef } from 'react';

function Edit({ modalData, setModalData, setEditData }) {
  const [isBusy, setIsBusy] = useState(1);
  const [lastUsed, setLastUsed] = useState('');
  const [totalRide, setTotalRide] = useState(0);

  const [chbox, setChbox] = useState(false);

  let koltRide = useRef(0);
  let oneKoltRide = koltRide.current;

  const cbClick = () => {
    setChbox(!chbox);
    setIsBusy(chbox ? (modalData.isBusy = 1) : modalData.isBusy === 0);
  };

  useEffect(() => {
    if (null === modalData) {
      return;
    }
    setLastUsed(modalData.lastUsed);
    setTotalRide(modalData.totalRide);
    setTotalRide('');
  }, [modalData]);

  const handleEdit = () => {
    const data = {
      isBusy,
      lastUsed,
      totalRide,
      id: modalData.id,
      regCode: modalData.regCode,
    };
    setTotalRide((koltRide.current += Number(totalRide)));
    setEditData(data);
    setModalData(null);
  };
  if (null === modalData) {
    return null;
  }

  return (
    <>
      <div className='modal-layer'>
        <div className='modal-cont'>
          <div className='modal'>
            <div className='left-side'>
              <h4>Plan and manage your trip online</h4>
              <button
                type='button'
                className='close-x'
                onClick={() => setModalData(null)}
              >
                &times;
              </button>
              <img
                className='scooter'
                src='./img/kick-scooter.png'
                alt='scooter'
              />
            </div>
            <div className='right-side form'>
              <form>
                <h4>
                  Registration Code:{' '}
                  <span className='old'>{modalData.regCode}</span>
                </h4>
                <fieldset>
                  <legend>
                    <h4>Change availability</h4>
                  </legend>
                  {isBusy === 1 ? (
                    <div className='field'>
                      <h4 className='isAvailable'>Available</h4>
                      <input
                        type='checkbox'
                        value={chbox}
                        checked={false}
                        onChange={cbClick}
                      />
                      <label>Busy</label>
                    </div>
                  ) : (
                    <div className='field'>
                      <h4 className='isBusy'>Busy</h4>
                      <input
                        type='checkbox'
                        value={chbox}
                        checked={true}
                        onChange={cbClick}
                      />
                      <label>Busy</label>
                    </div>
                  )}
                </fieldset>
                <h4>
                  Last Used: <span className='old'>{modalData.lastUsed}</span>
                </h4>
                <label>Enter the date:</label>
                <input
                  type='date'
                  value={lastUsed}
                  onChange={(e) => setLastUsed(e.target.value)}
                />
                <h4>
                  Total Ride:{' '}
                  <span className='old'>{oneKoltRide.toFixed(2)} km.</span>
                </h4>
                <label>Enter today's distance (km.):</label>
                <input
                  className='ride'
                  type='text'
                  value={totalRide}
                  onChange={(e) => setTotalRide(e.target.value)}
                />
                <button
                  type='button'
                  className='close'
                  onClick={() => setModalData(null)}
                >
                  Close
                </button>
                <button type='button' className='put' onClick={handleEdit}>
                  Save
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Edit;
