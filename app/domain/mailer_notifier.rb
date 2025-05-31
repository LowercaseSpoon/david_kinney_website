class MailerNotifier < ActionMailer::Base
    default from: 'davidkinneywebsite'
  
    def contact_me(form_data)
      @name = form_data[:name]
      @email = form_data[:email]
      @message = form_data[:message]

      mail(
        to: 'davidkinneyjrvo@gmail.com',  # TODO: Change to actual email
        reply_to: @email,           
        subject: "New Contact Form",
        template_path: 'mailer',
        template_name: 'contact_me'
      )
    end

    def confirmation_email(form_data)
      @name = form_data[:name]
      @email = form_data[:email]
      @message = form_data[:message]

      mail(
        to: @email,
        subject: "Thank you for contacting David Kinney VO",
        template_path: 'mailer',
        template_name: 'confirmation'
      )
    end

    private

    def sanitize_form_data(form_data)
      form_data.transform_values { |value| value.to_s.strip }
    end
  end