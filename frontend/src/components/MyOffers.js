import React from "react";
import Table from "react-bootstrap/Table";
import { Card, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Tooltip from "react-bootstrap/Tooltip";
import Image from "react-bootstrap/Image";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";

function MyOffers({ offers }) {
  const navigate = useNavigate();
  const alertClicked = (slug) => {
    navigate("/profile/" + slug);
  };
  const productClicked = (id) => {
    navigate("/product/" + id);
  };
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Click to Visit Profile
    </Tooltip>
  );

  return (
    <div>
      <Table striped hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Product Name</th>
            <th></th>
            <th>Buyer Username</th>
            <th>Offered Price</th>
            <th>Offered Time</th>
            <th>Actions</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {offers.map((offer, index) => (
            <tr>
              <td
                onClick={() => productClicked(offer.product._id)}
                style={{ cursor: "pointer" }}
              >
                {index + 1}
              </td>
              <td
                onClick={() => productClicked(offer.product._id)}
                style={{ cursor: "pointer" }}
              >
                {offer.product.name}
              </td>
              <td
                onClick={() => productClicked(offer.product._id)}
                style={{ cursor: "pointer" }}
              >
                <img
                  src={offer.product.image}
                  alt={offer.product.name}
                  style={{
                    height: "200px",
                    width: "350px",
                    objectFit: "cover",
                  }}
                />
              </td>

              <td onClick={() => alertClicked(offer.buyer.username)}>
                <OverlayTrigger
                  placement="bottom"
                  delay={{ show: 250, hide: 400 }}
                  overlay={renderTooltip}
                >
                  <Button variant="primary">@{offer.buyer.username}</Button>
                </OverlayTrigger>
              </td>

              <td>${offer.price}</td>
              <td>{new Date(offer.createdAt).toLocaleString()}</td>
              <td>
                <Button variant="success">Accept</Button>
              </td>
              <td>
                <Button variant="danger">Decline</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default MyOffers;
