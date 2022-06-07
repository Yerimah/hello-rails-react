Rails.application.routes.draw do
  namespace :v1, defaults: { format: 'json' } do
  get 'greetings', to: 'greetings#index'
  
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  end
  # Defines the root path route ("/")
  # root "articles#index"
  root "static#index"
end
