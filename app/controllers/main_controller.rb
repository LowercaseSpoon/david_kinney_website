class MainController < ApplicationController
  before_action :set_locale

  def index
    # code here
  end

  private 

  def set_locale
    I18n.default_locale = :en
  end
end
