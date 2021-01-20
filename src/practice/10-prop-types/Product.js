import React from "react";
import PropTypes from "prop-types";
import defaultImage from "../../assets/default-image.jpeg";

const Product = ({ name, price, image }) => {
  const url = image && image.url;
  return (
    <article className="product">
      {/* First way of setting default props  */}
      <img src={url || defaultImage} alt={name || "default name"} />
      <h4>{name || "default name"}</h4>
      <p>${price || 3.99}</p>
    </article>
  );
};
// Proptypes use to tell us the error in props
Product.propTypes = {
  image: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

// Second way of setting default props, Below we set the deafault value if we are getting error in recieving specific prop,
// Product.defaultProps = {
//   name: "default name",
//   price: 3.99,
//   image: defaultImage,
// };
export default Product;
