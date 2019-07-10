class FieldsController < ApplicationController
  before_action :set_field, only: [:show, :edit, :update, :destroy]

  def index
    @fields = Field.all
  end

  def create
    @field = Field.create(field_params)
    @field.user_id = current_user.id
    if @field.save
      redirect_to fields_path, notice: "Saved"
    else
      render 'new', notice: "Something went wrong, we'll look into it"
    end
  end

  def show
  end

  def new
    @field = Field.new
  end

  def edit
  end

  private

  def field_params
    field.require(:field).permit(:range_min, :range_max, :user_id, :name)
  end

  def set_field
    @field = Field.find(params[:id])
  end
end
