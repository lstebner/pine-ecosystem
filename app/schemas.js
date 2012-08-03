module.exports = function(mongoose){
    var Schema = mongoose.Schema;

    return schemas = {
        /*
        * Game Image
        */ 
        GameImage: new Schema({
            path: {
                type: String
                ,default: ''
            }
            ,name: {
                type: String
                ,default: ''
            }
            ,caption: {
                type: String
                ,default: ''
            }
        })

        /*
        * Game Video
        */
        ,GameVideo: new Schema({
            url: {
                type: String
                ,default: ''
            }
            ,name: { 
                type: String
                ,default: ''
            }
            ,description: { 
                type: String
                ,default: ''
            }
        })

        /*
        * Game Update
        */
        ,GameUpdate: new Schema({
            date: {
                type: Date
                ,default: new Date()
            }
            ,notes: {
                type: String
                ,default: ''
            }
            ,version: {
                type: Number
                ,default: 0
            }
        })

        /* 
        * Game Review
        */
        ,GameReview: new Schema({
            date: {
                type: Date
                ,default: new Date()
            }
            ,reviewer: {
                type: String
                ,required: true
            }
            ,score: {
                type: Number
                ,required: true
            }
            ,review_raw: {
                type: String
                ,required: true
            }
            ,review_html: {
                type: String
                ,required: true
            }
        })

        /*
        * Game Flag
        */
        ,GameFlag: new Schema({
            name: {
                type: String
                ,required: true
            }
            ,slug: {
                type: String
                ,required: true
            }
            ,severity: {
                type: Number
                ,required: true
            }
            ,description: {
                type: String
                ,default: ''
            }
        })

        /*
        * Rating
        */
        ,Rating: new Schema({
            name: {
                type: String
                ,required: true
            }
            ,slug: {
                type: String
                ,required: true
            }
            ,description: {
                type: String
                ,default: ''
            }
        })

        /* 
        * Achievement
        */
        ,Achievement: new Schema({
            title: {
                type: String
                ,required: true
            }
            ,description: {
                type: String
                ,required: true
            }
            ,display: {
                type: Number
                ,required: true
            }
            ,icon: {
                type: String
                ,required: true
            }
            ,status : {
                progress: {
                    type: Number
                    ,default: 0
                }
                ,goal: {
                    type: Number
                    ,default: 1
                }
            }
        })

        /* 
        * Leaderboard Column
        */
        ,LeaderboardColumn: new Schema({
            title: {
                type: String
                ,required: true
            }
            ,sortable: {
                type: Boolean
                ,default: true
            }
            ,type: {
                type: String
                ,default: 'String'
            }
            ,formatter: {
                type: Schema.Types.Mixed
                ,default: null
            }
        })

        /*
        * Leaderboard 
        */
        ,Leaderboard: new Schema({
            title: {
                type: String
                ,required: true
            }
            ,slug: {
                type: String
                ,default: ''
            }
            ,online_enabled: {
                type: Boolean
                ,default: true
            }
            ,columns: [this.LeaderboardColumn]
            ,limit: {
                type: Number
                ,default: 0 //0 is no limit
            }
        })

        /*
        * Game object
        */
        ,Game: new Schema({
            name: {
                type: String
                ,required: true
            }
            ,slug: {
                type: String
                ,required: true
            }
            ,developer_id: {
                type: String
                ,required: true
            }
            ,package_id: {
                type: String
                //,required: true
            }
            ,published: {
                type: Boolean
                ,default: false
            }
            ,published_date: {
                type: Date
                ,default: null
            }
            ,approved: {
                type: Boolean
                ,default: false
            }
            ,approved_by: {
                type: String
                ,default: ''
            }
            ,approved_date: {
                type: Date
                ,default: null
            }
            ,reason_not_approved: {
                type: String
                ,default: ''
            }
            ,last_updated_date: {
                type: Date
                ,default: null
            }
            ,average_rating: {
                type: Number 
                ,default: 0
            }
            ,description: {
                type: String
                ,default: ''
            }
            ,marketplace_url: {
                type: String 
                ,default: ''
            }
            ,version: {
                type: Number
                ,default: 0
            }
            ,media: {
                images: {
                    thumbnail: {
                        type: String
                        ,default: ''
                    }
                    ,cover: {
                        type: String
                        ,default: ''
                    }
                    ,icon: {
                        type: String
                        ,default: ''
                    }
                    ,wallpaper: {
                        type: String
                        ,default: ''
                    }
                    ,gallery: [this.GameImage]
                }
                ,videos: {
                    trailer: {
                        type: String
                        ,default: ''
                    }
                    ,other: [this.GameVideo]
                }
            }
            ,flags: [this.GameFlag]
            ,updates: [this.GameUpdate]
            ,reviews: [this.GameReview]
            ,ratings: [this.Rating]
            ,achievements: [this.Achievement]
            ,leaderboards: [this.Leaderboard]
        })

        /*
        * User
        */
        ,User: new Schema({
            username: {
                type: String
                ,unique: true
                ,required: true
            }
            ,email: {
                type: String
                ,unique: true
                ,required: true
            }
            ,password: {
                type: String
                ,required: true
            }
            ,email_verified: {
                type: Boolean
                ,default: false
            }
            ,verification_code:{
                type: String
                ,default: ''
            }
            ,joined_date: {
                type: Date
                ,default: new Date()
            }
            ,last_login_date: {
                type: Date
                ,default: null
            }
            ,avatar: {
                type: String
                ,default: ''
            }
            ,games: [this.Game]
        })
    };
}