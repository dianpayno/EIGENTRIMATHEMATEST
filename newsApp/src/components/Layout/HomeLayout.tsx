import NewsCard from "../Card/NewsCard";
import useNews from "../../hooks/useNews";
import { Row, Col } from "antd";
import Loading from "../../components/Loading/Loading";

const HomeLayout: React.FC = () => {
  const { filteredData, isLoading } = useNews();
  const cardContainerStyle: React.CSSProperties = {
    width: "100%",
    padding: "30px",
    margin: "auto",
  };
  return (
    <>
      {isLoading && <Loading />}
      <div></div>
      <Row style={cardContainerStyle}>
        {filteredData?.map((item: any, index: number) => {
          return (
            <Col
              key={index}
              span={index === 0 ? 12 : 6}
              style={{
                padding: 10,
                height: 400,
              }}
            >
              <NewsCard dataNews={item} index={index} />
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default HomeLayout;
