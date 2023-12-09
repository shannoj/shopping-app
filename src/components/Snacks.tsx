import { Card, Flex, Button, Result } from "antd";
import { Skeleton } from "antd";

const { Meta } = Card;

interface Data {
  image: string;
  title: string;
  price: string;
  id: number;
}

interface SnackProps {
  data: Data[];
  error: null | string;
  loading: boolean;
  //addButtonClick: (id: number) => void;
}

const Snacks = ({ data, error, loading }: SnackProps) => {
  return (
    <>
      {error ? (
        <Result status="warning" title="Error Loading"></Result>
      ) : loading ? (
        <Skeleton active></Skeleton>
      ) : (
        <Flex justify="center" align="center" gap="middle" wrap="wrap">
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
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <p>${item.price}</p>
                <Button
                  //onClick={() => addButtonClick(item.id)}
                  style={{ width: 100 }}
                  type="primary"
                  block
                >
                  Add to Cart
                </Button>
              </div>
            </Card>
          ))}
        </Flex>
      )}
    </>
  );
};

export default Snacks;
