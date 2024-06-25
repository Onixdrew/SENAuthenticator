import Link from "next/link";

const getCharacters = async () => {
  try {
    const res = await fetch("https://rickandmortyapi.com/api/character");

    if (!res.ok) {
      throw new Error("Fallo la Busqueda de Personajes");
    }

    return res.json();
  } catch (error) {
    console.log("Error al cargar personajes: ", error);
  }
};

export default async function GetCharactersComponent() {
  const data = await getCharacters();
  const characters = data?.results || []; // Manejar el caso donde data es undefined

  return (
    <>
      <div className="text-right">
        <Link
          className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          href={"/dashboardadmin/crearcategorias"}
        >
          Agregar Categoria
        </Link>
      </div>
      <br />
      <div className="relative overflow-x-auto">
        <div>
          <h1>Rick and Morty Characters</h1>
          <ul>
            {characters.map((character) => (
              <li key={character.id}>
                <h2>{character.name}</h2>
                <img src={character.image} alt={character.name} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
