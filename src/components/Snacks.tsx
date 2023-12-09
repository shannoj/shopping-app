import { useEffect, useState } from "react";
import { Card, Flex } from "antd";
import { height } from "@fortawesome/free-brands-svg-icons/fa42Group";

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
      <Flex justify="center" align="center" gap="middle" wrap="wrap">
        {data.map((item, index) => (
          <Card
            hoverable={true}
            style={{ height: 275, width: 300, marginTop: 5, marginBottom: 5}}
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
      </Flex>
    </>
  );
};

export default Snacks;
