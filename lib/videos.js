export const getCommonVideos = async url => {
  try {
    const response = await fetch(`${process.env.BASE_URL}/${url}&key=${process.env.YOUTUBE_API_KEY}`)
    const data = await response.json()
    console.log({ data })
    return data?.items?.map(video => ({
      title: video?.snippet?.title,
      imgUrl: video?.snippet?.thumbnails?.high?.url,
      id: video?.id?.videoId || video?.id?.playlistId || "fakeId"
    }))
  } catch (error) {
    console.log("Api Error", error)
    return Promise.resolve([])
  }
}

export const getVideos = q => {
  const URL = `search?part=snippet&maxResults=25&q=${q}`
  return getCommonVideos(URL)
}

//

export const getPopularVideos = () => {
  const URL = `videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=10&regionCode=US`
  return getCommonVideos(URL)
}
