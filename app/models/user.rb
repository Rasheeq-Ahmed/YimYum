class User < ApplicationRecord

    validates :username, :password_digest, :session_token, :email, presence: true
    validates :username, :email, uniqueness: true
    validates :password, length: {minimum: 6}, allow_nil: true


    # has_one_attached :photo

    has_many :videos,
        foreign_key: :creator_id,
        class_name: "Video"


    has_many :likes,
        foreign_key: :user_id,
        class_name: "Like" 
    
    has_many :comments,
    foreign_key: :user_id,
    class_name: "Comment"
    
   
    has_many :active_follows,  
    class_name: :Following,
    foreign_key: :user_id,
    dependent: :destroy

    has_many :passive_follows, 
    class_name: :Following,
    foreign_key: :followed_user_id,
    dependent: :destroy

    has_many :followings, 
    through: :active_follows,
    source: :following,
    dependent: :destroy

    has_many :followers, 
    through: :passive_follows, 
    source: :follower,
    dependent: :destroy


    #FUTURE FEATURES

    

    

  has_one_attached :profile_photo, dependent: :destroy  
    


    after_initialize :ensure_session_token

    attr_reader :password

    def self.find_by_credentials(username, pw)
        @user = User.find_by(username: username)
        return nil if @user.nil?
        @user.is_password?(pw) ? @user : nil
    end

    def password=(pw)
     @password = pw
     self.password_digest = BCrypt::Password.create(pw)   
    end

    def is_password?(pw)
        BCrypt::Password.new(self.password_digest).is_password?(pw)
    end

    def reset_session_token!
        self.session_token = SecureRandom.urlsafe_base64
        self.save!
        self.session_token
    end

    private

    def ensure_session_token
        self.session_token ||= SecureRandom.urlsafe_base64
    end



end
