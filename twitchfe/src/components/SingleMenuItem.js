import React from "react";
import { Row, Col, Tooltip, Button, message } from "antd";
import { StarFilled } from "@ant-design/icons";
import { deleteFavoriteItem } from "../utils";

function SingleMenuItem({ item, favOnChange }) {
  const title = `${item.broadcaster_name} - ${item.title}`;

  const removeOnClick = () => {
    deleteFavoriteItem(item)
      .then(() => {
        favOnChange();
      })
      .catch((err) => {
        message.error(err.message);
      });
  };

  return (
    <Row>
      <Col>
        <Tooltip title={"Remove from favorite list"}>
          <Button
            shape="circle"
            icon={<StarFilled />}
            onClick={removeOnClick}
            size="small"
          />
        </Tooltip>
      </Col>
      <Col>
        <div
          style={{ overflow: "hidden", textOverflow: "ellipsis", width: 600 }}
        >
          <Tooltip title={title} placement="topLeft">
            <a href={item.url} target="_blank" rel="noopener noreferrer">
              {title}
            </a>
          </Tooltip>
        </div>
      </Col>
    </Row>
  );
}

export default SingleMenuItem;
