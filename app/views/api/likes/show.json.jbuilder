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