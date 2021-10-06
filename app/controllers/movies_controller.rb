class MoviesController < ApplicationController
  def index
    @movies = Movie.order(year: :desc)

    if params[:query].present?
      @movies = @movies.where('title ILIKE ?', "%#{params[:query]}%")
    end

    respond_to do |format|
      format.html
      format.text { render partial: 'movies/list', locals: { movies: @movies }, formats: [:html] }
      # format.json { render json: {hi: 'lucien'} }
      # I understnad this is re rendering the partial, giving the @movies instance variable
      # what is the respond_to iteration and what is 'format'
    end
  end

  # def update
  #   @movie = Movie.find(params[:id])
  #   @movie.update(movie_params)
  #   repspond
  # end

  # private

  # def movie_params
  #   params.require(:movie).permit(:title, :year)
  # end
end
