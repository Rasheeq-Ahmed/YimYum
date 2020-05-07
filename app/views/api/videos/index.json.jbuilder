@videos.each do |video| # iterating over database entries
    json.set! video.id do  #Setting the key to the videoid in videos 
        json.extract! video, :id, :caption, :creator_id #turned into json then returned to frontend
        json.videoUrl url_for(video.media)
    end
end



    # @videos.each do |video|
    #     json.set! video.id do
    #         json.partial!('video', video: video)
    #         json.videoUrls video.videos.map {|file| url_for(file)}
    #     end 
    # end 