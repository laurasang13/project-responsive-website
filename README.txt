# Circle Website - Responsive Web Project

## Description

This project consists of a fully responsive website built with HTML, CSS, and JavaScript. It simulates a real-world workflow for a digital design agency called **Circle**.

The website includes multiple pages, dynamic content fetched from an API, and form validation.

---

## Features

* Responsive design (desktop, tablet, mobile)
* Navigation between pages
* Dynamic project loading using an external API
* Project detail page based on URL parameters (`?id=`)
* Contact form with JavaScript validation
* Clean and structured code (HTML, CSS, JS separated)

---

## Technologies Used

* HTML5
* CSS3 (Flexbox, responsive design)
* JavaScript (DOM manipulation, Fetch API)

---

## Pages

* **Home (`index.html`)**

  * Hero section
  * Recent projects (loaded dynamically)
  * Services section
  * Newsletter form

* **Projects (`projects.html`)**

  * Dynamic project details using API
  * URL-based navigation (`projects.html?id=X`)

* **Contact (`contact.html`)**

  * Contact form
  * JavaScript validation

---

## JavaScript Functionality

### Fetch API

Projects are retrieved from an external API:

```
https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects
```

### Dynamic Routing

The project page uses URL parameters:

```
projects.html?id=1
```

JavaScript reads the ID and displays the corresponding project.

### Form Validation

The contact form validates:

* Required fields
* Email format
* Custom rule:

  * Name cannot be "Ironhack"

---

## Project Structure

```
/project-root
│
├── index.html
├── projects.html
├── contact.html
│
├── /css
│   ├── style.css
│   ├── index.css
│   ├── projects.css
│   └── contact.css
│
├── /js
│   ├── projects.js
│   └── contact.js
│
└── /assets
```

---

Deployment

The project is deployed using Netlify.

Live URL: *(add your link here)*
GitHub repository: *(add your repo here)*

---

Learning Outcomes

* Building a responsive website from scratch
* Working with APIs using JavaScript
* Manipulating the DOM dynamically
* Handling navigation using URL parameters
* Structuring a multi-page project

---
