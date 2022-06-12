function Kolt({ kolt, setDeleteData, setModalData }) {
  const handleDelete = () => {
    setDeleteData(kolt);
  };
  const handleModal = () => {
    setModalData(kolt);
  };

  return (
    <>
      <div className='flex-row'>
        <p>{kolt.id}</p>
        <p>{kolt.regCode}</p>
        {kolt.isBusy === 1 ? (
          <p className='isAvailable'>available</p>
        ) : (
          <p className='isBusy'>busy</p>
        )}
        <p>{kolt.lastUsed}</p>
        <p>{kolt.totalRide}</p>
        <button type='button' className='edt' onClick={handleModal}>
          Edit
        </button>
        <button type='button' className='dlt' onClick={handleDelete}>
          Delete
        </button>
      </div>
    </>
  );
}

export default Kolt;
