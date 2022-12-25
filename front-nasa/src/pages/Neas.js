import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Row } from "react-bootstrap";
import Nea from "../components/Nea";

import axios from "axios";

const apiEndpoint = `https://ejercicionasa.onrender.com/api/astronomy/neas/neas`;

const Neas = () => {
  const [neas, setNeas] = useState([]);

 

  useEffect(() => {
    async function getNeas() {
      const { data } = await axios.get(apiEndpoint);

      setNeas(data);
    }

    getNeas();
  }, []);

  return (
    <>
      <h2>
      <Link to="/neas/list">  Todos los neas</Link><Link to="/new-post">Nuevo Nea</Link>
      </h2>
      <Row xs={1} md={2} className="g-4">
        {neas.map((nea) => (
          <Nea
            key={nea._id}
            {...nea}
          />
        ))}
      </Row>
    </>
  );
};

export default Neas;

