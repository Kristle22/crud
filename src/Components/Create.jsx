import { useState } from 'react';
import rand from '../Functions/randNumbers';

function Create({ setCreateData, kolts }) {
  const [regCode, setRegCode] = useState('KO' + rand(100000, 999999));
  const [isBusy, setIsBusy] = useState(1);
  const [lastUsed, setLastUsed] = useState('');
  const [totalRide, setTotalRide] = useState('');

  const handleCreate = () => {
    const data = { regCode, isBusy, lastUsed, totalRide };
    setCreateData(data);
    setRegCode('KO' + rand(100000, 999999));
    setIsBusy(1);
    setLastUsed('');
    setTotalRide('');
  };

  return (
    <>
      <div className='form-container'>
        <div className='img'></div>
        <div className='form'>
          <h3>Enter scooter details</h3>
          <form>
            {/* <h4>Registration Code</h4>
          <div id='reg'>{regCode}</div> */}
            <select
              className='isAvailable'
              value={isBusy}
              // onChange={(e) => setIsBusy(e.target.value)}
              // disabled
            >
              <option value='1'>Available</option>
              <option value='0'>Busy</option>
            </select>
            <br />
            <label>Last Used:</label>
            <input
              type='date'
              onChange={(e) => setLastUsed(e.target.value)}
              value={lastUsed}
            />
            <label>Total Ride(km):</label>
            <input
              className='ride'
              type='text'
              onChange={(e) => {
                setTotalRide(e.target.value);
              }}
              value={totalRide}
              placeholder='here...'
            />
            <button type='button' className='put' onClick={handleCreate}>
              New COLT
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Create;
