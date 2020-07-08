class Video < ApplicationRecord
    validates :creator_id, presence: true
    
    has_one_attached :media

    belongs_to :creator,
    foreign_key: :creator_id,
    class_name: "User"

    has_many :likes, 
    as: :likeable
    

    #Future Feature
    
    # has_many :comments,
    # foreign_key: :video_id,
    # class_name: :Comment


end
