if Rails.env == "production"
  Rails.application.config.session_store :cookie_store, 
      key: "_contracts_authentication", domain: "HEROKU DOMAIN GOES HERE"
else
  Rails.application.config.session_store :cookie_store, 
      key: "_contracts_authentication"
end