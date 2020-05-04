class Api::SessionsController < ApplicationController

    def create
        @user = User.find_by_credentials(
            params[:user][:username],
            params[:user][:password]
        )
        if @user
            login!(@user)
            render 'api/users/show'
        else
            render json: ['Sorry, Invalid Username/Password. Please Try Again.'], status: 422
        end
    end


    def destroy
        if logged_in?
            logout!
            render json: ['Logout successful']
        else
            render json: ['Need to be logged in']
        end
    end

end
