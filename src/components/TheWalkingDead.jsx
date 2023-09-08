import { Component } from "react";
import { Col, Spinner } from "react-bootstrap";

class TheWalkingDead extends Component {
  state = {
    data: null,
    error: null,
    isLoading: true,
  };

  async componentDidMount() {
    try {
      const response = await fetch("https://www.omdbapi.com/?apikey=c07b50c9&s=The Walking dead");
      if (!response.ok) {
        this.setState({ error: `status: ${response.status}` });
      } else {
        const data = await response.json();
        this.setState({ data });
      }
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({ isLoading: false });
    }
  }

  render() {
    const { data, error, isLoading } = this.state;

    if (error) {
      return <div>Error: {error}</div>;
    }

    if (isLoading) {
      return (
        <div className="loader-container d-flex justify-content-center">
          <div>
            <Spinner className="me-2" animation="border" variant="white" role="status"></Spinner>
          </div>
          <div>
            <p className="text-white fw-bold fs-4">Loading. . .</p>
          </div>
        </div>
      );
    }

    const movies = data.Search.slice(0, 6);

    return movies.map((movie, index) => (
      <Col key={index} xs={12} sm={6} md={4} lg={2}>
        <img src={movie.Poster} alt="film1" style={{ width: "100%" }} />
      </Col>
    ));
  }
}

export default TheWalkingDead;
