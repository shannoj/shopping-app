import { Card, Flex, Image, Button, Empty } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Data {
  image: string;
  title: string;
  price: string;
  id: number;
}

interface CartProps {
  data: Data[];
  removeButtonClick: (id: number) => void;
  empty: () => boolean;
}

const { Meta } = Card;

const Cart = ({ data, removeButtonClick, empty }: CartProps) => {
  return (
    <>
      {empty() && <Empty style={{margin: 300}}image={<FontAwesomeIcon icon={faCartShopping} />} imageStyle={{height: 100}} description={<span>No Items In Cart</span>}></Empty>}
      {data.map((item: Data, index) => (
        <Card key={index}>
          <Flex justify="space-between" align="center">
            <div>
              <Image height={100} width={100} src={item.image}></Image>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                }}
              >
                <Meta style={{ marginBottom: 0 }} title={item.title}></Meta>
                <p style={{ marginLeft: 100, height: 10, marginTop: 0 }}>
                  {item.price}
                </p>
              </div>
              <div>
                <Button
                  onClick={() => removeButtonClick(item.id)}
                  type="primary"
                  style={{ marginLeft: 20 }}
                >
                  Remove
                </Button>
              </div>
            </div>
          </Flex>
        </Card>
      ))}
    </>
  );
};

export default Cart;
