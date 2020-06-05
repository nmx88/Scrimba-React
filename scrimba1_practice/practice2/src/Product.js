import React from "react";

export default function Product(props) {
  let styleContainer = {
    display: "inline-grid",
    backgroundColor: "rgba(5,200,100)",
    color: "rgba(200,1,245)",
    gridTemplateColumns: "200px 200px",
    margins: "10px 10px 10px 10px",
    padding: "10px 10px 10px 10px",
    textAlign: "center"
  };
  return (
    <div className="itemContainer" style={styleContainer}>
      <div>
        <h2>
          {props.product.name} (product code: {props.product.id})
        </h2>
        <p>
          $
          {props.product.price.toLocaleString("gr-GR", {
            style: "currency",
            currency: "USD",
          })}
            - {props.product.description}
        </p>
      </div>
    </div>
  );
}
