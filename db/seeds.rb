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
Comment.destroy_all
Like.destroy_all




demo = User.create(username: "YimYumDemoUser", password: 'yummypass', email: 'demo.user@yimyum.com', name: 'Demo User', bio: "Food is my passion")
user1 = User.create(username: 'gordanramsay666', password: 'bestchef', email: 'g.ramsay@yimyum.com', name: 'Gordan Ramsay', bio: "My Grandad can cook better than you" )
user2 = User.create(username: 'darealguyfieri', password: 'flavortown', email: 'guy.fieri@yimyum.com', name: 'Guy Fieri', bio: "Mayor of Flavor Town" )
user3 = User.create(username: 'bobbyflay', password: 'throwdown', email: 'bobby.flay@yimyum.com', name: 'Bobby Flay', bio: "Always willing to throwdown" )
user4 = User.create(username: 'bizarrezimmerman', password: 'bizarrefoods', email: 'andrew.zimmermany@yimyum.com', name: 'Andrew Zimmerman', bio: "Nothing is too bizarre" )
user5 = User.create(username: 'marthastewart', password: 'nolongerlockedup', email: 'martha.stewart@yimyum.com', name: 'Martha Stewart', bio: "Nothing is too bizarre" )
user6 = User.create(username: 'snoopdoggydog', password: 'ginandjuice', email: 'snoop.dogg@yimyum.com', name: 'Snoop Dogg', bio: "I want to open up an ice cream parlor and call myself Scoop Dogg" )
user7 = User.create(username: 'davidchang', password: 'momofuku', email: "david.chang@yimyum.com", name: 'David Chang', bio: "Food is culture that lives within all of us")

profile0 = open('https://yimyum-seeds.s3-us-west-1.amazonaws.com/profile-pics/demo.png')
demo.profile_photo.attach(io: profile0, filename: 'demo.png')

profile1 = open('https://yimyum-seeds.s3-us-west-1.amazonaws.com/profile-pics/gordan.jpg')
user1.profile_photo.attach(io: profile1, filename: 'gordan.jpg')

profile2 = open('https://yimyum-seeds.s3-us-west-1.amazonaws.com/profile-pics/guy.jfif')
user2.profile_photo.attach(io: profile2, filename: 'guy.jfif')

profile3 = open('https://yimyum-seeds.s3-us-west-1.amazonaws.com/profile-pics/bobby.jpeg')
user3.profile_photo.attach(io: profile3, filename: 'bobby.jpeg')

profile4 = open('https://yimyum-seeds.s3-us-west-1.amazonaws.com/profile-pics/zimmer.jpg')
user4.profile_photo.attach(io: profile4, filename: 'zimmer.jpg')

profile5 = open('https://yimyum-seeds.s3-us-west-1.amazonaws.com/profile-pics/martha.jpg')
user5.profile_photo.attach(io: profile5, filename: 'martha.jpg')

profile6 = open('https://yimyum-seeds.s3-us-west-1.amazonaws.com/profile-pics/snoop.jpg')
user6.profile_photo.attach(io: profile6, filename: 'snoop.jpg')

profile7 = open('https://yimyum-seeds.s3-us-west-1.amazonaws.com/profile-pics/chang.jpg')
user7.profile_photo.attach(io: profile7, filename: 'chang.jpg')



video1 = Video.create!({caption:"Food is love. Food is life.", creator_id: user1.id})
video2 = Video.create!({caption:"Fish are food not friends", creator_id: user6.id})
video3 = Video.create!({caption:"Rainbow drip", creator_id: user5.id})
video4 = Video.create!({caption:"Welcome to Flavor Town", creator_id: user2.id})
video5 = Video.create!({caption:"Now thats a dessert", creator_id: user1.id})
video6 = Video.create!({caption:"I can throwdown with some bbq", creator_id: user3.id})
video7 = Video.create!({caption:"This is even bizarre for me", creator_id: user4.id})
video8 = Video.create!({caption:"Matcha made in heaven", creator_id: user7.id })
video9 = Video.create!({caption: "Winnie Da Pooh Fo' Drizzle", creator_id: user6.id})
video10 = Video.create!({caption: "I scream for ice scream", creator_id: user2.id})
video11 = Video.create!({caption: "Tiny steak? More like big mistake", creator_id: user1.id})



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

comment1 = Comment.create!(body: "Now I want gold on everything", user_id: user2.id, video_id: video2.id)
comment2 = Comment.create!(body: "How did it taste?", user_id: user7.id, video_id: video2.id)
comment3 = Comment.create!(body: "Fancy!", user_id: user5.id, video_id: video2.id)
comment4 = Comment.create!(body: "Where can I get that burger?", user_id: user3.id, video_id: video1.id)
comment5 = Comment.create!(body: "I need the names of these spots for the next season of Triple D!", user_id: user2.id, video_id: video1.id)
comment6 = Comment.create!(body: "Everything looks sooo good", user_id: user7.id, video_id: video1.id)
comment7 = Comment.create!(body: "Cheese overload!", user_id: user5.id, video_id: video1.id)
comment8 = Comment.create!(body: "Looks delicious", user_id: user4.id, video_id: video6.id)
comment9 = Comment.create!(body: "Look at the size of that rib!", user_id: user2.id, video_id: video6.id)
comment10 = Comment.create!(body: "Fall off the bone", user_id: user6.id, video_id: video6.id)
comment11 = Comment.create!(body: "That sundae looks amazing", user_id: user3.id, video_id: video10.id)
comment12 = Comment.create!(body: "Salt on ice cream?!", user_id: user7.id, video_id: video10.id)
comment13 = Comment.create!(body: "This would go great with a warm brownie", user_id: user5.id, video_id: video10.id)
comment14 = Comment.create!(body: "Matcha is one of my favorite flavors", user_id: user4.id, video_id: video8.id)
comment16 = Comment.create!(body: "What a beautiful cake!", user_id: user5.id, video_id: video8.id)
comment17 = Comment.create!(body: "Tie dye milkshake anyone?", user_id: user5.id, video_id: video3.id)
comment18 = Comment.create!(body: "Rainbow sprinkles > chocolate sprinkles", user_id: user6.id, video_id: video3.id)
comment15 = Comment.create!(body: "I love this cake so matcha", user_id: user2.id, video_id: video8.id)
comment19 = Comment.create!(body: "Need this for next week’s Taco Tuesday!", user_id: user3.id, video_id: video7.id)
comment20 = Comment.create!(body: "Is this from Tony Boloney’s?", user_id: user2.id, video_id: video7.id)
comment21 = Comment.create!(body: "Tacos? Pizza? Why not have both?", user_id: user7.id, video_id: video7.id)
comment22 = Comment.create!(body: "When are you opening your tiny restaurant?", user_id: user3.id, video_id: video11.id)
comment23 = Comment.create!(body: "Steak the size of my pinky ring", user_id: user2.id, video_id: video11.id)
comment24 = Comment.create!(body: "Tiny steak big flavor", user_id: user6.id, video_id: video11.id)
comment25 = Comment.create!(body: "Winner winner chicken dinner", user_id: user4.id, video_id: video4.id)
comment26 = Comment.create!(body: "Those wings look amazing", user_id: user7.id, video_id: video4.id)
comment27 = Comment.create!(body: "I like my wings extra saucy", user_id: user6.id, video_id: video4.id)
comment28 = Comment.create!(body: "Take me to Flavor Town", user_id: user6.id, video_id: video4.id)
comment29 = Comment.create!(body: "Now I want some honey drizzled chicken and waffles", user_id: user2.id, video_id: video9.id)
comment30 = Comment.create!(body: "Love substituting honey for sugar!", user_id: user5.id, video_id: video9.id)


l1 = Like.create!({user_id: user1.id, video_id: video1.id})
l2 = Like.create!({user_id: user1.id, video_id: video2.id})
l3 = Like.create!({user_id: user1.id, video_id: video3.id})
l4 = Like.create!({user_id: user1.id, video_id: video4.id})
l5 = Like.create!({user_id: user1.id, video_id: video5.id})
l6 = Like.create!({user_id: user1.id, video_id: video6.id})
l7 = Like.create!({user_id: user1.id, video_id: video7.id})
l8 = Like.create!({user_id: user1.id, video_id: video8.id})
l9 = Like.create!({user_id: user1.id, video_id: video9.id})
l10 = Like.create!({user_id: user1.id, video_id: video10.id})
l11 = Like.create!({user_id: user1.id, video_id: video11.id})
l12 = Like.create!({user_id: user2.id, video_id: video1.id})
l13 = Like.create!({user_id: user2.id, video_id: video2.id})
l14 = Like.create!({user_id: user2.id, video_id: video3.id})
l15 = Like.create!({user_id: user2.id, video_id: video4.id})
l16 = Like.create!({user_id: user2.id, video_id: video5.id})
l17 = Like.create!({user_id: user2.id, video_id: video6.id})
l18 = Like.create!({user_id: user2.id, video_id: video7.id})
l19 = Like.create!({user_id: user2.id, video_id: video8.id})
l20 = Like.create!({user_id: user2.id, video_id: video9.id})
l21 = Like.create!({user_id: user2.id, video_id: video10.id})
l22 = Like.create!({user_id: user2.id, video_id: video11.id})
l23 = Like.create!({user_id: user3.id, video_id: video1.id})
l24 = Like.create!({user_id: user3.id, video_id: video2.id})
l25 = Like.create!({user_id: user3.id, video_id: video3.id})
l26 = Like.create!({user_id: user3.id, video_id: video4.id})
l27 = Like.create!({user_id: user3.id, video_id: video5.id})
l28 = Like.create!({user_id: user3.id, video_id: video6.id})
l29 = Like.create!({user_id: user3.id, video_id: video7.id})
l30 = Like.create!({user_id: user3.id, video_id: video8.id})
l31 = Like.create!({user_id: user3.id, video_id: video9.id})
l32 = Like.create!({user_id: user3.id, video_id: video10.id})
l33 = Like.create!({user_id: user3.id, video_id: video11.id})
l34 = Like.create!({user_id: user4.id, video_id: video1.id})
l35 = Like.create!({user_id: user4.id, video_id: video2.id})
l36 = Like.create!({user_id: user4.id, video_id: video3.id})
l37 = Like.create!({user_id: user4.id, video_id: video4.id})
l38 = Like.create!({user_id: user4.id, video_id: video5.id})
l39 = Like.create!({user_id: user4.id, video_id: video6.id})
l40 = Like.create!({user_id: user4.id, video_id: video7.id})
l41 = Like.create!({user_id: user4.id, video_id: video8.id})
l42 = Like.create!({user_id: user4.id, video_id: video9.id})
l43 = Like.create!({user_id: user4.id, video_id: video10.id})
l44 = Like.create!({user_id: user4.id, video_id: video11.id})
l45 = Like.create!({user_id: user5.id, video_id: video1.id})
l46 = Like.create!({user_id: user5.id, video_id: video2.id})
l47 = Like.create!({user_id: user5.id, video_id: video3.id})
l48 = Like.create!({user_id: user5.id, video_id: video4.id})
l49 = Like.create!({user_id: user5.id, video_id: video5.id})
l50 = Like.create!({user_id: user5.id, video_id: video6.id})
l51 = Like.create!({user_id: user5.id, video_id: video7.id})
l52 = Like.create!({user_id: user5.id, video_id: video8.id})
l53 = Like.create!({user_id: user5.id, video_id: video9.id})
l54 = Like.create!({user_id: user5.id, video_id: video10.id})
l55 = Like.create!({user_id: user5.id, video_id: video11.id})
l56 = Like.create!({user_id: user6.id, video_id: video1.id})
l57 = Like.create!({user_id: user6.id, video_id: video2.id})
l58 = Like.create!({user_id: user6.id, video_id: video3.id})
l59 = Like.create!({user_id: user6.id, video_id: video4.id})
l60 = Like.create!({user_id: user6.id, video_id: video5.id})
l61 = Like.create!({user_id: user6.id, video_id: video6.id})
l62 = Like.create!({user_id: user6.id, video_id: video7.id})
l63 = Like.create!({user_id: user6.id, video_id: video8.id})
l64 = Like.create!({user_id: user6.id, video_id: video9.id})
l65 = Like.create!({user_id: user6.id, video_id: video10.id})
l66 = Like.create!({user_id: user6.id, video_id: video11.id})
l67 = Like.create!({user_id: user7.id, video_id: video1.id})
l68 = Like.create!({user_id: user7.id, video_id: video2.id})
l69 = Like.create!({user_id: user7.id, video_id: video3.id})
l70 = Like.create!({user_id: user7.id, video_id: video4.id})
l71 = Like.create!({user_id: user7.id, video_id: video5.id})
l72 = Like.create!({user_id: user7.id, video_id: video6.id})
l73 = Like.create!({user_id: user7.id, video_id: video7.id})
l74 = Like.create!({user_id: user7.id, video_id: video8.id})
l75 = Like.create!({user_id: user7.id, video_id: video9.id})
l76 = Like.create!({user_id: user7.id, video_id: video10.id})
l77 = Like.create!({user_id: user7.id, video_id: video11.id})