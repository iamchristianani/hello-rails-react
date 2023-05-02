Rails.application.routes.draw do
  root 'root#index'

  # API routes
  namespace :api do
    resources :messages
  end
end
