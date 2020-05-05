# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.destroy_all



demo = User.create(username: "YimYumDemoUser", password: 'yummypass', email: 'demo.user@yimyum.com', name: 'Demo User', bio: "Food is my passion")
user1 = User.create(username: 'gordanramsay666', password: 'bestchef', email: 'g.ramsay@yimyum.com', name: 'Gordan Ramsay', bio: "My Grandad can cook better than you" )
user2 = User.create(username: 'darealguyfieri', password: 'flavortown', email: 'guy.fieri@yimyum.com', name: 'Guy Fieri', bio: "Mayor of Flavor Town" )
user3 = User.create(username: 'bobbyflay', password: 'throwdown', email: 'bobby.flay@yimyum.com', name: 'Bobby Flay', bio: "Always willing to throwdown" )
user4 = User.create(username: 'bizarrezimmerman', password: 'bizarrefoods', email: 'andrew.zimmermany@yimyum.com', name: 'Andrew Zimmerman', bio: "Nothing is too bizarre" )
user5 = User.create(username: 'marthastewart', password: 'nolongerlockedup', email: 'martha.stewart@yimyum.com', name: 'Martha Stewart', bio: "Nothing is too bizarre" )
user5 = User.create(username: 'snoopdoggydog', password: 'ginandjuice', email: 'snoop.dogg@yimyum.com', name: 'Snoop Dogg', bio: "I want to open up an ice cream parlor and call myself Scoop Dogg" )
