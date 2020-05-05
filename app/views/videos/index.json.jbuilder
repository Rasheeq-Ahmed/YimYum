
json.array! @users do |user|
json.extract! user, :id, :username
json.photoUrl url_for(user.photo)