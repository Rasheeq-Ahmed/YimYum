json.extract! comment, :id, :body, :user_id, :video_id
json.author comment.user.username
json.body comment.body
# json.published comment.created_at.strftime("%B %d, %Y")
