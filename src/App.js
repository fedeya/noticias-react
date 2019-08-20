import React, {Component} from "react";
import Header from "./components/Header";
import ListaNoticias from "./components/ListaNoticias";
import Formulario from "./components/Formulario";
import config from "./config";

class App extends Component{

  state = {
    noticias: []
  }

  async componentDidMount(){
    this.consultarNoticias();
  }

  consultarNoticias = async (category = "general") => {
    const url = `https://newsapi.org/v2/top-headlines?country=ar&category=${category}&apiKey=${config.apiKey}`

    const res = await fetch(url);
    const noticias = await res.json();

    this.setState({noticias: noticias.articles});
  }

  render(){
    return (
      <React.Fragment>
        <Header titulo="Noticias React API" />
        <div className="container white contenedor-noticias">
          <Formulario consultarNoticias={this.consultarNoticias} />
          <ListaNoticias noticias={this.state.noticias} />
        </div>
      </React.Fragment>
    )
  }
}

export default App;
