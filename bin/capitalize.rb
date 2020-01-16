#!/usr/bin/env ruby

require 'yaml'

yaml_string = File.read "./_data/tools.yml"
tools = YAML.load yaml_string

tools.map do |tool|
  tool.store("key", tool["name"].downcase)
end

File.open("./_data/tools.yml", "w") { |file| file.write(tools.to_yaml) }