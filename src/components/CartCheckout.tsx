import { Card, Flex, Image, Button, Empty, Input, Typography } from "antd";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Data {
  image: string;
  title: string;
  price: string;
  id: number;
  quantity: number;
}

interface CartProps {
  data: Data[];
  removeButtonClick: (id: number) => void;
  empty: () => boolean;
  addOne: (id: number) => void;
  removeOne: (id: number) => void;
  total: number;
}

const { Meta } = Card;

const { Text } = Typography;

const Cart = ({
  data,
  removeButtonClick,
  empty,
  addOne,
  removeOne,
  total,
}: CartProps) => {
  return (
    <>
      {empty() && (
        <Empty
          style={{ margin: 300 }}
          image={<FontAwesomeIcon icon={faCartShopping} />}
          imageStyle={{ height: 100 }}
          description={<span>No Items In Cart</span>}
        ></Empty>
      )}
      {data.map((item: Data, index) => (
        <Card className="mt-5 ml-2 mr-2" key={index}>
          <Flex justify="space-between" align="center">
            <div>
              <Image height={100} width={100} src={item.image}></Image>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around",
                width: "50%",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-end",
                  flexDirection: "column",
                  marginRight: 20,
                }}
              >
                <Meta style={{ marginBottom: 0 }} title={item.title}></Meta>
                <p
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-end",
                    width: "100%",
                    height: 10,
                    marginTop: 2,
                  }}
                >
                  ${item.price}
                </p>
              </div>
              <div style={{ marginRight: 5 }}>
                <Input
                  style={{ width: 175, marginLeft: 10, marginRight: 10 }}
                  addonBefore={
                    <div
                      onClick={() => removeOne(item.id)}
                      className="cursor-pointer"
                    >
                      -
                    </div>
                  }
                  addonAfter={
                    <div
                      onClick={() => addOne(item.id)}
                      className="cursor-pointer"
                    >
                      +
                    </div>
                  }
                  defaultValue="1"
                  value={item.quantity}
                ></Input>
              </div>
              <div>
                <Button
                  onClick={() => removeButtonClick(item.id)}
                  type="primary"
                  danger
                >
                  Remove
                </Button>
              </div>
            </div>
          </Flex>
        </Card>
      ))}
      {empty() ? (
        <div></div>
      ) : (
        <Flex className="pt-10 pb-10" justify="flex-end" align="center">
          <Text className="pr-1">Total:</Text>
          <Text className="pr-3">${total.toFixed(2)}</Text>
        </Flex>
      )}
    </>
  );
};

export default Cart;
