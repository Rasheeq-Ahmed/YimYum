class ChangeColumnName < ActiveRecord::Migration[5.2]
  def change
    rename_column :users, :pessword_digest, :password_digest
  end
end
