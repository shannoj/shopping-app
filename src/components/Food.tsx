import { Card, Flex } from "antd";
import { Link } from "react-router-dom";

const { Meta } = Card;

const Food = () => {
  return (
    <>
      <Flex style={{ width: "100%" }} justify="space-around" align="center">
        <Link to="hotdrinks">
          <Card
            hoverable
            style={{
              width: 350,
              marginLeft: 50,
              marginTop: 50,
              marginBottom: 50,
            }}
            cover={
              <img
                style={{ height: 240 }}
                alt="example"
                src="../images/istockphoto-938993594-612x612.jpg"
              />
            }
          >
            <Meta title="Boissoin Chaud" />
          </Card>
        </Link>
        <Link to="colddrinks">
          <Card
            hoverable
            style={{
              width: 350,
              marginTop: 50,
              marginBottom: 50,
            }}
            cover={
              <img
                style={{ height: 240 }}
                alt="example"
                src="../images/poznan-poland-oct-28-2021-600nw-2071581119-1.webp"
              />
            }
          >
            <Meta title="Boisson foid" />
          </Card>
        </Link>
        <Link to="snacks">
          <Card
            hoverable
            style={{
              width: 350,
              marginRight: 50,
              marginTop: 50,
              marginBottom: 50,
            }}
            cover={
              <img
                style={{ height: 240 }}
                alt="example"
                src="../images/download-1.jpg"
              />
            }
          >
            <Meta title="Snack et Produits Fraiche" />
          </Card>
        </Link>
      </Flex>
    </>
  );
};

export default Food;
