class Api::UsersController < ApplicationController

    def create
        @user = User.new(user_params)

        if @user.save
            login!(@user)
            render :show
        else
            render json: @user.errors.full_messages, status: 401
        end
    end

    
    def show
        @user = User.find(params[:id])
        @videos = @user.videos
        render :show
    end

    def index
        @users = User.all.includes(:videos, :likes)
        render :index
    end

    def update
        @user = User.find(params[:id])

        if @user.update(user_params)
            render :show
        else
            render json: @user.errors.full_messages, status: 422
        end

    end


    private
    def user_params
        params.require(:user).permit(:username, :name, :bio, :email, :password, :profile_photo)
    end

end
