type HomePageProps = {
  title: string;
};

const HomePage = (props: HomePageProps) => {
  const { title } = props;
  return (
    <div
      style={{
        position: "absolute",
        left: "50%",
        transform: "translate(-50%)",
      }}
    >
      <span>
        <h1>HomePage</h1>
        <h6>Title: {title}</h6>
      </span>
    </div>
  );
};

export default HomePage;
