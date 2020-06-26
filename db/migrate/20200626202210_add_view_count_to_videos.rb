class AddViewCountToVideos < ActiveRecord::Migration[5.2]
  def change
    add_column :videos, :view_count, :integer, default: false
    change_column_null :videos, :view_count, false
  end

end
