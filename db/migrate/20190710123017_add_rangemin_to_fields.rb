class AddRangeminToFields < ActiveRecord::Migration[5.2]
  def change
    add_column :fields, :rangemin, :string
  end
end
