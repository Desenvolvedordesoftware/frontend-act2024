import * as React from 'react';
import Box from '@mui/material/Box';
import {
  Grid,
  Button,
} from '@mui/material';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import styled from "styled-components";

const Table = styled.table`
  width: 100%;
  height: 70%;
  background-color: #fff;
  padding: 10px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
  max-width: 1900px;
  margin: 100;
  word-break: break-all;
  font-size: 12px;
  background-color: #fff;
  backdrop-filter: blur(5.5px);
  overflow-y: scroll;
`;

export const Thead = styled.thead`

`;

export const Tbody = styled.tbody`
`;

export const Tr = styled.tr``;

export const Th = styled.th`
  text-align: start;
  border-bottom: inset;
  padding-bottom: 5px;

  @media (max-width: 500px) {
    ${(props) => props.onlyWeb && "display: none"}  
  }
`;

export const Td = styled.td`
  padding-top: 5px;
  text-align: ${(props) => (props.alignCenter ? "center" : "start" )};
  width: ${(props) => (props.width ? props.width : "auto")};

  @media (max-width: 500px) {
    ${(props) => props.onlyWeb && "display: none"}
  }
`;


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90%',
  height: '90%',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const ListBox = ({ box, setBox }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button
        style={{ margin: "5px", width: "300px" }}
        component="label"
        variant="contained"
        startIcon={<AssignmentIndIcon />}
        onClick={handleOpen}
      >
        Caixa
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Caixa
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={6} >

                        </Grid>
                    </Grid>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          <Table>
            <Thead>
              <Tr>
              <Th>HISTORICO</Th>
              <Th >ValorR$</Th>
              </Tr>
            </Thead>
            <Tbody>
            {box.map((item, i) => (
              <Tr key={i}>
              <Td width="70%">{item.HISTORICO}</Td>
              <Td width="20%">{item.VALOR}</Td>
              </Tr>
            ))}
            </Tbody>
          </Table>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}

export default ListBox;