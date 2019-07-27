var socket = new WebSocket("ws://localhost:8083/ws")

let connect = () => {
    console.log("Attempting connecttion...");

    socket.onopen = () => {
        console.log("Successfully connected");
    };

    socket.onmessage = msg => {
        console.log("msg")
    };

    socket.onclose = event => {
        console.log("Socket Closed Connection: ", event);
    };

    socket.onerror = error => {
        console.log("Socket Error: ", error);
      };
};

let sendMsg = msg => {
    console.log("Sending message: ", msg);
    socket.send(msg)
};

export { connect, sendMsg };