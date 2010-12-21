#!/bin/bash
#
# Get value from APP_CONFIG
#
# Usage get_env [key ...]

path=$( readlink -fn $0) && cd $(dirname $path)/.. || exit 2

size=$( wc tmp/environment | cut -d' ' -f1) || size=0
if [[ "$size" = "0"  || tmp/environment -ot config/app_config.yml ]]
then
    ruby > tmp/environment << 'EOT'
	require File.join('config', 'environment.rb')
	APP_CONFIG.each { |key, value| puts key.to_s + "\t" + value.to_s }
        puts "pod_uri.host\t" + APP_CONFIG[:pod_uri].host.to_s
        puts "pod_uri.path\t" + APP_CONFIG[:pod_uri].path.to_s
        puts "pod_uri.port\t" + APP_CONFIG[:pod_uri].port.to_s
        puts "local_uri.host\t" + APP_CONFIG[:local_uri].port.to_s
        puts "local_uri.port\t" + APP_CONFIG[:local_uri].port.to_s
        puts "local_uri.path\t" + APP_CONFIG[:local_uri].path.to_s
EOT
fi

for key in $@; do
    awk -v key=$key '{ if ($1 == key ) print $2 }' < tmp/environment
done

