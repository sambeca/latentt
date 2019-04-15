class FieldsController < ApplicationController
  before_action :set_phrase, only: [:show, :edit, :update, :destroy]

  def index
    @fields = Field.all
  end

  def show
  end

  def new
    @field = Field.new
  end

  def create
  end

  def edit
  end
end
