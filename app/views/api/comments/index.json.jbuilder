# @comments.each do |comment|
#    json.set! comment.id do
#       json.extract! comment, :body, :user_id, :video_id, :id
#       # json.extract! comment.user, :username, :full_name, :email
#    end
# end



@comments.each do |comment|
    json.set! comment.id do 
        json.partial! 'api/comments/comment', comment: comment
    end
end