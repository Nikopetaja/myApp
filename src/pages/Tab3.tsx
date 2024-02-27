// src/pages/Tab3.js
import React from 'react';
import { Nav } from 'react-bootstrap';

const Tab3 = () => {
  return (
    <div>
      <Nav>
        <Nav.Item>
          <Nav.Link href="/tab1">Tab 1</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/tab2">Tab 2</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/tab3">Tab 3</Nav.Link>
        </Nav.Item>
      </Nav>
      <div>Tab 3 Content</div>
    </div>
  );
};

export default Tab3;
