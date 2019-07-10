puts 'Cleaning DB'
Field.destroy_all

puts 'Creating test users...'

user1 = User.create(email: 'joelsveltena@mailtime.com', password: '10101010')
user2 = User.create(email: 'margel@mailtime.com', password: '10101010')
user3 = User.create(email: 'laura@mailtime.com', password: '10101010')

user1.save!

puts 'Creating test fields...'

field1 = Field.create!(
  range_min: '2534254',
  range_max: '9866223',
  user: user1
  )

puts 'Done!'
