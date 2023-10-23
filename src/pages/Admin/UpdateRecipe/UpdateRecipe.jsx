import React from "react";
import Sidebar from "../../../components/Sidebar/Sidebar";
import Card from "../../../components/Card/Card";
import Button from "../../../components/Button/Button";

const UpdateRecipe = () => {
  return (
    <Sidebar>
      <div className="grid-cols-4 grid gap-x-10 gap-y-10">
        <div>
        <Card imgUrl="img/banner.jpg" recipeName="yesh" />
        <Button text='edit'/>
        </div>
        <div>
        <Card imgUrl="img/banner.jpg" recipeName="yesh" />
        <Button text='edit'/>
        </div>
        <div>
        <Card imgUrl="img/banner.jpg" recipeName="yesh" />
        <Button text='edit'/>
        </div>
        <div>
        <Card imgUrl="img/banner.jpg" recipeName="yesh" />
        <Button text='edit'/>
        </div>
        <div>
        <Card imgUrl="img/banner.jpg" recipeName="yesh" />
        <Button text='edit'/>
        </div>
        <div>
        <Card imgUrl="img/banner.jpg" recipeName="yesh" />
        <Button text='edit'/>
        </div>
      </div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
    </Sidebar>
  );
};

export default UpdateRecipe;
