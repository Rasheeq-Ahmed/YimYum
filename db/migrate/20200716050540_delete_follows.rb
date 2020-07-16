class DeleteFollows < ActiveRecord::Migration[5.2]
  def up
    drop_table :follows
  end

  def down
    fail ActiveRecord::IrreversibleMigration
  end
end


