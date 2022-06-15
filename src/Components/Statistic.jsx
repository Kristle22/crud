function Statistic({ kolts }) {
  const koltsTotalRide =
    kolts &&
    kolts
      .map((klt) => Number(klt.totalRide))
      .reduce((total, val) => total + val, 0);

  return (
    <>
      <div
        className='statistic'
        style={{
          backgroundColor: '#5a5f6f',
          color: '#fff',
          padding: '20px',
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
            {kolts && kolts.length}
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
            {kolts && koltsTotalRide.toFixed(2)}
          </b>{' '}
          km.
        </p>
      </div>
    </>
  );
}

export default Statistic;
