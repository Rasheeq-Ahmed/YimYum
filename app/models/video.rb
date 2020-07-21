class Video < ApplicationRecord
    validates :creator_id, presence: true
    
    has_one_attached :media

    belongs_to :creator,
    foreign_key: :creator_id,
    class_name: "User"

   has_many :likes,
    dependent: :destroy


    has_many :likers,
    through: :likes,
    source: :user
   
   
    has_many :comments,
    dependent: :destroy


    has_many :commentors,
    through: :comments,
    source: :user




    

    # Future Feature

    # has_many :comments,
    # foreign_key: :video_id,
    # class_name: "Comment"


end
