import useNews from "../../hooks/useNews";
import { useParams, Link } from "react-router-dom";
import { Typography, Flex, Button } from "antd";
import { changeDate } from "../../components/ultils/formatDate";
import  Loading  from "../../components/Loading/Loading";

const DetailLayout = () => {
    const { filteredData } = useNews();
  const { id } = useParams();
  const news = filteredData?.filter((item: any, index: number) => {
    if (index === Number(id)) {
      return item;
    }
  });

  const containerStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    gap: 20,
    width: "50%",
    margin: "auto",
    alignItems: "center",
    padding: 20,
  };
  return (
    <>
     {
      news && news ?
    <div style={containerStyle}>
      <Typography.Title level={2}>{news[0]?.title}</Typography.Title>
      <Flex gap="middle">
        <Typography.Text>{news[0]?.source.name}</Typography.Text>
        <Typography.Text>{changeDate(news[0]?.publishedAt)}</Typography.Text>
      </Flex>
      <img alt="avatar" src={news[0]?.urlToImage} style={{ width: "100%" }} />
      <Typography.Paragraph>
        {news[0]?.description}
        {news[0]?.content}
        <Link to={`${news[0]?.url}`} target="_blank">
        <Button type="link" size="small">
          Read More
        </Button>
        </Link>
      </Typography.Paragraph>
    </div>: <Loading/>

    }
    </>
  )
}

export default DetailLayout