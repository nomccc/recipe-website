import React from "react";
import Card from "../../components/Card/Card";
import Sidebar from "../../components/Sidebar/Sidebar";

const ReadRecipe = () => {
  return (
    <Sidebar>
      <div className="grid grid-cols-3 gap-8">
        <Card imgUrl="img/banner.jpg" recipeName="yesh" />
        <Card imgUrl="img/banner.jpg" recipeName="yesh" />
        <Card imgUrl="img/banner.jpg" recipeName="yesh" />
        
      </div>
      
    </Sidebar>
  );
};

export default ReadRecipe;
