import * as React from "react";
import Box from "@mui/material/Box";
import { Grid, Button } from "@mui/material";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
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
  word-break: break-all;
  font-size: 12px;
  backdrop-filter: blur(5.5px);
`;

export const Thead = styled.thead`

`;

export const Tbody = styled.tbody`

`;

export const Tr = styled.tr`

`;

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
  position: "absolute",
  overflowY: "scroll",
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
            <InputArea>
            <Typography style={{ color: "#000" }} >
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
              <DataFilter type="date" sx={{width:"10px"}} />
                <Button
                  style={{ margin: "5px", width: "100px" }}
                  component="label"
                  variant="contained"
                  onClick={handleClose}
                >
                  Filtrar
                </Button>
            </div>
            <div >
                <Grid container item direction="row" spacing={2}>
                  <Grid item xs={12} sm={8} md={4}>
                    <Div style={{ padding: "10px" }}>
                      <Typography style={{ color: "#02b3d4" }} variant="h6">
                        Entradas
                      </Typography>
                      <Typography style={{ color: "#000" }} variant="h6">
                        R$ 4.786.45
                      </Typography>
                    </Div>
                  </Grid>
                  <Grid item xs={12} sm={8} md={4}>
                    <Div style={{ padding: "10px" }}>
                      <Typography style={{ color: "#02b3d4" }} variant="h6">
                        Saídas
                      </Typography>
                      <Typography style={{ color: "red" }} variant="h6">
                        R$ 2.286.35
                      </Typography>
                    </Div>
                  </Grid>
                  <Grid item xs={12} sm={8} md={4}>
                    <Div style={{ padding: "10px" }}>
                      <Typography style={{ color: "#02b3d4" }} variant="h6">
                        Saldo
                      </Typography>
                      <Typography style={{ color: "#161b" }} variant="h6">
                        R$ 2.500,10
                      </Typography>
                    </Div>
                  </Grid>
                </Grid>
            </div>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 1 }}>
            <Table >
              <Thead>
                <Tr>
                  <Th>HISTORICO</Th>
                  <Th></Th>
                  <Th>ValorR$</Th>
                </Tr>
              </Thead>
              <Tbody>
                {box.map((item, i) => (
                  <Tr key={i}>
                    <Td width="65%">{item.HISTORICO}</Td>
                    <Td>=</Td>
                    <Td width="30%">R${item.VALOR}</Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default ListBox;
