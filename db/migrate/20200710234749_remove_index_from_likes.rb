class RemoveIndexFromLikes < ActiveRecord::Migration[5.2]
  def change
    remove_index :likes, :video_id
  end
end
