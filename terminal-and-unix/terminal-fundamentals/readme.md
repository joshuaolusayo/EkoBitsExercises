1. What does the man command do? Type in man rm. How do you scroll and get out?
	It summons manual pages for almost any command. They are the equivalent of a help system for the command line. The mouse or trackpad can be used to scroll through the pages displayed by the man command. 'q' can be used to quit.
	'Control + D' can be used to advance half a page. 'Control + B' can be used to go back a page and 'Control + U' can be used to back half a page.

2. Look at the man page for ls. What does the -l flag do? What does the -a flag do?
	The -l flag gives additional information about each file being displayed. The information include: file mode, number of links, owner name, group name, number of bytes in the file, abbreviated month, day-of-month file was last modified, hour file last modified, minute file last modified, and the pathname.
	The -a flag list all entries and also include directory entries whose names begin with a dot (.).

3. Type the following command to download and save the contents of google.com: curl https://www.google.com > google.html
4. Use less to look at the contents of google.html
	'curl https://www.google.com > google.html'
	'less google.html'

5. Look at the man page for less. Read the section on /pattern. Search for the text hplogo in the google.html file.
	'less -p hplogo google.html'


6. How do you jump between words in the terminal?
	Using 'Option + left arrow' or 'Option + right arrow'

7. How do you get to the end of a line in terminal?
	'Option + e'

8. How do you move your cursor to the beginning in terminal?
	'Option + a'

9. How do you delete a word (without pressing backspace multiple times) in terminal?
	'Option + delete'

10. What is the difference between a terminal and shell?
	The terminal serves as the user interface of the whole shell. The shell runs the program that are put inside the shell. The shell serves as an intermediary between the input commands and what is shown as output on the interface.

11. What is an absolute path?
	An absolute path is a location of a file or directory that starts from the root location. It provides a complete path address of a file or directory.

12. What is an relative path?
	An relative path is a location of a file or directory that starts from the current location.

13. What is a flag? Give three examples of flags you have used.
	A flag adds additional information and functionality to the previous command inserted. Some flags I have used before are -a, -l, 'p', -r for the less, rm, ls commands

14. What do the r and f flags do with the rm command?
	The r flag is used to remove a folder and the files inside the folder. The f is used for force removal.