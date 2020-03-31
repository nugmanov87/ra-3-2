import React from "react";

const Item = ({ item }) => {
  const getPrice = (price, currency) => {
    if (currency === "USD") {
      return `$${price}`;
    } else if (currency === "EUR") {
      return `€${price}`;
    }
    return `${price} GBP`;
  };

  const getQuantity = quantity => {
    if (quantity <= 10) {
      return "low";
    } else if (quantity <= 20) {
      return "medium";
    }
    return "high";
  };
  const getTitle = title => {
    return title.length > 50 ? `${title.substring(0, 50)}…` : title;
  };
  const quantityClass = `item-quantity level-${getQuantity(item.quantity)}`;
  return item.state === "active" ? (
    <div className="item">
      <div className="item-image">
        <a href={item.url}>
          <img src={item.MainImage.url_570xN} alt="item" />
        </a>
      </div>
      <div className="item-details">
        <p className="item-title">{getTitle(item.title)}</p>
        <p className="item-price">{getPrice(item.price, item.currency_code)}</p>
        <p className={quantityClass}>{`${item.quantity} left`}</p>
      </div>
    </div>
  ) : null;
};

export default Item;
