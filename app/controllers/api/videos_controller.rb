class Api::VideosController < ApplicationController

    
        def index
        @videos = Video.all
        render :index
        end
        
        def create
            @video = Video.new(video_params)    
            if @video.save
                render :show
            else
                render json: @video.errors.full_messages, status: 422
            end
        end
        
            
        def show
          @video = Video.find(params[:id])
            render :show
        end


        def update
            @video = Video.find(params[:id])
            if @video.update(video_params)
                render :show
            else
                render json: @video.errors.full_messages
            end
        end

        def destroy
            @video = current_user.videos.find(params[:id])
            if @video.destroy
                render :show
            else
                render json: @video.errors.full_messages, status: 404
            end
        end



        private
    
        def video_params
            params.require(:video).permit(:capton, :creator_id, :video)
        end
    
    


end
