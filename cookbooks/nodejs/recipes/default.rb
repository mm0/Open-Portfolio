#package "nodejs"
#package "npm"

## from http://blog.semmy.me/post/10287019340/vagrant-chef-and-node-js
# centos 5 requires python26 (default is 2.4)
#	su -c 'rpm -Uvh http://mirror.us.leaseweb.net/epel/5/x86_64/epel-release-5-4.noarch.rpm'
#	yum install python26
#	python26 ./configure

bash "install node.js from source" do
  cwd "/tmp"
  user "root"
  code <<-EOH
    mkdir src
    cd src
	sudo	su -c 'rpm -Uvh http://mirror.us.leaseweb.net/epel/5/x86_64/epel-release-5-4.noarch.rpm'
sudo 	yum install -y python26
    wget http://nodejs.org/dist/v#{node[:nodejs][:version]}/node-v#{node[:nodejs][:version]}.tar.gz
    tar zxf node-v#{node[:nodejs][:version]}.tar.gz
    cd node-v#{node[:nodejs][:version]}
	python26 ./configure
    make PYTHON=python26
    make install PYTHON=python26 
  EOH
  not_if "node -v 2>&1 | grep 'v#{node[:nodejs][:version]}'"
end

bash "install forever globally from npm" do
  user "root"
  code <<-EOH
    npm install forever -g
  EOH
  # not if forever is already installed as a top level global package
  not_if "npm list -g | grep -c ' forever@'"
end
#install node express
bash "install express globally from npm" do
  user "root"
  code <<-EOH
    npm install express  --python=python26
  EOH
  # not if forever is already installed as a top level global package
  not_if "npm list -g | grep -c ' express@'"
end
#install node mongo 
#bash "install mongo globally from npm" do
#  user "root"
#  code <<-EOH
#    npm install mongodb  --python=python26
#  EOH
#  # not if forever is already installed as a top level global package
#  not_if "npm list -g | grep -c ' mongo@'"
#end
#install node mongoose 
#bash "install mongoose globally from npm" do
#  user "root"
#  code <<-EOH
#    npm install mongoose   --python=python26
#  EOH
  # not if forever is already installed as a top level global package
#  not_if "npm list -g | grep -c ' mongoose@'"
#end
