# json.partial "api/videos/video", video: @video
json.extract! @video, :id, :caption, :creator_id #turned into json then returned to frontend
json.videoUrl url_for(@video.media) if @video.media.attached?


