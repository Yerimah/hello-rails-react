class CreateGreetings < ActiveRecord::Migration[7.0]
  def change
    create_table :greetings, &:timestamps
  end
end
