import React, { useState } from "react";
import { Button, Form, FormControl, Nav, Navbar } from "react-bootstrap";
import { useHistory } from "react-router-dom";

export default function NavBar() {
  const [search, setSearch] = useState("");
  const history = useHistory();

  function handelSearch() {
    console.log(search);
    const param = encodeURIComponent(search);
    history.push(`/category/${param}`);
  }

  return (
    <div>
      <Nav
        fill
        variant="tabs"
        defaultActiveKey="/"
        style={{ background: "pink" }}>
        <Navbar.Brand href="/" style={{ marginLeft: "10px" }}>
          {" "}
          Cocktails Time &#127864;
        </Navbar.Brand>
        <Nav.Item>
          <Nav.Link href="/list">list </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/noalcoholic">No Alcoholic</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/alcoholic">Alcoholic</Nav.Link>
        </Nav.Item>
        <Form inline>
          <FormControl
            type="text"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            placeholder="Search by ingredient.."
            className="mr-sm-2"
          />
          <Button variant="outline-primary" onClick={handelSearch}>
            Search
          </Button>
        </Form>
      </Nav>
    </div>
  );
}
