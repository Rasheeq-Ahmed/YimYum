json.user do 
    json.partial! "api/users/user", user: @user
    
end 

json.videos do 
    
    @user.videos.each do |video|
        json.set! video.id do
            json.partial!('/api/videos/video', video: video)
        end 
    end 
end 