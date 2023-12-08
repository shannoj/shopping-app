import { Card, Flex } from "antd";
import { Link } from "react-router-dom";

const { Meta } = Card;

const Products = () => {
  return (
    <>
      <Flex style={{ width: "100%" }} justify="space-around" align="center">
        <Link to="food">
          <Card
            hoverable
            style={{
              width: 240,
              marginLeft: 150,
              marginTop: 50,
              marginBottom: 50,
            }}
            cover={<img alt="example" src="./images/download.jpg" />}
          >
            <Meta title="Food" />
          </Card>
        </Link>
        <Link to="machines">
          <Card
            hoverable
            style={{
              width: 240,
              marginRight: 150,
              marginTop: 50,
              marginBottom: 50,
            }}
            cover={
              <img
                style={{ height: 240 }}
                alt="example"
                src="./images/distributeur-vendo.jpg"
              />
            }
          >
            <Meta title="Machines" />
          </Card>
        </Link>
      </Flex>
    </>
  );
};

export default Products;
