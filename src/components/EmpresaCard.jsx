import styles from "./EmpesaCard.module.css";
import { Card } from "reactstrap";
import { CardBody } from "reactstrap";
import { CardTitle } from "reactstrap";
import { CardText } from "reactstrap";
import { Link } from "react-router-dom";

export function EmpresaCard({ empresa }) {
  return (
    <div>
      <Card style={{ backgroundColor: "blue" }}>
        <CardBody>
          <CardTitle tag="h5">{empresa.titulo}</CardTitle>
          <CardText>{empresa.fiid}</CardText>
        </CardBody>
      </Card>
    </div>
  );
}
