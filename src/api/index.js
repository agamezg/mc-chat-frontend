var socket = new WebSocket("ws://mc.backendapp:8083/ws")

let connect = cb => {
    console.log("Conectando...");

    socket.onopen = () => {
        console.log("Conexión exitosa");
    };

    socket.onmessage = msg => {
        console.log(msg)
        cb(msg)
    };

    socket.onclose = event => {
        console.log("Conexión del socket cerrada: ", event);
    };

    socket.onerror = error => {
        console.log("Error en el socket: ", error);
      };
};

let sendMsg = msg => {
    console.log("Enviando mensaje: ", msg);
    socket.send(msg)
};

export { connect, sendMsg };