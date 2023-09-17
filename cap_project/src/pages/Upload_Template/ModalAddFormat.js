import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { Button, Modal } from 'react-bootstrap';
import { toast } from 'react-toastify';

const ModelAddFormat = (props) => {
  const { show, handleClose, formatExcel } = props;

  const handleSaveUser = () => {
    toast.success('Save Template Excel Successfully');
    handleClose(false);
  };

  console.log(formatExcel);

  return (
    <>
      <Modal size="lg" show={show} onHide={handleClose} variant="light" style={{ color: '#000' }}>
        <Modal.Header closeButton>
          <Modal.Title>Add Format</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {formatExcel ? (
            <Paper sx={{ width: '100%', overflow: 'hidden' }}>
              <TableContainer sx={{ maxHeight: 440 }}>
                <Table>
                  <TableHead>
                    <TableRow>
                      {formatExcel.map((value, key) => (
                        <TableCell key={key}>{value.columnName}</TableCell>
                      ))}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      {formatExcel.map((value, key) => (
                        <TableCell key={key}>{value.dataType}</TableCell>
                      ))}
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Paper>
          ) : (
            <div className="py-1 py-3 d-flex justify-content-center bg-dark">No File is uploaded yet !</div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => handleSaveUser()}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModelAddFormat;
