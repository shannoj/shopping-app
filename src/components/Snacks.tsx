import { useEffect, useState } from "react";
import { Card, Flex, Button, Space } from "antd";
import { Skeleton } from "antd";

const { Meta } = Card;

const Snacks = () => {
  const [data, setData] = useState<any[]>([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      {loading ? (
        <Skeleton active></Skeleton>
      ) : (
        <Flex justify="center" align="center" gap="middle" wrap="wrap">
          {data.map((item, index) => (
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
                <Button style={{width: 100}} type="primary" block>
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
