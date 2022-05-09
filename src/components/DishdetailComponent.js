import React from "react";
import { COMMENTS } from "../shared/comments";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

import { Link } from "react-router-dom";

const comments = COMMENTS;

const renderDish = (dish) => {
  return (
    <Card>
      <CardImg top src={dish.image} alt={dish.name} />
      <CardBody>
        <CardTitle>
          <b>{dish.name}</b>
        </CardTitle>
        <CardText>{dish.description}</CardText>
      </CardBody>
    </Card>
  );
};
const renderComment = (comments) => {
  return (
    <div>
      <h4>Comments</h4>

      <div className="list-group">
        {comments.map((item) => (
          <li className="list-group-item" key={item.id}>
            {item.comment}
            <br />
            --{item.author},{" "}
            {new Intl.DateTimeFormat("en-US", {
              year: "numeric",
              month: "short",
              day: "2-digit",
            }).format(new Date(Date.parse(item.date)))}
          </li>
        ))}
      </div>
    </div>
  );
};

const DishDetail = ({ dish }) => {
  return (
    <div className="row col-12">
      <div className="col-12 col-md-5 m-1">{renderDish(dish)}</div>
      <div className="col-12 col-md-5 m-1">
        {renderComment(comments.filter((item) => item.dishId === dish.id))}
      </div>
    </div>
  );
};

export default DishDetail;
