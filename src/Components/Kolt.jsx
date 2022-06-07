function Kolt({ kolt, setDeleteData, setModalData }) {
  const handleDelete = () => {
    setDeleteData(kolt);
  };
  const handleModal = () => {
    setModalData(kolt);
  };

  return (
    <>
      <p>{kolt.id}</p>
      <p>{kolt.regCode}</p>
      <p>{kolt.isBusy ? 'laisvas' : 'užimtas'}</p>
      <p>{kolt.lastUsed}</p>
      <p>{kolt.totalRide}</p>
      <button class='edt' onClick={handleModal}>
        Edit
      </button>
      <button class='dlt' onClick={handleDelete}>
        Delete
      </button>
    </>
  );
}

export default Kolt;
