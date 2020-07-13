class Api::CommentsController < ApplicationController


     def index
        @comments = Comment.where(video_id: params[:video_id])
        render :index
    end


     def show
        @comment = Comment.find(params[:id])
        if @comment
            render :show
        else
            render json:["Comment Not Found"], status: 401
        end
    end
    
    def create
        # debugger
        @comment = Comment.new(comment_params) 
        @comment.user_id = current_user.id
        if @comment.save
            render :show
        else
            render json: @comment.errors.full_messages, status: 422
        end
    end
    
        
    

    # def update
    #     @comment = Comment.find(params[:id])
    #     if @comment.update(comment_params)
    #     render :show
    #     else
    #         render json: @comment.errors.full_messages, status: 422
    #     end
                    

    # end


    
    def destroy
        @comment = current_user.comments.find(params[:id])
        if @comment.destroy
            render :show
        else
            render json: ['Must be owner to delete'], status: 404
        end
    end


    private

    def comment_params
        params.require(:comment).permit(:body, :user_id, :video_id)
    end

end
