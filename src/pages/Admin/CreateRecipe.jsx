import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Input from "../../components/Input/Input";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import './CKEditorStyle.module.css'
import { CKEditor } from "@ckeditor/ckeditor5-react";

const CreateRecipe = () => {

  const config = {
    blockToolbar: {
      items: [ 'paragraph', 'heading1', 'heading2', '|', 'bulletedList', 'numberedList' ],
      shouldNotGroupWhenFull: true
    },
    ckfinder: {
      // Upload the images to the server using the CKFinder QuickUpload command.
      uploadUrl:
          // 'https://localhost:44374/api/v1/announcements/upload-file?command=QuickUpload&type=Images&responseType=json'
          'https://ckeditor.com/apps/ckfinder/3.4.5/core/connector/php/connector.php?command=QuickUpload&type=Files&responseType=json'
    },
    mediaEmbed: {
        previewsInData: true
    },

    table: {
        contentToolbar: ['tableColumn', 'tableRow', 'mergeTableCells']
    }
  };
  const classInput = " bg-white px-4 py-1 border-2 rounded-lg";

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
              <Input name="waktuResep" text="Lama Pembuatan" id="waktuResep" type="number" classname={classInput} />
              <Input name="porsiResep" text="Porsi" id="porsiResep" type="number" classname={classInput}/>
              <Input name="gambarResep" text="Gambar Resep" id="gambarResep" type="file" />
            </div>
            <label htmlFor="bahanResep">Bahan-Bahan</label>
            <CKEditor 
style={'padding: 20px'}
editor={ ClassicEditor }
                    config={config}
                    data=""
                    onReady={ editor => {
                        // You can store the "editor" and use when it is needed.
                    } }
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        console.log( { event, editor, data } );
                    } }
                    onBlur={ ( event, editor ) => {
                        console.log( 'Blur.', editor );
                    } }
                    onFocus={ ( event, editor ) => {
                        console.log( 'Focus.', editor );
                    } }
                />
          </form>
        </div>
      </div>
    </Sidebar>
  );
};

export default CreateRecipe;
