class AddRangeMinToFields < ActiveRecord::Migration[5.2]
  def change
    add_column :fields, :range_min, :string
  end
end
