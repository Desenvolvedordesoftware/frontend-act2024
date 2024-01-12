import * as React from "react";
import Box from "@mui/material/Box";
import { Grid, Button } from "@mui/material";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import styled from "styled-components";
import "react-toastify/dist/ReactToastify.css";

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
  word-break: break-all;
  font-size: 12px;
  backdrop-filter: blur(5.5px);
`;

export const Thead = styled.thead``;

export const Tbody = styled.tbody`
  position: fixed;
  margin-top: 10px;
  width: 100%;
  height: 250px;
  outline: auto;
  overflow-y: scroll;
  z-index: 5;
`;

export const Tr = styled.tr``;

export const Th = styled.th`
  text-align: start;
  padding: 5px;
  border-bottom: inset;
  padding-bottom: 5px;
  @media (max-width: 500px) {
    ${(props) => props.onlyWeb && "display: none"}
  }
`;

export const Td = styled.td`
  text-align: center;
  padding: 0 5px;
  text-align: ${(props) => (props.alignCenter ? "center" : "start")};
  width: ${(props) => (props.width ? props.width : "auto")};

  @media (max-width: 500px) {
    ${(props) => props.onlyWeb && "display: none"}
  }
`;

const DataFilter = styled.input`
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
  marginLeft: .20,
  boxSizing: "border-box",
  position: "absolute",
  overflowWrap: "break-word",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "100%",
  height: "90%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 1,
};

const ListBox = ({ box, getBox, setData, data,totalDinheiro, totalPix, totalCredito, totalDebito, totalAprazo,totalSaidas  }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
  let Entradas = parseFloat(totalDinheiro) +
  parseFloat(totalPix) +
  parseFloat(totalCredito) +
  parseFloat(totalDebito) +
  parseFloat(totalAprazo);

  let Saidas = parseFloat(totalSaidas);

  let Saldo = Entradas - Saidas;
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
            <div>
              <InputArea>
                <Typography style={{ color: "#000" }}>
                  Selecionar uma data
                </Typography>
                <Button
                  style={{ margin: "5px", width: "100px" }}
                  component="label"
                  variant="contained"
                  onClick={handleClose}
                >
                  Fechar
                </Button>
              </InputArea>
              <div>
                <DataFilter
                  type="date"
                  value={data}
                  onChange={(e) => [setData(e.target.value)]}
                />
                <Button
                  style={{ margin: "5px", width: "100px" }}
                  component="label"
                  variant="contained"
                  onClick={getBox}
                >
                  Filtrar
                </Button>
              </div>
              <div>
                <Grid container item direction="row" spacing={2}>
                  <Grid item xs={12} sm={8} md={4}>
                    <Div style={{ padding: "10px" }}>
                      <Typography style={{ color: "#02b3d4" }} >
                          Entradas
                      </Typography>
                      <Typography style={{ color: "#000" }}>
                      {Intl.NumberFormat('pt-br',
                      {
                          style: 'currency',
                          currency: 'BRL'
                      }).format(
                          Entradas
                      )}
                      </Typography>
                    </Div>
                  </Grid>
                  <Grid item xs={12} sm={8} md={4}>
                    <Div style={{ padding: "10px" }}>
                      <Typography style={{ color: "#02b3d4" }} >
                        Saídas
                      </Typography>
                      <Typography style={{ color: "red" }} >
                      {Intl.NumberFormat('pt-br',
                      {
                          style: 'currency',
                          currency: 'BRL'
                      }).format(
                          Saidas
                      )}
                      </Typography>
                    </Div>
                  </Grid>
                  <Grid item xs={12} sm={8} md={4}>
                    <Div style={{ padding: "10px" }}>
                      <Typography style={{ color: "#02b3d4" }} >
                        Saldo
                      </Typography>
                      <Typography style={{ color: "#161b" }}>
                      {Intl.NumberFormat('pt-br',
                      {
                          style: 'currency',
                          currency: 'BRL'
                      }).format(
                          Saldo
                      )}
                      </Typography>
                    </Div>
                  </Grid>
                </Grid>
              </div>
            </div>
          </Typography>
          <div>
            <Typography id="modal-modal-description" sx={{ mt: 1 }}>
              <Table>
                <Thead>
                  <Tr
                  >
                    <Th width="79%">HISTORICO</Th>
                    <Th></Th>
                    <Th width="21%">ValorR$</Th>
                  </Tr>
                </Thead>
                <Tbody >
                {box.map((item, i) => (
                    <Tr key={i}>
                      <Td width="80%">{item.HISTORICO}</Td>
                      <Td>=</Td>
                      <Td width="20%">R$ {item.VALOR}</Td>
                    </Tr>
                  ))}  
                  
                </Tbody>
              </Table>
            </Typography>
          </div>
        </Box>
      </Modal>
      
    </div>
  );
};

export default ListBox;
