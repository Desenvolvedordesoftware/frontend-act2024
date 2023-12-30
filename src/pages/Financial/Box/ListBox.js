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

const Div = styled.div`
    display: flex;
    justify-content: space-between;
    background: rgba(255, 255, 255, 0.3);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(5.5px);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.18);
`;

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
  backdrop-filter: blur(5.5px);
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
  text-align: ${(props) => (props.alignCenter ? "center" : "start")};
  width: ${(props) => (props.width ? props.width : "auto")};

  @media (max-width: 500px) {
    ${(props) => props.onlyWeb && "display: none"}
  }
`;

const DataFilter = styled.input`
  margin: 10px; 
  padding: 0%;
  width: 150px;
  height: 50%;
`;

const style = {
  position: 'absolute',
  overflowY: 'scroll',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '100%',
  height: '90%',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 1,
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
            <Div>
            <DataFilter/> 
            <Grid container rowSpacing={1} >
              <Grid item xs={8} sm={6} md={6} >
                <Button
                  style={{ margin: "5px", width: "100px" }}
                  component="label"
                  variant="contained"
                  onClick={handleClose}
                >
                  Filtrar
                </Button>
              </Grid>
              <Grid item xs={8} sm={6} md={6} >
                <Button
                  style={{ margin: "5px", width: "100px" }}
                  component="label"
                  variant="contained"
                  onClick={handleClose}
                >
                  Fechar
                </Button>
              </Grid>
            </Grid>
            </Div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Grid container direction="column" padding={1} spacing={2}>

                <Grid container item direction="row" spacing={2}>
                  <Grid item xs={12} sm={8} md={4}>
                    <Div style={{ padding: "10px" }}>
                      <Typography style={{ color: "#02b3d4" }} variant='h6'>Entradas</Typography>
                      <Typography style={{ color: "#000" }} variant='h6'>R$ 4.786.45</Typography>
                    </Div>
                  </Grid>
                  <Grid item xs={12} sm={8} md={4}>
                    <Div style={{ padding: "10px" }}>
                      <Typography style={{ color: "#02b3d4" }} variant='h6'>Saídas</Typography>
                      <Typography style={{ color: "red" }} variant='h6'>R$ 2.286.35</Typography>
                    </Div>
                  </Grid>
                  <Grid item xs={12} sm={8} md={4}>
                    <Div style={{ padding: "10px" }}>
                      <Typography style={{ color: "#02b3d4" }} variant='h6'>Saldo</Typography>
                      <Typography style={{ color: "#161b" }} variant='h6'>R$ 2.500,10</Typography>
                    </Div>
                  </Grid>
                </Grid>
              </Grid>
            </div>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <Table>
              <Thead>
                <Tr>
                  <Th>HISTORICO</Th>
                  <Th >ValorR$</Th>
                </Tr>
              </Thead>
              <Tbody >
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