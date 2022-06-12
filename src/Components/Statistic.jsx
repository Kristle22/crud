function Statistic({ quantity, koltsTotalRide, totalRide }) {
  return (
    <>
      <div
        className='statistic'
        style={{
          backgroundColor: '#5a5f6f',
          color: '#fff',
          padding: '20px',
          width: 'fit-content',
          borderRadius: '5px',
        }}
      >
        <p>
          The total quantity of COLT's:{' '}
          <b
            style={{
              textDecoration: 'underline',
              fontSize: '25px',
              lineHeight: '15px',
            }}
          >
            {quantity}
          </b>
        </p>
        <p>
          The total ride of all COLTS:{' '}
          <b
            style={{
              textDecoration: 'underline',
              fontSize: '25px',
              lineHeight: '15px',
            }}
          >
            {koltsTotalRide}
          </b>{' '}
          km.
        </p>
      </div>
    </>
  );
}

export default Statistic;
