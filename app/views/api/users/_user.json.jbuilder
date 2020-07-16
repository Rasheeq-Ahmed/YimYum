json.extract! user, :id, :username,:name, :email, :video_ids, :password, :bio
# , :vid_ids, :comment_ids


json.profilePhoto url_for(user.profile_photo) if user.profile_photo.attached?
