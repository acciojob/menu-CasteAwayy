import { useState } from "react";
import React from "react";
import './../styles/styles.css';

const data = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./images/item-1.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "./images/item-2.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "./images/item-3.jpeg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "./images/item-4.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "./images/item-5.jpeg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "./images/item-6.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "./images/item-7.jpeg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "./images/item-8.jpeg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "./images/item-9.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];

export default function App() {
  const [sortBy, setSortBy] = useState("All");
  console.log(sortBy);
  const items = data.filter((item) => {
    return item.category === sortBy;
  });
  function handleClick(e) {
    setSortBy(e.target.textContent.toLowerCase());
  }
  return (
    <div id="main" className="menu">
      <h1 className="heading">Our Menu</h1>
      <CategoriesList onCategoryClick={handleClick} />
      <div className="list_items">
        {items.length
          ? items.map((item) => {
              return <Item key={item.id} item={item} />;
            })
          : data.map((item) => {
              return <Item key={item.id} item={item} />;
            })}
      </div>
    </div>
  );
}

function CategoriesList({ onCategoryClick }) {
  return (
    <div className="menu_categories">
      <ul className="categories_list">
        <li className="list_item" onClick={onCategoryClick}>
          All
        </li>
        <li id="filter-btn-1" className="list_item" onClick={onCategoryClick}>
          Breakfast
        </li>
        <li id="filter-btn-2" className="list_item" onClick={onCategoryClick}>
          Lunch
        </li>
        <li id="filter-btn-3" className="list_item" onClick={onCategoryClick}>
          Shakes
        </li>
      </ul>
    </div>
  );
}

function Item({ item }) {
  return (
    <div className="item" data-test-id={`menu-item-${item.category}`}>
      <img className="item_img" src={item.img} alt="image" />
      <div className="right_sec">
        <span className="item_title">{item.title}</span>
        <span className="item_price">${item.price}</span>
      </div>
      <p className="item_desc">{item.desc}</p>
    </div>
  );
}


