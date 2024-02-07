import { Flex } from "antd";
import { changeDate } from "../ultils/formatDate";
import { Link } from "react-router-dom";
import { News } from "../../interface/newsInterface";

type newsProps = {
  dataNews: News;
  index?: number;
};

const NewsCard = ({ dataNews, index }: newsProps) => {
  const cardStyle: React.CSSProperties = {
    position: "relative",
    borderRadius: 3,
    height: "100%",
    overflow: "hidden",
  };

  const overlayStyle: React.CSSProperties = {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    background:
      "linear-gradient(to top, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.4))",
  };

  const imgStyle: React.CSSProperties = {
    position: "absolute",
    objectFit: "contain",
    width: "100%",
    zIndex: -1,
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  };

  const titleStyle: React.CSSProperties = {
    fontSize: index === 0 ? 25 : 15,
    fontWeight: "bold",
    color: "#ffff",
  };

  const authorStyle: React.CSSProperties = {
    fontSize: index === 0 ? 15 : 10,
    color: "#ffff",
    fontWeight: 500,
    marginBottom: 5,
  };

  const descStyle: React.CSSProperties = {
    fontSize: 12,
    color: "#ffff",
    marginBottom: 10,
  };

  const contentStyle: React.CSSProperties = {
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    bottom: 0,
    left: 0,
    right: 0,
    padding: 20,
  };

  return (
    <Flex style={cardStyle}>
      <Flex style={overlayStyle}>
        <img alt="avatar" src={dataNews.urlToImage} style={imgStyle} />
        <Flex
          vertical
          justify="flex-start"
          align="flex-start"
          style={contentStyle}
        >
          <Link to={`details/${index}`}>
            <p style={titleStyle}>
              {index === 0
                ? dataNews.title
                : dataNews.title.length > 55
                ? dataNews.title.slice(0, 56) + "..."
                : dataNews.title}
            </p>
            <p style={authorStyle}>{dataNews.source?.name}</p>
          </Link>
          <p style={descStyle}>{changeDate(dataNews.publishedAt)}</p>
          {index !== 0 ? (
            <p style={descStyle}>
              {dataNews.description.length > 55
                ? dataNews.description.slice(0, 56) + "..."
                : dataNews.description}
            </p>
          ) : (
            <p style={descStyle}>{dataNews.content}</p>
          )}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default NewsCard;
