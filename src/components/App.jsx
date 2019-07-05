import './App.scss';

import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link, Route, BrowserRouter } from 'react-router-dom';

import Register from 'components/Register';
import Posts from 'components/Posts';

const App = () => (
  <div styleName="app">
    <Container>
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <BrowserRouter>
            <div>
              <nav>
                <ul>
                  <li>
                    <Link to="/register">Register</Link>
                  </li>
                  <li>
                    <Link to="/posts">Posts</Link>
                  </li>
                </ul>
              </nav>

              <Route path="/register" component={Register} />
              <Route path="/posts" component={Posts} />
            </div>
          </BrowserRouter>
        </Col>
      </Row>
    </Container>
  </div>
);

export default App;
