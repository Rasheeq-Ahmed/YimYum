class Api::LikesController < ApplicationController

    before_action :require_login, only: [:create, :destroy]


    def show
    end

    def create
       @like = Like.new(like_params)
        @like.user_id = current_user.id 

        if @like.save
            render :show
        else
            render json: @like.errors.full_messages, status: 422
        end
    end


#    def index
#     @likes = Like.all.includes(:user, :likeable)
#         render :index
#    end

#    def show 
#         @like = like.find(params[:id])
#         if @like
#             render :show
#         else
#             renedr :index
#         end
#     end


   def destroy
        r = params[:id].to_i
        m = current_user.id
        @like = Like.find_by(user_id: current_user.id, video_id:r)
        if @like 
            @like.destroy
            render :show
        else
            render json: ["User is only able to remove their own likes"], status: 422
        end
    end

    private 
    
    def like_params
       params.require(:like).permit(:video_id)
    end

    
end


    



