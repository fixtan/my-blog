# basic_writer.py
basic_code = """
10 PRINT "HELLO MSX!"
20 GOTO 10
"""

with open("hello.bas", "w", encoding="ascii") as f:
    for line in basic_code.strip().splitlines():
        f.write(line.strip() + "\r\n")