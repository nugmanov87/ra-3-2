import React from "react";
import Item from "./Item";
import shortid from "shortid";

const Listing = ({ items }) => {
  return (
    <div className="item-list">
      {items.map(item => (
        <Item item={item} key={shortid.generate()} />
      ))}
    </div>
  );
};

Listing.defaultProps = {
  items: []
};

export default Listing;
