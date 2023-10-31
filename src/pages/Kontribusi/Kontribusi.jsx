import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";

const Kontribusi = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_dwju9ir",
        "template_zpbz7d8",
        form.current,
        "5Yg2GRUQx-w3DDE7k"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="m-10">
      <div className="text-center">
        <h1 className="font-bold text-orange-400 text-6xl">
          Kontribusikan Resep Kamu!
        </h1>
      </div>
      <div className="mx-auto w-3/4  py-5">
        <p className="text-lg">
          Yuk, jadikan website ini semakin spesial dengan kontribusi resep-resep
          favoritmu selama di kos! Ajak teman-teman kos lainnya untuk berbagi
          kreasi kuliner mereka. Dengan bergabung, kita bisa menciptakan
          komunitas makanan kos yang lebih lezat dan berwarna. Ayo, bagikan
          resepmu sekarang! 🍽️😃
        </p>
      </div>

      <form ref={form} onSubmit={sendEmail} className="rounded w-1/2 mx-auto">
        <div className="my-16">
          <Input
            type="text"
            text="Nama"
            id="user_name"
            name="user_name"
            placeholder="Budi"
            classname="border-2 rounded-lg px-4 py-1"
          />
          <Input
            type="email"
            text="Email"
            id="user_email"
            name="user_email"
            placeholder="budi@gmail.com"
            classname="border-2 rounded-lg px-4 py-1"
          />
          <div className="flex flex-col my-4 gap-y-2">
            <label htmlFor="message" className="text-lg font-semibold ">
              Masukkan resep kamu
            </label>
            <textarea
              name="message"
              id="message"
              cols="73"
              rows="5"
              className="border-2 rounded-lg px-4 py-1"
            ></textarea>
            <p className="text-gray-400">
              <span className="text-red-400">* </span>Resep terdiri dari nama
              resep, deskripsi singkat terkait resep, waktu pembuatan, porsi
              dari resep, bahan resep, dan intruksi resep
            </p>
          </div>
          <Input
            name="gambarResep"
            text="Gambar Resep"
            id="gambarResep"
            classname="mb-8"
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
          <button className="text-center p-3 rounded-lg mx-auto bg-orange-500 text-white">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Kontribusi;
