class User < ApplicationRecord

    validates :username, :password_digest, :session_token, presence: true
    validates :username, :email, uniqueness: true
    validates :password, length: {minimum: 6}, allow_nil: true

    after_initialize :ensure_session_token


    spire

    def self.find_by_credentials(username, pw)
        @user = User.find_by(username: username)
        return nil if user.nil?
        @user.is_password?(pw) ? user : nil
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