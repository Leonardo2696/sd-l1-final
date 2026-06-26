import minimist from "minimist";
import { PelisCollection } from "./models"; // Asegúrate de importar tu clase

type Search = {
  title?: string;
  tag?: string;
};

function parseaParams(argv) {
  const resultado = minimist(argv);
  return resultado;
}

async function main() {
  const params = parseaParams(process.argv.slice(2));
  const pelisCollection = new PelisCollection();

  if (params._[0] === "search") {
    const searchOptions: Search = {};
    if (params.title) searchOptions.title = params.title;
    if (params.tag) searchOptions.tag = params.tag;

    const pelisFiltradas = await pelisCollection.search(searchOptions);
    console.log(pelisFiltradas);
  } else {
    console.log("Comando no reconocido. Usa 'get' o 'search'.");
  }
}

main();
