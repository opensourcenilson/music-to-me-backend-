import { Elysia } from "elysia"
import { searchForSong } from "./youtube/youtube.controller"
const app = new Elysia()
  // .use(youtubeApi)
  .get("/api/search/:query", ({ params: { query } }) => searchForSong(query))
  .listen(3000, () => console.log("Server running on port 3000"))

