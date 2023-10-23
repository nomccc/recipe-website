import React, { useState } from "react";
import Sidebar from "../../../components/Sidebar/Sidebar";
import Input from "../../../components/Input/Input";
import Button from "../../../components/Button/Button";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const CreateRecipe = () => {
  const classInput = " bg-white px-4 py-1 border-2 rounded-lg";
  const [desc, setDesc] = useState("");

  return (
    <Sidebar>
      <div>
        <h1 className="text-center text-3xl font-bold">Buat Resep</h1>
        <div>
          <form action="" className="flex flex-col mx-20 my-10">
            <Input
              type="text"
              id="namaResep"
              text="Nama Resep"
              classname={classInput}
            />
            <label
              htmlFor="deskripsiResep"
              className="mt-5 my-2 text-lg font-semibold"
            >
              Deskripsi Resep
            </label>
            <textarea
              name="deskripsiResep"
              id="deskripsiResep"
              cols="30"
              className={classInput}
              rows="3"
            ></textarea>
            <div className="grid grid-cols-3 my-5 gap-x-20">
              <Input
                name="waktuResep"
                text="Lama Pembuatan"
                id="waktuResep"
                type="number"
                classname={classInput}
              />
              <Input
                name="porsiResep"
                text="Porsi"
                id="porsiResep"
                type="number"
                classname={classInput}
              />
              <Input
                name="gambarResep"
                text="Gambar Resep"
                id="gambarResep"
                type="file"
              />
            </div>
            <div id="bahanResep" className="my-5 font-semibold">
            <label htmlFor="bahanResep">Bahan-Bahan</label>
            <ReactQuill
            className="my-2"
            id="bahanResep"
              theme="snow"
              value={desc}
              onChange={(e) => 
                console.log(e.target.value)}
            />
            </div>
            <div id="intruksiResep" className="my-5">
            <label htmlFor="intruksiResep" className=" font-semibold">Langkah-Langkah</label>
            <ReactQuill
            className="my-2"
            id="intruksiResep"
              theme="snow"
              value={desc}
              onChange={(e) => 
                console.log(e.target.value)}
            />
            </div>
            <Button id="submitCreate" text="Posting"/>
          </form>
        </div>
      </div>
    </Sidebar>
  );
};

export default CreateRecipe;
