import { useState, useEffect } from "react";
const APIURL = "http://localhost:8000/root";
const Tree = (props) => {
  const data = props.data;
  return (
    <div style={{ marginLeft: "3rem" }}>
      {data?.map((node) => (
        <TreeNode node={node} key={node.label} />
      ))}
    </div>
  );
};

const TreeNode = ({ node }) => {
  const { children, label } = node;
  const [showChildren, setShowChildren] = useState(false);
  return (
    <div>
      <div
        onClick={() => {
          setShowChildren(!showChildren);
        }}
        style={{
          display: "block",
          boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
          padding: "5px",
          marginBottom: "5px",
          marginTop: "5px",
          marginLeft: "auto",
          marginRight: "auto",
          width: "fit-content",
        }}
      >
        <span>{label}</span>
      </div>
      {showChildren && children && <Tree data={children} />}
    </div>
  );
};

function Task3() {
  const [data, setData] = useState();
  useEffect(() => {
    fetch(APIURL)
      .then((result) => result.json())
      .then((result) => {
        setData(result);
      });
  }, []);

  return (
    <div className='App' style={{ margin: "auto" }}>
      <Tree data={data} />
    </div>
  );
}

export default Task3;
