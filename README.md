# 9Spokes Coding Challenge

## Getting Started

- Clone the repo: `git clone https://github.com/vBoBv/coding-challenge.git`
- Move into react app project: `cd project-9spokes`
- Install all the dependencies: `npm install`
- Start the application: `npm start`

## Run Unit Tests with Jest (Built-In Testing Framework)

- In the terminal, run: `npm test`

## Project Stack:

- React
- Redux
- TypeScript
- Material UI
- Recharts
- Axios
- Immer

## Overview

This repo contains the instructions and the data you need to complete the _9Spokes coding challenge_. This challenge is not intended to be complex, but it is an opportunity for you to showcase your understanding and applying of good development practices.

You are encouraged to treat this as a real-life project. This typically means:

- Use version control effectively
- Include some basic documentation
- Include some unit tests
- Use a naming convention

You are free to use any programming language you'd like.

## The Challenge

You are tasked with developing an application that performs the following tasks in sequence:

- Read and parse an external data file `data.json` (located in this repo)
- Using this data, calculate and print the values of 5 common accounting metrics:
  1. Revenue
  2. Expenses
  3. Gross Profit Margin
  4. Net Profit Margin
  5. Working Capital Ratio
- Commit your changes, and upload all your work to a feature branch of your choice.

## Instructions

- Begin by _forking_ the current repository to your own `github.com` account
- Clone the repo locally
- Write your code, commit often
- Once you are satisfied with the output, push your changes to your `github.com` account
- Share the link

## Calculations

Use the formulas below to calculate your values:

### Revenue

This should be calculated by adding up all the values under `total_value` where the `account_category` field is set to `revenue`

### Expenses

This should be calculated by adding up all the values under `total_value` where the `account_category` field is set to `expense`

### Gross Profit Margin

This is calculated in two steps: first by adding all the `total_value` fields where the `account_type` is set to `sales` and the `value_type` is set to `debit`; then dividing that by the `revenue` value calculated earlier to generate a percentage value.

### Net Profit Margin

This metric is calculated by subtracting the `expenses` value from the `revenue` value and dividing the remainder by `revenue` to calculate a percentage.

### Working Capital Ratio

This is calculated dividing the `assets` by the `liabilities` creating a percentage value where `assets` are calculated by:

- adding the `total_value` from all records where the `account_category` is set to `assets`, the `value_type` is set to `debit`, and the `account_type` is one of `current`, `bank`, or `current_accounts_receivable`
- subtracting the `total_value` from all records where the `account_category` is set to `assets`, the `value_type` is set to `credit`, and the `account_type` is one of `current`, `bank`, or `current_accounts_receivable`

and liabilities are calculated by:

- adding the `total_value` from all records where the `account_category` is set to `liability`, the `value_type` is set to `credit`, and the `account_type` is one of `current` or `current_accounts_payable`
- subtracting the `total_value` from all records where the `account_category` is set to `liability`, the `value_type` is set to `debit`, and the `account_type` is one `current` or `current_accounts_payable`

## Formatting

All currency figures must be formatted as follows:

- The value is prefixed with a `$` sign
- A comma is used to separate every 3 digits in the thousands, millions, billions, and trillions
- Cents are removed

All percentage values must be formatted to one decimal digit and be prefixed with a `%` sign. Don't forget to multiply by 100 each time you're tasked with calculating a percentage value.

## Example

Below is what a typical output should look like. Please note this is _not_ the output of the challenge but a mere example.

```
$ ./myChallenge
Revenue: $519,169
Expenses: $411,664
Gross Profit Margin: 22%
Net Profit Margin: 21%
Working Capital Ratio: 95%
```

# Dependencies

If your program requires a special way to compile or a specific version of a toolset, please be sure to include that in your running instructions.

**Thank you and good luck!**
