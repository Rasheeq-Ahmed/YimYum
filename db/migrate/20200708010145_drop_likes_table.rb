class DropLikesTable < ActiveRecord::Migration[5.2]
  def up
    drop_table :likes
  end

  def down
    fail ActiveRecord::IrreversibleMigration
  end
end
