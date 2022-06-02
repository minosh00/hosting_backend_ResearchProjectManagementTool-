const express = require("express");
const dotenv = require("dotenv");
const fileupload = require('express-fileupload'); 
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const user = require("./Routes/userRoutes");


//pdf

dotenv.config();

app.use(cors({


  origin: "*",
}));








const PORT = process.env.PORT || 8080;


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//use Routes
app.use("/user",user);
app.use("/pdfupload", require("./Routes/PdfUploadRoutes"));
app.use("/upload", require("./Routes/FileTemplateUploadRoutes"));
app.use("/UploadAssignment", require("./Routes/UploadAssigmentRoutes"));
app.use("/gruops", require("./Routes/GroupRoutes"));
app.use("/SupervisorRequest", require("./Routes/SupervisorRequestRoutes"));
app.use("/CoSupervisorRequest", require("./Routes/CoSupervisorRequestRoutes"));
app.use("/marking", require("./Routes/MarkingSchemesRoutes"));



app.use("/topicsrequest", require("./Routes/TopicRoutesUpdte"));


//DB connection

mongoose.connect(
  process.env.MDB_CONNECT_STRING, {
    //type warnings
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Mongo DB connected successfully");
  })

  .catch((err) => console.log("DB connection failed", err));

app.listen(PORT, () => {
  console.log(`App is running on ${PORT}`);
});



//chat sysytem
const http = require("http");
const { Server } = require("socket.io");


const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log(`User Connected: ${socket.id}`);

  socket.on("join_room", (data) => {
    socket.join(data);
    console.log(`User with ID: ${socket.id} joined room: ${data}`);
  });

  socket.on("send_message", (data) => {
    socket.to(data.room).emit("receive_message", data);
  });

  socket.on("disconnect", () => {
    console.log("User Disconnected", socket.id);
  });
});

server.listen(3001, () => {
  console.log(" RUNNING ON PORT 3001");
});