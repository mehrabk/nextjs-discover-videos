import videoData from "../data/videos.json"

const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY
export const getVideos = async () => {
  const response = await fetch(
    `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=game%20of%20throne&key=${YOUTUBE_API_KEY}`
  )
  const data = await response.json()

  return data.items.map(video => ({
    title: video.snippet.title,
    imgUrl: video.snippet.thumbnails.high.url,
    id: video?.id?.videoId || video?.id?.playlistId || "fakeId"
  }))
}
