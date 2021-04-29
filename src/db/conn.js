const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://register:pass123@cluster0.bihao.mongodb.net/registrationApp?retryWrites=true&w=majority", {
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true
})

.then(() => {
    console.log(`Connection Successful`);
})
.catch(() => {
    console.log(`No connction`);
})