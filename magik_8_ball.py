# base setup
name = input('Name: ')
question = input('Ask me anything... ')
answer = ''
#random number generation
import random
random_number = random.randint(1,9)
match random_number:
    case 1:
      answer = 'Yes - definitely'
    case 2:
      answer = 'It is decidedly so'
    case 3:
      answer = 'Without a doubt'
    case 4:
      answer = 'Reply hazy, try again'
    case 5:
      answer = 'Ask again later'
    case 6:
      answer = 'Better not tell you now'
    case 7:
      answer = 'My sources say no'
    case 8:
      answer = 'Outlook not so good'
    case 9:
      answer = 'Very doubtful'
    case default:
      answer = 'ERROR!'
# accounting for missing information
if question != '' and name != '':
  print(name + ' asks: ' + question)
  print('Magik 8-Ball Says: ' + answer) 
elif question != '' and name == '':
  print('Question: ' + question)
  print('Magik 8-Ball Says: ' + answer)
else:
  print("Sorry what was your question?")
  question = input('Ask me anything... ')
  print('Magik 8-Ball Says: ' + answer) 
