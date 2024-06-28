
import { Modal } from 'daisyui';
import { useState } from 'react';
{
  /* Open the modal using document.getElementById('ID').showModal() method */
}


const MyModal = () => {
    const [showModal, setShowModal] = useState(false);
  
    const handleOpenModal = () => {
      setShowModal(true);
    };
  
    const handleCloseModal = () => {
      setShowModal(false);
    };
  
    return (
      <>
        <button onClick={handleOpenModal} className='bg-red-500'>Abrir modal</button>
  
        <Modal
          isOpen={showModal}
          onClose={handleCloseModal}
          title="Mi modal"
        >
          <p>Este es el contenido del modal.</p>
  
          <button onClick={handleCloseModal}>Cerrar modal</button>
        </Modal>
      </>
    );
  };
  
export default MyModal;