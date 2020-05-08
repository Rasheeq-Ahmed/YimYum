class Video < ApplicationRecord
    validates :creator_id, presence: true
    
    has_one_attached :media

    belongs_to :creator,
    foreign_key: :creator_id,
    class_name: "User"


end