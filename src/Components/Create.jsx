import { useState } from 'react';
import rand from '../Functions/randNumbers';
// import getRandomFloat from '../randomFloat';
// import randomDate from '../randomDate';

function Create({ setCreateData }) {
  const [regCode, setRegCode] = useState('KO' + rand(100000, 999999));
  const [isBusy, setIsBusy] = useState(Math.random() > 0.5);
  const [lastUsed, setLastUsed] = useState(new Date().toLocaleString());
  const [totalRide, setTotalRide] = useState(0);

  const handleCreate = () => {
    const data = { regCode, isBusy, lastUsed, totalRide };
    setCreateData(data);
    setRegCode(regCode);
    setIsBusy(isBusy);
    // setLastUsed(randomDate(new Date(2022, 0, 1), new Date()));
    // setTotalRide(getRandomFloat(0.01, 999.99));
    setLastUsed(new Date().toLocaleString());

    // const total = useRef(0);
    setTotalRide((t) => Number(t).toFixed(2));
  };

  return (
    <div className='form-container'>
      <div className='img'></div>
      <div className='form'>
        <h3>Enter scooter details</h3>
        <form>
          <h4>Registration Code</h4>
          <div id='reg'>{regCode}</div>
          <label>Availability:</label>
          <select
            disabled='disabled'
            value={'laisvas'}
            onChange={() => {
              setIsBusy();
            }}
          >
            <option value='laisvas'>laisvas</option>
            <option value='laisvas'>užimtas</option>
          </select>
          <label>Last Used:</label>
          <input
            type='text'
            onChange={() => {
              setLastUsed(new Date().toLocaleString());
            }}
            value={lastUsed}
          />
          <label>Total Ride:</label>
          <input
            type='text'
            onChange={(e) => {
              setTotalRide(e.target.value);
            }}
            value={totalRide}
          />
          <button className='put' onClick={handleCreate}>
            Ideti
          </button>
        </form>
      </div>
    </div>
  );
}

export default Create;
