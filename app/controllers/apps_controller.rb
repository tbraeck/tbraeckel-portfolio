class AppsController < ApplicationController
  # before_action :set_app, only: %i[ index show update destroy ]

  # GET /apps
  def index
    @apps = App.all
    render json: @apps
  end

  # GET /apps/1
  def show
    @app =  set_app
    render json: @app
  end

  # POST /apps
  def create
    @app = App.new(app_params)

    if @app.save
      render json: @app, status: :created, location: @app
    else
      render json: @app.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /apps/1
  def update
    if @app.update(app_params)
      render json: @app
    else
      render json: @app.errors, status: :unprocessable_entity
    end
  end

  # DELETE /apps/1
  def destroy
    @app.destroy!
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_app
      @app = App.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def app_params
      params.permit(:name, :description, :link, :demo, :main_image)
    end
end
