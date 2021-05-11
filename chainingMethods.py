class User:
    def __init__(self, name, email):
        self.name = name
        self.email = email
        self.account_balance = 0

    def make_deposit(self, amount):
        self.account_balance += amount
        return self

    def make_withdrawal(self, amount):
        self.account_balance -= amount
        return self

    def transfer_money(self, other_user, amount):
        self.account_balance -= amount
        other_user.account_balance += amount
        return self

    def display_user_balance(self):
        print(f"User: {self.name}, Balance: ${self.account_balance}")
        return self

austin = User('Austin Nye','amnye0815@gmail.com')
jess = User('Jessica Perry','jlynnperry@gmail.com')
jayne = User('Jayne Harris','jharris@gmail.com')

austin.make_deposit(100).make_deposit(45).make_deposit(600).make_withdrawal(66).display_user_balance()

jess.make_deposit(25).make_deposit(4000).make_withdrawal(500).make_withdrawal(33).display_user_balance()

jayne.make_deposit(5000).make_withdrawal(500).make_withdrawal(42).make_withdrawal(445).display_user_balance()

austin.transfer_money(jayne, 150).display_user_balance()
jayne.display_user_balance()