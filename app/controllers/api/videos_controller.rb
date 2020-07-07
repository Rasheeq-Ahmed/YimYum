class Api::VideosController < ApplicationController

    
        def index
            @videos = Video.all
            @likes = Like.all
            render :index
        end
        
        def create
            # debugger
            @video = Video.new(video_params) 
            @video.creator_id = current_user.id
            @video.view_count = 0   
            if @video.save
                render :show
            else
                render json: @video.errors.full_messages, status: 422
            end
        end
        
            
        def show
          @video = Video.find(params[:id])

            if @video
                @video.view_count += 1
                @video.save
                render :show
            else
                render json:["Video Not Found"], status: 401
            end
        end

        def update
          @video = Video.find(params[:id])
          if @video.update(video_params)
            render :show
          else
             render json: @video.errors.full_messages, status: 422
          end
                        

        end


        
        def destroy
            @video = current_user.videos.find(params[:id])
            if @video.destroy
                render :show
            else
                render json: ['Something Went Wrong'], status: 404
            end
        end
        
        
        
        private
        
        def video_params
            params.require(:video).permit(:caption, :creator_id, :media)
        end
      
        
    end
    

























    # def update
    #     @video = Video.find(params[:id])
    #     if @video.update(video_params)
    #         render :show
    #     else
    #         render json: @video.errors.full_messages
    #     end
    # end