# 🚀 Playwright Automation Framework

## 📌 Overview

This project is a Test Automation Framework built using Playwright, JavaScript, and Cucumber BDD. The framework follows the Page Object Model (POM) design pattern and automates end-to-end E-Commerce workflows.

The framework is designed to be scalable, maintainable, and reusable, with support for reporting, authentication management, environment configuration, and CI/CD integration.

---

## 🛠️ Tech Stack

- Playwright
- JavaScript (ES6+)
- Cucumber BDD
- Allure Reports
- GitHub Actions
- Page Object Model (POM)
- Node.js

---

## 📂 Project Structure

```text
automation_framework
│
├── pages
│   ├── loginPage.js
│   └── e-commerce
│       ├── productsPage.js
│       ├── cartPage.js
│       └── checkoutPage.js
│
├── features
│   ├── ecommerce.feature
│   ├── step-definitions
│   └── support
│
├── auth
│   └── auth.json
│
├── config
│   └── envConfig.js
│
├── test-data
│   └── sample.pdf
│
├── playwright.config.js
├── package.json
└── README.md
```

---

## ✅ Automated Test Scenarios

### Authentication
- User Login
- Authentication State Management

### Product Management
- Add Product To Cart
- Verify Product In Cart
- Remove Product From Cart
- Verify Empty Cart

### Product Validation
- Verify Out Of Stock Product
- Validate Product Messages

### Checkout Flow
- Proceed To Checkout
- Fill Checkout Details
- Review Order
- Place Order Successfully

### Order Management
- Verify Order History

### File Handling
- File Upload Automation

---

## 🎯 Framework Features

- Page Object Model (POM)
- Cucumber BDD Integration
- Environment Configuration using `.env`
- Authentication State Handling
- Reusable Page Classes
- Hooks (Before & After)
- Allure Reporting
- GitHub Actions CI/CD Integration

---

## ▶️ Installation

Clone the repository:

```bash
git clone <repository-url>
```

Install dependencies:

```bash
npm install
```

---

## ▶️ Execute Tests

Run all Cucumber tests:

```bash
npx cucumber-js
```

---

## 📊 Generate Allure Report

Generate report:

```bash
allure generate allure-results --clean -o allure-report
```

Open report:

```bash
allure open allure-report
```

---

## 📈 Skills Demonstrated

- Playwright Automation
- JavaScript
- Cucumber BDD
- Page Object Model
- End-to-End Testing
- UI Automation
- Allure Reporting
- GitHub Actions
- CI/CD
- Test Framework Development

---

## 🔮 Future Enhancements

- API Testing with Playwright
- SQL Database Validation
- Docker Integration
- Jenkins Integration
- Network Mocking
- Accessibility Testing

---

## 👩‍💻 Author

**Isha Ansari**

QA Automation Engineer | Playwright | JavaScript | Cucumber