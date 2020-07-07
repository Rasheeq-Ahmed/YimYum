# json.partial "api/videos/video", video: @video
# json.extract! @video, :id, :caption, :creator_id #turned into json then returned to frontend
# json.videoUrl url_for(@video.media) if @video.media.attached?
# json.creator @video.creator.username



json.partial! 'api/videos/video', video: @video 


json.likes do
    @video.likes.each do |like|
        json.set! like.id do
            json.partial!('api/likes/like', like: like)
        end
    end
end