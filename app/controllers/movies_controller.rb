class MoviesController < ApplicationController
  def index
    @movies = Movie.order(year: :desc)

    if params[:query].present?
      @movies = @movies.where('title ILIKE ?', "%#{params[:query]}%")
    end

    respond_to do |format|
      format.html
      format.text { render partial: 'movies/list', locals: { movies: @movies }, formats: [:html] }
      # I understnad this is re rendering the partial, giving the @movies instance variable
      # what is the respond_to iteration and what is 'format'
    end
  end
end
