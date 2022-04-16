export const App = () => {
    const onClickButton = () => {
      alert();
    };

    const contentPinkStyle = {
      color: "pink",
      fontSize: "20px"
    };

    return (
      <>
        <h1>Hello world!あ</h1>
        <p style={contentStyle}>お元気ですか？</p>
        <button onClick={onClickButton}>ボタン</button>
      </>
      );
};
