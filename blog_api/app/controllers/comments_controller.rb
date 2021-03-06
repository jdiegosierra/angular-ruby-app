class CommentsController < ApplicationController
  before_action :set_comment, only: [:show, :update, :destroy]

  # GET /comments
  def index
   @article = Article.find(params[:article_id])
   @comments = @article.comments
   render json: @comments
  end

  # GET /comments/1
  def show
    @article = Article.find(params[:article_id])
    @comments = @article.comments.find(params[:id])
    render json: @comments
  end

  # POST /comments
  def create
    @article = Article.find(params[:article_id])
    @comment = @article.comments.create(comment_params)
    #@comment = Comment.new(comment_params)

    if @comment.save
      render json: @comment, status: :created, location: @comment
    else
      render json: @comment.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /comments/1
  def update
    if @comment.update(comment_params)
      render json: @comment
    else
      render json: @comment.errors, status: :unprocessable_entity
    end
  end

  # DELETE /comments/1
  def destroy
    @comment.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_comment
      @comment = Comment.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def comment_params
      #params.require(:comment).permit(:commenter, :body)
      params.require(:comment).permit(:commenter, :body, :article_id)
    end
end
