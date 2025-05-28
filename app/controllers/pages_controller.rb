class PagesController < ApplicationController
  before_action :validate_params, only: [:submit]

  def about_me
  end

  def voice_over_work
  end

  def contact_me
  end

  def equipment_and_gear
  end

  def submit
    if send_message(name: params[:name], email: params[:email], message: params[:message])
      render json: { success: true }
    else
      render json: { success: false }, status: :unprocessable_entity
    end
  end

  private

  def validate_params
    params.require(:page).permit(:name, :email, :message)
  end

  def send_message(name:, email:, message:)
    true
  end
end
