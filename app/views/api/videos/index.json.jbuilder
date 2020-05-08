@videos.each do |video| # iterating over database entries
    json.set! video.id do  #Setting the key to the videoid in videos 
        json.extract! video, :id, :caption, :creator_id #turned into json then returned to frontend
        json.videoUrl url_for(video.media) if video.media.attached?
    end
end


