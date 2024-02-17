Rails.application.routes.draw do
  root "main#index"

  get '/about_me', to: 'pages#about_me', as: 'about_me'
  get '/voice_over_work', to: 'pages#voice_over_work', as: 'voice_over_work'
  get '/contact_me', to: 'pages#contact_me', as: 'contact_me'
end
