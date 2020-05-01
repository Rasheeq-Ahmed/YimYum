# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.destroy_all




user1 = User.create(username: 'gordanramsay666', password: 'bestchef', email: 'g.ramsay@yimyum.com' )
user2 = User.create(username: 'darealguyfieri', password: 'flavortown', email: 'guy.fieri@yimyum.com' )