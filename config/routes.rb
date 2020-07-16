Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show, :index, :update] do
      resources :followings, only: [:index]
    end
    resource :session, only: [:create,:destroy]
    resources :videos, only: [:show, :index,:update,:destroy,:create] do
      resources :comments, only: [:index]
    end
    resources :likes, only: [:create, :show, :index, :destroy]
    resources :comments, only: [:create, :show, :index, :destroy]
    resources :followings, only: [:create, :show, :destroy]


  end

  root 'static_pages#root'

end
