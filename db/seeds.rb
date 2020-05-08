# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'
User.destroy_all
Video.destroy_all



demo = User.create(username: "YimYumDemoUser", password: 'yummypass', email: 'demo.user@yimyum.com', name: 'Demo User', bio: "Food is my passion")
user1 = User.create(username: 'gordanramsay666', password: 'bestchef', email: 'g.ramsay@yimyum.com', name: 'Gordan Ramsay', bio: "My Grandad can cook better than you" )
user2 = User.create(username: 'darealguyfieri', password: 'flavortown', email: 'guy.fieri@yimyum.com', name: 'Guy Fieri', bio: "Mayor of Flavor Town" )
user3 = User.create(username: 'bobbyflay', password: 'throwdown', email: 'bobby.flay@yimyum.com', name: 'Bobby Flay', bio: "Always willing to throwdown" )
user4 = User.create(username: 'bizarrezimmerman', password: 'bizarrefoods', email: 'andrew.zimmermany@yimyum.com', name: 'Andrew Zimmerman', bio: "Nothing is too bizarre" )
user5 = User.create(username: 'marthastewart', password: 'nolongerlockedup', email: 'martha.stewart@yimyum.com', name: 'Martha Stewart', bio: "Nothing is too bizarre" )
user6 = User.create(username: 'snoopdoggydog', password: 'ginandjuice', email: 'snoop.dogg@yimyum.com', name: 'Snoop Dogg', bio: "I want to open up an ice cream parlor and call myself Scoop Dogg" )
user7 = User.create(username: 'davidchang', password: 'momofuku', email: "david.chang@yimyum.com", name: 'David Chang', bio: "Food is culture that lives within all of us")


video2 = Video.create!({caption:"Fish are food not friends", creator_id: user6.id})
video1 = Video.create!({caption:"Food is love. Food is life.", creator_id: user1.id})
video4 = Video.create!({caption:"Welcome to Flavor Town", creator_id: user2.id})
video10 = Video.create!({caption: "I scream for ice scream", creator_id: user2.id})
video3 = Video.create!({caption:"Rainbow drip", creator_id: user5.id})
video6 = Video.create!({caption:"I can throwdown with some bbq", creator_id: user3.id})
video7 = Video.create!({caption:"This is even bizarre for me", creator_id: user4.id})
video9 = Video.create!({caption: "Winnie Da Pooh Fo' Drizzle", creator_id: user6.id})
video11 = Video.create!({caption: "Tiny steak? More like big mistake", creator_id: user1.id})
video8 = Video.create!({caption:"Matcha made in heaven", creator_id: user7.id })
video5 = Video.create!({caption:"Now thats a dessert", creator_id: user1.id})

video1_media = open("https://yimyum-seeds.s3-us-west-1.amazonaws.com/cheesy.mp4")
video1.media.attach(io: video1_media, filename: 'cheesy.mp4')

video2_media = open("https://yimyum-seeds.s3-us-west-1.amazonaws.com/sushi.mp4")
video2.media.attach(io: video2_media, filename: 'sushi.mp4')

video3_media = open("https://yimyum-seeds.s3-us-west-1.amazonaws.com/colorfuldrip.mp4")
video3.media.attach(io: video3_media, filename: 'colorfuldrip.mp4')

video4_media = open("https://yimyum-seeds.s3-us-west-1.amazonaws.com/friedchicken.mp4")
video4.media.attach(io: video4_media, filename: 'friedchicken.mp4')

video5_media = open("https://yimyum-seeds.s3-us-west-1.amazonaws.com/dessert.mp4")
video5.media.attach(io: video5_media, filename: 'dessert.mp4')

video6_media = open("https://yimyum-seeds.s3-us-west-1.amazonaws.com/bbq.mp4")
video6.media.attach(io: video6_media, filename: 'bbq.mp4')

video7_media = open("https://yimyum-seeds.s3-us-west-1.amazonaws.com/tacopizza.mp4")
video7.media.attach(io: video7_media, filename: 'tacopizza.mp4')

video8_media = open("https://yimyum-seeds.s3-us-west-1.amazonaws.com/matchacake.mp4")
video8.media.attach(io: video8_media, filename: 'matchacake.mp4')

video9_media = open("https://yimyum-seeds.s3-us-west-1.amazonaws.com/honey.mp4")
video9.media.attach(io: video9_media, filename: 'honey.mp4')

video10_media = open("https://yimyum-seeds.s3-us-west-1.amazonaws.com/icecream.mp4")
video10.media.attach(io: video10_media, filename: 'icecream.mp4')

video11_media = open("https://yimyum-seeds.s3-us-west-1.amazonaws.com/tinysteak.mp4")
video11.media.attach(io: video11_media, filename: 'tinysteak.mp4')
