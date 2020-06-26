# json.extract! @video, :id, :caption, :creator_id

json.extract! video, :id, :caption, :view_count, :creator_id
json.videoUrl url_for(video.video)
json.creator video.creator.username
# 