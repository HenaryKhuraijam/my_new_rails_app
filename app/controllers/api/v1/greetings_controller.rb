class Api::V1::GreetingsController < ApplicationController
  def index
    @greeting = Greeting.find_by(id: rand(1..5))
    if @greeting
      render json: @greeting
    else
      render json: {status: {code: 422, message: 'No greetings found'}}, status: :unprocessable_entity
    end
  end
end
