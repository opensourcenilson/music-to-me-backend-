import { url, type Root } from "./youtube.types"

export const searchForSong = async (query: string) => {
 const response = await fetch(url(query));
 const data: Root = await response.json()
 let songArray = []
 data.items.forEach(item => {
    songArray.push({
      "Title": item.snippet.title,
      "Thumbnail": item.snippet.thumbnails.default,
      "VideoId": `youtube.com/watch?v=${item.id.videoId}`
    })
 }) 
 return songArray
}
