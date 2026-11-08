# My Opportunity Tracker

## The Problem
Many students find scholarships, internships, mentorships, and training
programs but struggle to remember deadlines and next steps. This app helps
them keep everything in one place and track their progress.

## Features
- Add an opportunity with a name, type, deadline, and next action
- Form validation (required fields; text fields can't be only spaces)
- Opportunity cards with a status badge: Interested, Preparing, or Submitted
- Change an opportunity's status from a dropdown
- Delete an opportunity
- Progress summary: total, being prepared, and submitted
- Data saved in the browser with localStorage
- Responsive layout for computers and phones

## How to Run
1. Download or clone this repository.
2. Open `index.html` in your browser. No installation is needed.

## JavaScript Concepts Used
- Arrays and objects to store opportunity records
- `forEach()` loops to build cards
- `filter()` and `find()` to delete, update, and count records
- DOM selection and creating elements with `createElement()`
- Event listeners (`submit`, `change`, `click`) and event delegation
- Form validation with `trim()`
- `localStorage`, `JSON.stringify()`, and `JSON.parse()`
- `try/catch` to handle corrupted saved data

## Notes
Data is stored in the browser on one device and does not sync between devices.
## Author
Grace KABANYANA