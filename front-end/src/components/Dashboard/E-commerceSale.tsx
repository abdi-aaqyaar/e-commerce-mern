import React from "react";
import Card from "react-bootstrap/Card";
import { FaSalesforce } from "react-icons/fa";
type Props = {};

export default function EcommerceSale({}: Props) {
  return (
    <Card className="shadow-lg" style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title className="fw-bold text-center">
          Total Sale Products
        </Card.Title>
        <Card.Text className="d-flex justify-content-center align-items-center gap-3">
          <FaSalesforce className="fs-1 text-primary" />
          <span className="fs-2 ml-1 text-secondary">1,234</span>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
