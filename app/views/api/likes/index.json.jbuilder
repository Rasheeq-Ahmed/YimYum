# json.likes. do 
#     @likes.each do |like|
#         json.set! like.id do 
#             json.partial!('like', like: like)
#         end
#     end

# end

json.extract! @like, :id, :user_id, :likeable_id, :likeable_type