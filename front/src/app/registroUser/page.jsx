import FormUser from "../../components/registroUser/FormUser";


const postData = async (postData) => {
  try {
    const res = await fetch("https://rickandmortyapi.com/api/character", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Aquí puedes añadir otros headers si son necesarios, como tokens de autenticación
      },
      body: JSON.stringify(postData), // Convierte el objeto postData a JSON
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Fallo la solicitud POST");
    }

    return res.json(); // Devuelve la respuesta como JSON
  } catch (error) {
    console.error("Error al realizar la solicitud POST: ", error);
    // Puedes manejar el error de otra forma según tus necesidades, como lanzando una excepción o retornando un objeto de error personalizado
    return { error: error.message };
  }
};


export default async function RegisterUser() {
  const data = await postData();
  //console.log(data);
  const datafull = data.results;
  console.log(datafull);
  return (
    <>
     <div className="">
        <div
          style={{
            backgroundImage: `url('https://www.elestudiante.com.co/wp-content/uploads/2020/02/sena-aprendizaje-1.jpg')`,
            backgroundSize: "cover",
         
    
          }}
        >
          <div className="p-16 "><FormUser  ></FormUser></div>
        </div>
      </div>
                  {datafull?.map((dato) => (
                    
                  ))}
                
    </>
  );
}