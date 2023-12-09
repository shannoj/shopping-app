import { Card, Flex, Image, Button } from "antd";

interface Data {
  image: string;
  title: string;
  price: string;
  id: number;
}

interface CartProps {
  data: Data[];
  removeButtonClick: (id: number) => void;
}

const { Meta } = Card;

const Cart = ({ data, removeButtonClick }: CartProps) => {
  return (
    <>
      {data.map((item: Data, index) => (
        <Card key={index}>
          <Flex justify="space-around" align="center">
            <div>
              <Image height={100} width={100} src={item.image}></Image>
            </div>
            <div>
              <Meta title={item.title}></Meta>
              <p style={{ marginLeft: 100 }}>{item.price}</p>
            </div>
            <Button onClick={() => (removeButtonClick(item.id))}type="primary">Remove</Button>
          </Flex>
        </Card>
      ))}
    </>
  );
};

export default Cart;
