import React, { useMemo, useRef, useState } from "react";
import Sidebar from "../../../components/Sidebar/Sidebar";
import Input from "../../../components/Input/Input";
import Button from "../../../components/Button/Button";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import parse from "html-react-parser";
import { postRecipe } from "../../../api/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CreateRecipe = () => {
  const [berhasil, setBerhasil] = useState(false);

  const classInput = " bg-white px-4 py-1 border-2 rounded-lg";
  const editorRef = useRef(null);
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };

  const notify = () => toast.success('Buat resep berhasil!', {
    position: "top-center",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    });;

  const [recipe, setRecipe] = useState({
    id: 1,
    pembuatResep: "",
    namaResep: "",
    deskripsiResep: "",
    waktuResep: "",
    porsiResep: "",
    gambarResep: "",
    bahanResep: "",
    intruksiResep: "",
  });

  const [error, setError] = useState({
    pembuatResep: "",
    namaResep: "",
    deskripsiResep: "",
    waktuResep: "",
    porsiResep: "",
    gambarResep: "",
    bahanResep: "",
    intruksiResep: "",
  });

  function checkLength(propertyName, value, propertyString) {
    if (value.length >= 25) {
      setError((prevError) => ({
        ...prevError,
        [propertyName]: `${propertyString} tidak boleh lebih dari 30 karakter`,
      }));
    } else {
      setError((prevError) => ({
        ...prevError,
        [propertyName]: "",
      }));
    }
  }

  function cekResepValid() {
    const isiResep = [
      recipe.pembuatResep,
      recipe.namaResep,
      recipe.deskripsiResep,
      recipe.waktuResep,
      recipe.porsiResep,
      recipe.gambarResep,
      recipe.bahanResep,
      recipe.intruksiResep,
    ];

    const isNamaResepValid = isiResep.every((item) => {
      // Melakukan pengecekan apakah item adalah namaResep yang kosong atau null
      return (item !== recipe.namaResep.trim()) === "" || item === null;
    });

    return isNamaResepValid;
  }

  function checkSubmit(event) {
    if (!cekResepValid) {
      setBerhasil(false);
      console.log("tidak valid");
    } else {
      event.preventDefault();

      // menghitung id berdasarkan id sebelumnya
      const newId = recipe.id + 1;

      const newRecipe = {
        ...recipe,
        id: newId,
      };

      //  dorong data ke mockapi
      postRecipe(recipe);

      // Reset form
      setRecipe({
        id: newRecipe,
        productName: "",
        productCategory: "",
        productImage: "",
        productFreshness: "",
        productDescription: "",
        productPrice: "",
      });

      setBerhasil(true);
      notify()
    }
  }

  return (
    <Sidebar>
      {!berhasil ? (
        <ToastContainer
        
        />
      ) : (
        ""
      )}
      <div>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </div>
      <div>
        <h1 className="text-center text-3xl font-bold">Buat Resep</h1>
        <div>
          <form
            action=""
            className="flex flex-col mx-20 my-10"
            id="formRecipe"
            onSubmit={(e) => {
              checkSubmit(e);
            }}
          >
            <Input
              type="text"
              id="namaResep"
              text="Nama Resep"
              maxLength={30}
              classname={classInput}
              value={recipe.namaResep}
              onChange={(e) => {
                setRecipe((old) => {
                  return {
                    ...old,
                    namaResep: e.target.value,
                  };
                });
                checkLength("namaResep", e.target.value, "Nama resep");
              }}
            />
            <p className="text-red-500 pb-2">{error.namaResep}</p>
            <Input
              type="text"
              id="pembuatResep"
              text="Pembuat Resep"
              classname={classInput}
              maxLength={30}
              value={recipe.pembuatResep}
              onChange={(e) => {
                setRecipe((old) => {
                  console.log(e.target.value);
                  return {
                    ...old,
                    pembuatResep: e.target.value,
                  };
                });
                checkLength("Pembuat resep", e.target.value, "Nama resep");
              }}
            />
            <p className="text-red-500 pb-2">{error.pembuatResep}</p>
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
                  return {
                    ...old,
                    deskripsiResep: e.target.value,
                  };
                });
              }}
            ></textarea>
            <div className="grid grid-cols-3 my-5 gap-x-20">
              <div>
                <Input
                  maxLength={15}
                  name="waktuResep"
                  text="Lama Pembuatan"
                  id="waktuResep"
                  type="text"
                  classname={classInput}
                  value={recipe.waktuResep}
                  onChange={(e) => {
                    setRecipe((old) => {
                      return {
                        ...old,
                        waktuResep: e.target.value,
                      };
                    });
                  }}
                />
                <p className="text-xs text-gray-400 px-2">
                  {" "}
                  <span className="text-red-500">*</span> Gunakan format
                  seperti: 45 detik, 15 menit, atau 2 jam
                </p>
              </div>
              <div>
                <Input
                  placeholder="4 orang"
                  name="porsiResep"
                  text="Porsi"
                  id="porsiResep"
                  type="text"
                  classname={classInput}
                  value={recipe.porsiResep}
                  onChange={(e) => {
                    setRecipe((old) => {
                      return {
                        ...old,
                        porsiResep: e.target.value,
                      };
                    });
                  }}
                />
              </div>
              <div>
                <Input
                  name="gambarResep"
                  text="Gambar Resep"
                  id="gambarResep"
                  type="file"
                  onChange={(e) => {
                    const file = e.target.files[0];
                    if (
                      file &&
                      (file.type === "image/jpeg" || file.type === "image/png")
                    ) {
                      setRecipe((old) => {
                        return {
                          ...old,
                          gambarResep: URL.createObjectURL(e.target.files[0]),
                        };
                      });
                    } else {
                      setError({
                        ...error,
                        gambarResep: "Please choose a JPG or PNG file",
                      });
                    }
                  }}
                />
                <p className="text-red-500 pb-2">{error.gambarResep}</p>
              </div>
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
