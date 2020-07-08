class Api::LikesController < ApplicationController

    before_action :require_login, only: [:create, :update, :destroy]


    def create()
        @like = Like.new(like_params)
        @like.user_id = current_user.id

        if @like.save
            render :show
        else
            render json: ["Unable to process action"], status: 422
        end
    end

   def destroy
        @like = Like.find(params[:id])
        if current_user.id == @like.user_id
            @like.destroy
            render :show
        else
            render json: ['Must be liker owner to destroy'], status: 422
        end
        
    end

    private 
    
    def like_params
        params.require(:like).permit(:liked, :user_id, :likeable_id, :likeable_type)
    end

    


end
