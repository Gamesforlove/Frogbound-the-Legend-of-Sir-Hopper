# Check if a file was passed as an argument
if ARGV.empty?
  puts "Usage: ruby count_words.rb <filename>"
  exit
end

# Get the filename from the argument
filename = ARGV[0]

# Check if the file exists
unless File.exist?(filename)
  puts "File not found: #{filename}"
  exit
end

# Read the file content
file_content = File.read(filename)

# Find all content between quotes
matches = file_content.scan(/"(.*?)"/)

# Count the total words
word_count = matches.flatten.map { |str| str.split(/\s+/).count }.sum

# Output the total word count
puts "Total word count: #{word_count}"

