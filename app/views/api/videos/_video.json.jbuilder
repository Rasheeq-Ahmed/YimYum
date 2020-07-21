# json.extract! @video, :id, :caption, :creator_id

json.extract! video, :id, :caption, :view_count, :creator_id
json.videoUrl url_for(video.media)
json.creator video.creator.username
json.likers video.likers.pluck(:id)
json.comments video.comments.pluck(:id)

# json.creator_id video.creator_id
json.published video.created_at.strftime("%B %d, %Y")

# 