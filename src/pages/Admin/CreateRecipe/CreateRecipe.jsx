import React, { useMemo, useRef, useState } from "react";
import Sidebar from "../../../components/Sidebar/Sidebar";
import Input from "../../../components/Input/Input";
import Button from "../../../components/Button/Button";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

import parse from "html-react-parser";

const CreateRecipe = () => {
  const classInput = " bg-white px-4 py-1 border-2 rounded-lg";
  const editorRef = useRef(null);
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };

  const [recipe, setRecipe] = useState({
    id: "",
    namaResep: "",
    deskripsiResep: "",
    waktuResep: "",
    porsiResep: "",
    gambarResep: "",
    bahanResep: "",
    intruksiResep: "",
  });

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
              value={recipe.namaResep}
              onChange={(e) => {
                setRecipe((old) => {
                  console.log(e.target.value);
                  return {
                    ...old,
                    namaResep: e.target.value,
                  };
                });
              }}
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
              value={recipe.deskripsiResep}
              rows="3"
              onChange={(e) => {
                setRecipe((old) => {
                  console.log(e.target.value);
                  return {
                    ...old,
                    deskripsiResep: e.target.value,
                  };
                });
              }}
            ></textarea>
            <div className="grid grid-cols-3 my-5 gap-x-20">
              <Input
                name="waktuResep"
                text="Lama Pembuatan"
                id="waktuResep"
                type="number"
                classname={classInput}
                value={recipe.waktuResep}
                onChange={(e) => {
                  setRecipe((old) => {
                    console.log(e.target.value);
                    return {
                      ...old,
                      waktuResep: e.target.value,
                    };
                  });
                }}
              />
              <Input
                name="porsiResep"
                text="Porsi"
                id="porsiResep"
                type="number"
                classname={classInput}
                value={recipe.porsiResep}
                onChange={(e) => {
                  setRecipe((old) => {
                    console.log(e.target.value);
                    return {
                      ...old,
                      porsiResep: e.target.value,
                    };
                  });
                }}
              />
              <Input
                name="gambarResep"
                text="Gambar Resep"
                id="gambarResep"
                type="file"
                value={recipe.gambarResep}
                onChange={(e) => {
                  setRecipe((old) => {
                    console.log(e.target.value);
                    return {
                      ...old,
                      gambarResep: e.target.value,
                    };
                  });
                }}
              />
            </div>
            <div id="bahanResep" className="my-5 ">
              <label className="font-semibold" htmlFor="bahanResep">
                Bahan-Bahan
              </label>
              <ReactQuill
                className="my-2"
                id="bahanResep"
                theme="snow"
                value={recipe.bahanResep}
                onChange={(value) => {
                  console.log(value);
                  setRecipe((prev) => {
                    return {
                      ...prev,
                      bahanResep: value,
                    };
                  });
                }}
              />
            </div>
            <div id="intruksiResep" className="my-5">
              <label htmlFor="intruksiResep" className=" font-semibold">
                Langkah-Langkah
              </label>
              <ReactQuill
                className="my-2"
                id="bahanResep"
                theme="snow"
                value={recipe.intruksiResep}
                onChange={(value) => {
                  console.log(value);
                  setRecipe((prev) => {
                    return {
                      ...prev,
                      intruksiResep: value,
                    };
                  });
                }}
              />
            </div>
            <Button id="submitCreate" text="Posting" />
          </form>
        </div>
      </div>
    </Sidebar>
  );
};

export default CreateRecipe;
