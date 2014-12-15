require 'sinatra'

set :public_dir, Proc.new { File.join(root, "public")}
set :partial_template_engine, :erb

get '/' do
  erb :index
end