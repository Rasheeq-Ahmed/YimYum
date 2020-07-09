class Like < ApplicationRecord
  
    validates :user_id, :video_id, presence: true 
    validates :user_id, uniqueness: {scope: :video_id}


    belongs_to :user,
        foreign_key: :user_id,
        class_name: "User"
    
    belongs_to :video,
        foreign_key: :video_id,
        class_name: "Video"
    
    # belongs_to :comment,
    #     foreign_key: :comment_id,
    #     class_name: "Comment"

end
