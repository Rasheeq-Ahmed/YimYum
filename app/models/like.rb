class Like < ApplicationRecord
     validates :liked, inclusion: { in: [true, false] }
    validates :likeable_type, inclusion: { in: ['Video', 'Comment'] }
    validates :user_id, :likeable_id, :likeable_type, presence: true
    validates :user_id, uniqueness: { scope: [:likeable_id, :likeable_type] }

    belongs_to :likeable, polymorphic: true

    belongs_to :user,
        foreign_key: :user_id,
        class_name: "User"
end
