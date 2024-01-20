import * as React from 'react';
import Box from '@mui/material/Box';
import styled from "styled-components";
import "react-toastify/dist/ReactToastify.css";
import {
  Button,
} from '@mui/material';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import Modal from '@mui/material/Modal';
import Typography from "@mui/material/Typography";
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

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
  height: 95%;
  background-color: #fff;
  padding: 10px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
  font-size: 12px;
  backdrop-filter: blur(5.5px);
`;

export const Thead = styled.thead`
`;

export const Tbody = styled.tbody`
   position: fixed;
  margin-top: 5px;
  margin-bottom: 5px;
  box-sizing: 'border-box';
  width: 100%;
  height: 100%;
  max-height: 950px;
  min-height: 470px;
  background-color: #343f46;
  outline: auto;
  overflow: overlay;
  z-index: 5;
  color: #fff;
`;

export const Tr = styled.tr`
  display: flex;
  margin: 5px;
  justify-content: space-between;
  border-radius: 2px;
  border: 1px solid #fff;
`;

export const Th = styled.th`
  text-align: start;
  padding: 5px;
  padding-bottom: 5px;
  @media (max-width: 500px) {
    ${(props) => props.onlyWeb && "display: none"}
  }
`;

export const Td = styled.td`
  display: block;
  text-align: start;
  padding: 0 1px;
  background-color: #343f46;
  text-align: ${(props) => (props.alignCenter ? "center" : "start")};
  width: ${(props) => (props.width ? props.width : "auto")};

  @media (max-width: 500px) {
    ${(props) => props.onlyWeb && "display: none"}
  }
`;

const Loc = styled.input`
  padding: 0 10px;
  border: 1px solid #bbb;
  border-radius: 5px;
  height: 40px;
  width: 200px;
  font-size: 12px;
`;

const InputArea = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0;
  margin-left: 10px;
  gap: 20px;
  padding: 0px;
  justify-content: space-between;
`;

const style = {
  position: 'absolute',
  boxSizing: 'border-box',
  width: '100%',
  height: '100vh',
  bgcolor: '#343f46',
  border: '2px solid #000',
  p: 1,
  overflow: 'overlay'
};


const ListProducts = ({box, getBox, setLoc, loc, openL}) => {
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [open, setOpen] = React.useState(false);

  return (
    <div>
      <Button
        style={{ margin: "5px", width: "300px" }}
        component="label"
        variant="contained"
        startIcon={<AssignmentIndIcon />}
        onClick={handleOpen}
      >
        Produtos
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <InputArea>
            <Typography style={{ color: "#fff" }}>
              Lista Produtos = { box.length }
            </Typography>
            <Button
              style={{ margin: "5px", width: "100px", fontSize: "12px" }}
              component="label"
              variant="contained"
              onClick={handleClose}
            >
              Fechar
            </Button>
          </InputArea>
          <Div style={{ alignItems: "center" }} >
            <Loc
              style={{ marginLeft: "5px", width: "300px", height: "30px", border: "1px solid #343f46" }}
              type='text'
              placeholder="Digite descrição do produto"
              value={loc}
              onChange={(e) => [setLoc(e.target.value)]} />
            <Button
              style={{ margin: "5px", width: "150px" }}
              component="label"
              variant="contained"
              startIcon={<AssignmentIndIcon />}
              onClick={getBox}
            >
              Localizar
            </Button>
          </Div>

          <div>
            <Typography id="modal-modal-description" sx={{ mt: 1 }}>
              <Table>
                <Tbody >
                  {box === undefined ? [] : box.map((item, i) => (
                    <Tr key={i}>
                      <Td >
                        <Td>Codigo: {item.CODIGO} <br/>Descrição: {item.PRODUTO} / Unidade: {item.UNIDADE}</Td>
                         <Td>            
                          Valor: {Intl.NumberFormat('pt-br',
                          {
                            style: 'currency',
                            currency: 'BRL'
                          }).format(
                            item.PRECOVENDA
                          )}</Td>
                          <Td> 
                          Estoque: {item.ESTOQUE} / PESO: {item.PESO}</Td>
                          </Td>
                    </Tr>
                  ))}

                </Tbody>
              </Table>
            </Typography>
          </div>
          <Backdrop
              sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 5}}
              open={openL}
          >
              <CircularProgress color="inherit" />
          </Backdrop>
        </Box>
      </Modal>
    </div>
  );
}

export default ListProducts;