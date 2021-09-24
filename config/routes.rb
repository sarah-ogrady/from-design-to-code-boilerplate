Rails.application.routes.draw do
  get 'pages/home'
  get 'home', to: 'pages#home'
  root to: 'movies#index'
  resources :movies, only: [:index, :update]
end
