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

  def demo_reel
  end

  def submit
    page_params = params.require(:page).permit(:name, :email, :message)
    contact_email = ::MailerNotifier.contact_me(page_params).deliver_now
    confirmation_email = ::MailerNotifier.confirmation_email(page_params).deliver_now
   
    render json: { success: true, contact_email: contact_email, confirmation_email: confirmation_email }
  rescue => e
    render json: { success: false }
  end

  private

  def validate_params
    params.require(:page).permit(:name, :email, :message)
  end
end
