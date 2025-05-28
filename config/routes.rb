Rails.application.routes.draw do
  root "main#index"

  # Define routes under /pages
  scope '/pages' do
    get 'about_me', to: 'pages#about_me'
    get 'voice_over_work', to: 'pages#voice_over_work'
    get 'contact_me', to: 'pages#contact_me'
    post 'contact_me', to: 'pages#submit'
    get 'equipment_and_gear', to: 'pages#equipment_and_gear'
  end
end