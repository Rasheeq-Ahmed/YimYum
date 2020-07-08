class Api::LikesController < ApplicationController

    before_action :require_login, only: [:create, :destroy]


    def create
        @like = current_user.likes.new(like_params)
        if @like.save
            render :show
        else
            render json:  @like.errors.full_messages, status: 422 # ["Unable to process action"]
        end
    end


   def index
    @likes = Like.all.includes(:user, :likeable)
        render :index
   end

   def show 
        @like = like.find(params[:id])
        if @like
            render :show
        else
            renedr :index
        end
    end


   def destroy
        @like = current_user.likes.find(params[:id])
           if @like.destroy
            render :show
        else
            render json: @like.errors.full_messages, status: 422 #['Must be liker owner to destroy']
        end
        
    end

    private 
    
    def like_params
        params.require(:like).permit(:user_id, :likeable_id, :likeable_type)
    end

    
end


    



