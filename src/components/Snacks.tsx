import { Card, Flex, Button, Result } from "antd";
import { Skeleton } from "antd";
import { Data } from "../types";

const { Meta } = Card;

interface SnackProps {
  error: null | string;
  loading: boolean;
  addButtonClick: (id: number) => void;
  data: Data[];
}

const Snacks = ({data, error, loading, addButtonClick }: SnackProps) => {
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
                <p>${parseInt(item.price).toFixed(2)}</p>
                <Button
                  onClick={() => addButtonClick(item.id)}
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
