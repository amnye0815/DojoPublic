# 1. TASK: print "Hello World"
print("Hello World")
# 2. print "Hello Noelle!" with the name in a variable
name = "Austin!"
print("Hello", name )	# with a comma
print("Hello" + name )	# with a +
# 3. print "Hello 42!" with the number in a variable
name = "2!"
print( "Hello", name )	# with a comma
print( "Hello" + name )	# with a +	-- this one should give us an error!
# 4. print "I love to eat sushi and pizza." with the foods in variables
fave_food1 = "watermelon"
fave_food2 = "pot roast"
print("I love to eat {} and {}.".format( fave_food1, fave_food2)) # with .format()
print(f"I love to eat {fave_food1} and {fave_food2}.") # with an f string
# 5. play around with some other string methods to explore!
name = "Austin"
birthday = "08/15/1990"
city = "Chicago, IL"
print("My name is {}! I was born in {} on {}.".format(name, city, birthday))

x = "hello world"
print(x.title())
print(x.upper())
print(x.lower())
print(x.count("you're amazing")) # I'm wondering if this is wrong...unsure what it's supposed to do.
print(x.split("66")) # WTF does this do....?
print(x.isdigit())
