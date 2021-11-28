import React from "react";
import Sdata from "./Sdata";
import Card from "./Card";

function Service() {
  return (
    <div className="my-5">
      <h1 className="text-center">Our Services</h1>

      <div className="container-fluid mb-5 border bg-info p-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row g-4">
              {Sdata.map((val, index) => {
                return (
                  <Card
                    key={index}
                    imgsrc={val.imgsrc}
                    title={val.title}
                    content={val.content}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
