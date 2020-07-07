# @videos.each do |video| # iterating over database entries
#     json.set! video.id do  #Setting the key to the videoid in videos 
#         json.extract! video, :id, :caption, :creator_id #turned into json then returned to frontend
#         json.videoUrl url_for(video.media) if video.media.attached?
#         json.creator video.creator.username

#     end
# end


@videos.each do |video|
    json.set! video.id do 
        json.partial! 'api/videos/video', video: video 
    end
end

    @likes.each do |like|
        json.set! like.id do
            json.partial!('/api/likes/like', like:like)
        end
    end
