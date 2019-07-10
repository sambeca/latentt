class AddRangemaxToFields < ActiveRecord::Migration[5.2]
  def change
    add_column :fields, :rangemax, :string
  end
end
