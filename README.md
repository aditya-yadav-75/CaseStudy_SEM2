# Review Form with Auto-Save (HTML, CSS, JavaScript)

A simple web-based **Review Form** that automatically saves user input using the browser's **localStorage**.  
The form ensures that users do not lose their data if the page is refreshed or accidentally closed.

---

## Overview

Web forms are widely used for collecting feedback, reviews, and contact information. However, users often lose their entered data if the page refreshes before submitting the form.

This project solves that problem by implementing an **auto-save mechanism** using JavaScript and the browser's **localStorage API**.

The form automatically stores user input and restores it when the page reloads.

---

## Features

- Clean and responsive form interface
- Automatic form data saving
- Data restoration after page refresh
- Character counter for the message field
- Clear saved data button
- Glass-style UI design using CSS
- Radial gradient background
- Smooth hover animations for buttons

---

## Technologies Used

- **HTML5** – Structure of the form  
- **CSS3** – Styling and UI design  
- **JavaScript** – Auto-save logic and interactivity  
- **localStorage API** – Client-side data storage

---

## How the Form Works

1. The user enters data into the form fields:
   - Name
   - Email
   - Message
   - Department

2. JavaScript detects changes in the form fields using **event listeners**.

3. The form data is automatically saved to **localStorage**.

4. When the page reloads:
   - Stored data is retrieved
   - The form fields are automatically populated

5. The user can also:
   - Submit the form
   - Clear all saved data

---

## Example Interface

The form includes the following fields:

- Name  
- Email  
- Message (with character counter)  
- Department selection dropdown  

Buttons:

- Submit Form  
- Clear Saved Data  

---

## How to Run the Project

1. Download or clone the repository.

2. Open the project folder.

3. Open the file:
   index.html

4. The form will run directly in your web browser.

No additional installation is required.

---

## Future Improvements

Possible improvements for this project include:

- Form validation with error messages
- Backend integration for storing reviews
- Animated UI interactions
- Dark mode support
- Mobile-first responsive improvements

---

## Author

Aditya Yadav  
Itm Skills University

