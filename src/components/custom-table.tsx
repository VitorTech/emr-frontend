import { MedicsType } from "../types/medics";
import Table from "react-bootstrap/Table";

function CustomTable({ medics }: MedicsType) {
  console.log(medics);
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Full name</th>
        </tr>
      </thead>
      <tbody>
        {Array.isArray(medics) &&
          medics.map((medic, index) => {
            return (
              <tr key={index}>
                <td>{medic.id}</td>
                <td>{medic.fullName}</td>
              </tr>
            );
          })}
      </tbody>
    </Table>
  );
}

export default CustomTable;
