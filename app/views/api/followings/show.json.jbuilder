# json.extract! @follow, :id, :follower_id, :following_id
# json.extract! @follow.follower, :username, :name, :email
# json.extract! @follow.followed, :username, :name, :email



json.partial! 'api/followings/following', follow: @follow