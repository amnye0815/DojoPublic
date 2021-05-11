class User:
    def __init__(self, name, email):
        self.name = name
        self.email = email
        self.account_balance = 0

    def make_deposit(self, amount):
        self.account_balance += amount

    def make_withdrawal(self, amount):
        self.account_balance -= amount

    def transfer_money(self, other_user, amount):
        self.account_balance -= amount
        other_user.account_balance += amount

    def display_user_balance(self):
        print(f"User: {self.name}, Balance: ${self.account_balance}")

austin = User('Austin Nye','amnye0815@gmail.com')
jess = User('Jessica Perry','jlynnperry@gmail.com')
jayne = User('Jayne Harris','jharris@gmail.com')

austin.make_deposit(100)
austin.make_deposit(45)
austin.make_deposit(600)
austin.make_withdrawal(66)
austin.display_user_balance()

jess.make_deposit(25)
jess.make_deposit(4000)
jess.make_withdrawal(500)
jess.make_withdrawal(33)
jess.display_user_balance()

jayne.make_deposit(5000)
jayne.make_withdrawal(500)
jayne.make_withdrawal(42)
jayne.make_withdrawal(445)
jayne.display_user_balance()

austin.transfer_money(jayne, 150)
austin.display_user_balance()
jayne.display_user_balance()