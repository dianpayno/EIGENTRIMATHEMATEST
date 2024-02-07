import { Spin } from "antd";

const Loading = () => {
  const Overlaystyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    gap: 20,
    justifyContent: "center",
    alignItems: "center",
    position: "fixed",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 9999,
    color: "white",
  };
  return (
    <div style={Overlaystyle}>
      <Spin size="large"></Spin>
    </div>
  );
};

export default Loading;
