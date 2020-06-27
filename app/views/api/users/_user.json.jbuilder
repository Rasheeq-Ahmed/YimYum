json.extract! user, :id, :username, :email, :password, :bio, :email, :vid_ids, :comment_ids


if user.profile_photo.attached?
    json.profilePhoto url_for(user.profile_photo)
end