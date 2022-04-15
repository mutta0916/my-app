import ReactDOM from "react-dom";

const App = () => {
  return (
    <>
      <h1>Hello world!あ</h1>
      <p>お元気ですか？</p>
      <table border="1">
        <tr>
          <th>名前</th>
          <th>レベル</th>
          <th>属性</th>
        </tr>
        <tr>
          <td>ゆった</td>
          <td>1</td>
          <td>無</td>
        </tr>
        <tr>
          <td>ぱい</td>
          <td style={{ color: `red` }}>0</td>
          <td>のーまる</td>
        </tr>
      </table>
    </>
    );
  ;
};

ReactDOM.render(<App />, document.getElementById("root"));