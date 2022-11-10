import { Box, Button, Typography, Modal } from '@mui/material';

function Details({ showModal, setShowModal, selectedProduct }) {

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  return (
    <div>
      <Modal
        open={showModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {selectedProduct.display}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {selectedProduct.description}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Price: {`$${selectedProduct.price}.00`}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            In Stock: {selectedProduct.inventoryCount}
          </Typography>
          <Button onClick={() => setShowModal(false)}>Close</Button>
        </Box>
      </Modal>
    </div>
  );
}

export default Details;