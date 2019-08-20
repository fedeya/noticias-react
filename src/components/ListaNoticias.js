import React from "react";
import Noticia from "./Noticia";
import PropTypes from "prop-types"

function ListaNoticias({noticias}){
  return (
    <div className="row">
      {noticias.map((noticia, key) => (
        <Noticia
          noticia={noticia}
          key={key}
        />
      ))}
    </div>
  );
}

ListaNoticias.propTypes = {
  noticias: PropTypes.array.isRequired
}

export default ListaNoticias;