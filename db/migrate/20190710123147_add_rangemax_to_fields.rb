class AddRangemaxToFields < ActiveRecord::Migration[5.2]
  def change
    add_column :fields, :range_max, :string
  end
end
