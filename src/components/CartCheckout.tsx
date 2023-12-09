import { Card, Flex } from "antd";

interface Data {
  image: string;
  title: string;
  price: string;
  id: number;
}

interface CartProps {
  data: Data[];
}

const { Meta } = Card;

const Cart = ({ data }: CartProps) => {
  return (
    <>
      {data.map((item: Data, index) => (
        <Card
          hoverable={true}
          style={{ height: 250, width: 300, marginTop: 5, marginBottom: 5 }}
          key={index}
          cover={
            <div
              style={{
                marginTop: 5,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Flex justify="center" align="center">
                <img
                  alt="example"
                  src={item.image}
                  style={{ height: 150, width: 125 }}
                />
              </Flex>
            </div>
          }
        >
          <Meta title={item.title} />
          <p>${item.price}</p>
        </Card>
      ))}
    </>
  );
};

export default Cart;
