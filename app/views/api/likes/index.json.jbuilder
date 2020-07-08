# json.likes. do 
#     @likes.each do |like|
#         json.set! like.id do 
#             json.partial!('like', like: like)
#         end
#     end

# end

@likes.each do |like|
    json.set! like.id do
        json.extract! like, :id, :user_id, :likeable_id, :likeable_type
        json.extract! like.user, :username, :full_name, :email
    end
end