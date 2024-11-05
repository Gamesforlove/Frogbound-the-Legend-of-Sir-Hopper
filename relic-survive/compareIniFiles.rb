require 'inifile'

def compare_ini_files(file1, file2)
  ini1 = IniFile.load(file1)
  ini2 = IniFile.load(file2)

  unless ini1 && ini2
    puts "Error reading files."
    return
  end

  # Compare sections
  sections1 = ini1.sections
  sections2 = ini2.sections

  missing_in_file2 = sections1 - sections2
  missing_in_file1 = sections2 - sections1

  puts "Sections missing in #{file2}: #{missing_in_file2}" unless missing_in_file2.empty?
  puts "Sections missing in #{file1}: #{missing_in_file1}" unless missing_in_file1.empty?

  # Compare keys in common sections
  (sections1 & sections2).each do |section|
    keys1 = ini1[section].keys
    keys2 = ini2[section].keys

    missing_keys_in_file2 = keys1 - keys2
    missing_keys_in_file1 = keys2 - keys1

    unless missing_keys_in_file2.empty?
      puts "Keys missing in [#{section}] section of #{file2}: #{missing_keys_in_file2}"
    end

    unless missing_keys_in_file1.empty?
      puts "Keys missing in [#{section}] section of #{file1}: #{missing_keys_in_file1}"
    end

    if missing_keys_in_file1.empty? && missing_keys_in_file2.empty?
      puts "No key mismatches in [#{section}] section."
    end
  end
end

if ARGV.length != 2
  puts "Usage: ruby compare_ini.rb <file1.ini> <file2.ini>"
  exit
end

file1 = ARGV[0]
file2 = ARGV[1]

compare_ini_files(file1, file2)

