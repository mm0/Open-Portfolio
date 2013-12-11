# useful things

%w{curl wget rsync}.each do |pkg|
  yum_package "#{pkg}"
end

# dev tools

%w{libxml2-devel openssl-devel gcc gcc-c++}.each do |pkg|
  yum_package "#{pkg}"
end

