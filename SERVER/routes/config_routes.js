const indexR = require("./index");
const sitesR = require("./sites");

exports.routesInit = (app)=>{
    app.use("/",indexR);
    app.use("/sites",sitesR);
}