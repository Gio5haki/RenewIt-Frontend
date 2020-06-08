import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Card from "../components/Card";
import "../styleSheets/Partners.css";

function Partners() {
  const [data, setData] = useState("");

  const fetchData = function () {
    fetch("http://localhost:8080/partners")
      .then((result) => result.json())
      .then((finalResult) => {
        setData(finalResult.rows);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(data);

  return (
    <div className="partners-container">

      <body>
        {data &&
          data.map((data, index) => {
            return (
              <Card
                key={index}
                link={data.link}
                imgSrc={data.imgurl}
                description={data.description}
              ></Card>
            );
          })}
      </body>

      <footer>
        <Footer></Footer>
      </footer>
      
    </div>
  );
}

export default Partners;
