import React from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const newStyles = makeStyles(() => ({
  root: {
    textAlign: "center",
    margin: 40,
  },
  video: {},
}));

export default function Beer() {
  const classes = newStyles();
  const [datas, setData] = React.useState([]);

  const componentDidMount = () => {
    axios.get("https://api.punkapi.com/v2/beers").then((res) => {
      const datas = res.data;
      setData(datas);
    });
  };

  return (
    <div className={classes.root}>
      {componentDidMount()}
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Image</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Description</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {datas.map((data) => (
              <TableRow key={data.id}>
                <TableCell component="th" scope="row">
                  <img width="50px" src={data.image_url} alt={data.name} />
                </TableCell>
                <TableCell component="th" scope="row">
                  {data.name}
                </TableCell>
                <TableCell component="th" scope="row">
                  {data.description}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}