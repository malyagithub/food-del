import React from "react";
import "./ExploreMenu.css";
import { menu_list } from "../../assets/assets";

const ExploreMenu = ({category,setCategory}) => {
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
    return (







    <div className="explore-menu" id="explore-menu">
      <h1>Explore our menu</h1>
      <p className="explore-menu-text">
        Discover a menu that blends flavors and creativity, offering something
        for every taste. From comforting classics to unique specialties, every
        dish is crafted with care to bring joy to your table. Indulge in
        excellence, one bite at a time.
      </p>
      <div className="explore-menu-list">
        {menu_list.map((item, index) => {
          return (
            <div
            onClick={()=> setCategory(prev=>prev===item.menu_name ? "All" : item.menu_name)}
            
            key={index} className="explore-menu-list-item">
              <img 
              className={category===item.menu_name?"active":""}
              src={item.menu_image} alt="" />
              <p>{item.menu_name}</p>

            </div>
          );
        })}
      </div>
<hr />


    </div>
  );
};

export default ExploreMenu;
