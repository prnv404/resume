import Koa from "koa";
import "dotenv/config";

const app = new Koa();

app.use((ctx) => {
  ctx.redirect(process.env.URL!);
});

app.listen(3000, () => {
  console.log("App is running on port 3000");
});
