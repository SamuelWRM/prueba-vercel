const controller = new AbortController();

function TimeOutFunc() {
  controller.abort();
}

//async sirve para cuando se utiloce el await
async function GetMethod() {
  const get_time = setTimeout(TimeOutFunc(), 5000);
  var getbox = document.getElementById("getResponse");

  try {
    getbox.innerText = "Enviando peticion...";
    const respuesta = await fetch("https://libs-mentor-shirts-ellen.trycloudflare.com/estado");
    const datos = await respuesta.json();

    //el datos. "valor" hace referencia a la llave del diccionario
    getbox.innerText = datos.valor;
  } catch {
    getbox.innerText = "Error al recuperar los datos";
  }
}

async function PostMethod() {
  const post_time = setTimeout(TimeOutFunc(), 5000);

  var postbox = document.getElementById("postResponse");
  var txtPostvalue = document.getElementById("postBody").value;

  postbox.innerText = "Enviando datos...";
  // sintaxis del post
  try {
    const respuesta = await fetch("https://libs-mentor-shirts-ellen.trycloudflare.com/mod", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ num: txtPostvalue }),
    });

    postbox.innerText = "Datos enviados";
  } catch {
    postbox.innerText = "Error al enviar los datos";
  }
}
