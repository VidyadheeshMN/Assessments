import { useEffect, useState } from "react";
const APIURL = "http://localhost:8000/images";
export default function Task2() {
  const [imgArr, setImgArr] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    fetch(APIURL).then((res) =>
      res.json().then(async (res) => {
        const difImages = [...res];
        for (let i = 0; i < difImages.length; i++) {
          for (let j = 0; j < difImages[i].length; j++) {
            difImages[i][j].url &&
              (await fetch(difImages[i][j].url)
                .then((res) => res.blob())
                .then((res) => {
                  difImages[i][j].url = URL.createObjectURL(res);
                }));
          }
        }

        console.log("images: ", difImages);
        setImgArr(difImages);
      })
    );
  }, []);

  return (
    <table
      style={{
        padding: "5px",
        margin: "auto",
        borderCollapse: "collapse",
        width: "fit-content",
        boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
      }}
    >
      <tbody>
        {imgArr &&
          imgArr.map((e, i) => (
            <tr key={i}>
              {e.map((el, idx) => (
                <td
                  key={idx}
                  style={{
                    position: "relative",
                    width: "50px",
                    height: "50px",
                    border: "1px solid",
                  }}
                  onMouseEnter={() => setHoveredIndex(`${i}${idx}`)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {hoveredIndex === `${i}${idx}` && el.url && (
                    <div
                      style={{
                        position: "absolute",
                        zIndex: 1,
                        width: "20px",
                        height: "20px",
                      }}
                    >
                      <div
                        style={{
                          background: "white",
                        }}
                      >
                        <span
                          style={{ fontSize: "12px", whiteSpace: "nowrap" }}
                        >{`X=${i + 1}, Y=${idx + 1}`}</span>
                      </div>
                      {el.url && (
                        <img
                          style={{ padding: "10px", height: "60px" }}
                          src={el.url}
                        />
                      )}
                    </div>
                  )}
                </td>
              ))}
            </tr>
          ))}
      </tbody>
    </table>
  );
}
