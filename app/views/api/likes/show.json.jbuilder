# json.like do
#     json.partial! 'like', like: @like
# end



# json.set! @like.likeable_type.downcase do
#     if @like.likeable_type == "Video"
#         json.partial!('/api/videos/video', video: @like.likeable)
#     # elsif @like.likeable_type == "Comment"
#     #     json.partial!('/api/comments/comment', comment: @like.likeable)
#     end
# end



# json.extract! @like, :id, :user_id, :likeable_id, :likeable_type
# json.extract! @like.user, :username, :name, :email


json.partial! 'api/likes/like', like: @like
