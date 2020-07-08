# json.extract! @video, :id, :caption, :creator_id

json.extract! video, :id, :caption, :view_count, :creator_id
json.videoUrl url_for(video.media)
json.creator video.creator.username
# json.creator_id video.creator_id
json.likes video.num_likes
json.published video.created_at.strftime("%B %d, %Y")
# 