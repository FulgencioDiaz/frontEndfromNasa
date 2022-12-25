import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

const Nea = ({ _id, designation, orbit_class, pha, discovery_date, h_mag, moid_au, period_yr, i_deg, q_au_1, q_au_2}) => {
  return (
    <Col>
      <Card>
        <Card.Body>
          <Card.Title>
           Designation: <Link to={_id}>{designation}</Link>
          </Card.Title>
          <Card.Text>Orbit_Class: {orbit_class}</Card.Text>
          <Card.Text>Potentially Hazardous Asteroid: {pha}</Card.Text>
          <Card.Text>Discovery_date: {discovery_date}</Card.Text>
          <Card.Text>H_mag: {h_mag}</Card.Text>
          <Card.Text>Moid_au: {moid_au}</Card.Text>
          <Card.Text>Period_yr: {period_yr}</Card.Text>
          <Card.Text>I_deg: {i_deg}</Card.Text>
          <Card.Text>Q_au_1: {q_au_1}</Card.Text>
          <Card.Text>Q_au_2: {q_au_2}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Nea;