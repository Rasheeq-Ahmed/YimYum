class Follow < ApplicationRecord

    validates :follower_id, :following_id, presence: true


        # follower_id is this user id

    belongs_to :follower.
    primary_key: :id,
    foreign_key: :follower_id,
    class_name: "User"

    belongs_to :followed,
    primary_key: :id,
    foreign_key: :following_id,
    class_name: "User"




end
