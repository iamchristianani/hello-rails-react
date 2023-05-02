module Api
  class MessagesController < ApplicationController
    def index
      greeting = Message.find(rand(1..Message.count))
      render json: { text: greeting.text }
    end
  end
end
