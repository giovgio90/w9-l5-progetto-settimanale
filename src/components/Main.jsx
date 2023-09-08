import { Container, Row } from "react-bootstrap";
import HarryPotter from "./HarryPotter";
import TheWalkingDead from "./TheWalkingDead";
import Marvel from "./Marvel";

const Main = () => {
  return (
    <Container className=" mb-1 mb-sm-2 mb-md-4 mb-lg-5" style={{ marginBottom: "100px" }}>
      <h2 className="fs-4 text-white mb-3">Harry Potter Saga</h2>
      <Row className="gx-1 gy-1 mb-xs-1 mb-lg-5">
        <HarryPotter />
      </Row>

      <h2 className="fs-4 text-white mb-3 mt-4">The Walking Dead Saga</h2>
      <Row className="gx-1 gy-1 mb-4 mb-xs-2">
        <TheWalkingDead />
      </Row>

      <h2 className="fs-4 text-white mb-3">Marvel</h2>
      <Row className="gx-1 gy-1 mb-4">
        <Marvel />
      </Row>
    </Container>
  );
};

export default Main;
