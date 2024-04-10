import React, { useState, useEffect } from "react";
import { GiBurningForest, GiSeagull, GiRiver } from "react-icons/gi";
import Header from "./Header";
import Footer from "./Footer";
function App() {
  const [imagen, setImagen] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    const { VITE_GALERIA } = import.meta.env;
    const options = {
      method: "GET",
      signal: controller.signal,
    };

    fetch(VITE_GALERIA, options)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const fotos = data.photos.photo;
        let urlFotos = fotos.map((foto) => {
          let idFarm = foto.farm;
          let serverId = foto.server;
          let id = foto.id;
          let title = foto.title;
          let secret = foto.secret;
          return `https://farm${idFarm}.staticflickr.com/${serverId}/${id}_${secret}.jpg`;
        });
        setImagen(urlFotos);
      })

      .catch((err) => console.log(err))
      .finally(() => controller.abort());
  }, []);

  return (
    <>
    <Header/>
      <h1 className="galeria__h2">Galeria de Imagenes</h1>
      <div className="galeria__contenedor">
        <div className="galeria__box">
          <div className="box__uno">
            <img
              className="galeria__img"
              src={imagen[0]}
              alt="imagen de una garza real"
            />
          </div>
          <div className="box__reverso--a">
            <p className="box__p">{<GiSeagull />}</p>
            <p className="box__p">Nature</p>
          </div>
        </div>
        <div className="galeria__box">
          <div className="box__uno">
            <img
              className="galeria__img"
              src={imagen[1]}
              alt="iamgen de un cardo marino"
            />
          </div>

          <div className="box__reverso--b">
            <p className="box__p">{<GiBurningForest />}</p>
            <p className="box__p">Natur</p>
          </div>
        </div>

        <div className="galeria__box">
          <div className="box__uno">
            <img
              className="galeria__img"
              src={imagen[3]}
              alt="imagen flores amarillas "
            />
          </div>

          <div className="box__reverso--c">
            <p className="box__p">{<GiRiver />}</p>
            <p className="box__p">Aard</p>
          </div>
        </div>

        <div className="galeria__box">
          <div className="box__uno">
            <img
              className="galeria__img"
              src={imagen[4]}
              alt="imagen de una villa"
            />
          </div>

          <div className="box__reverso--a">
            <p className="box__p">{<GiSeagull />}</p>
            <p className="box__p">naturalesa</p>
          </div>
        </div>

        <div className="galeria__box">
          <div className="box__uno">
            <img
              className="galeria__img"
              src={imagen[5]}
              alt="imagen del atardecer"
            />
          </div>

          <div className="box__reverso--b">
            <p className="box__p">{<GiBurningForest />}</p>
            <p className="box__p">natureza</p>
          </div>
        </div>

        <div className="galeria__box">
          <div className="box__uno">
            <img
              className="galeria__img"
              src={imagen[6]}
              alt="imagen saliente de un rio"
            />
          </div>

          <div className="box__reverso--c">
            <p className="box__p">{<GiRiver />}</p>
            <p className="box__p">Natura</p>
          </div>
        </div>

        <div className="galeria__box">
          <div className="box__uno">
            <img
              className="galeria__img"
              src={imagen[8]}
              alt="imagen de un gato"
            />
          </div>

          <div className="box__reverso--a">
            <p className="box__p">{<GiSeagull />}</p>
            <p className="box__p">natură</p>
          </div>
        </div>

        <div className="galeria__box">
          <div className="box__uno">
            <img
              className="galeria__img"
              src={imagen[9]}
              alt="pasajes de un gato"
            />
          </div>

          <div className="box__reverso--c">
            <p className="box__p">{<GiBurningForest />}</p>
            <p className="box__p">natuur</p>
          </div>
        </div>

        <div className="galeria__box">
          <div className="box__uno">
            <img
              className="galeria__img"
              src={imagen[10]}
              alt="imagen de par de monitos"
            />
          </div>

          <div className="box__reverso--b">
            <p className="box__p">{<GiRiver />}</p>
            <p className="box__p">dabu</p>
          </div>
        </div>

        <div className="galeria__box">
          <div className="box__uno">
            <img
              className="galeria__img"
              src={imagen[11]}
              alt="imagen de abejaruco europeo"
            />
          </div>

          <div className="box__reverso--a">
            <p className="box__p">{<GiSeagull />}</p>
            <p className="box__p">Příroda</p>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default App;
