# Contributing to Library Management System

Thank you for considering contributing to the Library Management System! We welcome contributions from the community and are pleased to have you join us.

## Table of Contents

1. [Code of Conduct](#code-of-conduct)
2. [Getting Started](#getting-started)
3. [Development Workflow](#development-workflow)
4. [Git Workflow](#git-workflow)
5. [Branching Strategy](#branching-strategy)
6. [Coding Standards](#coding-standards)
7. [Commit Message Guidelines](#commit-message-guidelines)
8. [Pull Request Process](#pull-request-process)
9. [Code Review Process](#code-review-process)
10. [Testing Guidelines](#testing-guidelines)
11. [Documentation](#documentation)

---

## Code of Conduct

### Our Pledge

We are committed to providing a welcoming and inspiring community for all. Please be respectful and constructive in your interactions.

### Expected Behavior

- Be respectful and inclusive
- Accept constructive criticism gracefully
- Focus on what's best for the community
- Show empathy towards other community members

### Unacceptable Behavior

- Harassment, discrimination, or trolling
- Publishing others' private information
- Unprofessional or offensive comments
- Other conduct which could reasonably be considered inappropriate

---

## Getting Started

### Prerequisites

Before contributing, ensure you have:
- Read the [README.md](../README.md)
- Set up your development environment
- Reviewed the [API Documentation](./API.md)
- Familiarized yourself with the codebase

### First-Time Contributors

1. **Find an Issue**: Look for issues labeled `good first issue` or `help wanted`
2. **Ask Questions**: Don't hesitate to ask for clarification in the issue comments
3. **Start Small**: Begin with documentation fixes or small bug fixes
4. **Learn the Workflow**: Follow our development process closely

---

## Development Workflow

### 1. Fork and Clone

```bash
# Fork the repository on GitHub
# Clone your fork
git clone https://github.com/YOUR_USERNAME/Library-Management-System.git
cd Library-Management-System

# Add upstream remote
git remote add upstream https://github.com/hibounashi/Library-Management-System.git
```

### 2. Set Up Development Environment

```bash
# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install

# Set up environment variables
cp backend/.env.example backend/.env
cp frontend/.env.example frontend/.env
```

### 3. Create a Branch

```bash
# Update your main branch
git checkout main
git pull upstream main

# Create a feature branch
git checkout -b feature/your-feature-name
```

### 4. Make Changes

- Write clean, readable code
- Follow coding standards (see below)
- Add tests for new features
- Update documentation as needed

### 5. Test Your Changes

```bash
# Run backend tests
cd backend
npm test

# Run frontend tests
cd frontend
npm test

# Run linting
npm run lint
```

### 6. Commit Your Changes

```bash
git add .
git commit -m "feat: add user profile feature"
```

### 7. Push and Create Pull Request

```bash
git push origin feature/your-feature-name
```

Then create a Pull Request on GitHub.

---

## Git Workflow

### Keeping Your Fork Updated

```bash
# Fetch upstream changes
git fetch upstream

# Merge upstream main into your main
git checkout main
git merge upstream/main

# Push updates to your fork
git push origin main
```

### Working with Branches

```bash
# List all branches
git branch -a

# Switch to a branch
git checkout branch-name

# Delete a local branch
git branch -d branch-name

# Delete a remote branch
git push origin --delete branch-name
```

### Handling Merge Conflicts

```bash
# Update your feature branch with main
git checkout feature/your-feature
git fetch upstream
git merge upstream/main

# Resolve conflicts in your editor
# After resolving:
git add .
git commit -m "chore: resolve merge conflicts"
```

---

## Branching Strategy

We follow a simplified Git Flow model:

### Branch Types

#### `main`
- Production-ready code
- Protected branch
- Only accepts Pull Requests
- All commits must pass CI/CD

#### `develop` (Optional)
- Integration branch
- Latest development changes
- Source for feature branches

#### Feature Branches: `feature/feature-name`
- New features or enhancements
- Branch from: `main` or `develop`
- Merge into: `main` or `develop`
- Examples:
  - `feature/user-authentication`
  - `feature/book-search`
  - `feature/email-notifications`

#### Bugfix Branches: `bugfix/bug-name`
- Bug fixes for the next release
- Branch from: `main` or `develop`
- Merge into: `main` or `develop`
- Examples:
  - `bugfix/login-error`
  - `bugfix/book-count-issue`

#### Hotfix Branches: `hotfix/critical-fix`
- Critical production fixes
- Branch from: `main`
- Merge into: `main` and `develop`
- Examples:
  - `hotfix/security-patch`
  - `hotfix/database-connection`

#### Documentation: `docs/doc-name`
- Documentation updates
- Branch from: `main`
- Merge into: `main`
- Examples:
  - `docs/api-documentation`
  - `docs/readme-update`

#### Refactoring: `refactor/component-name`
- Code refactoring
- Branch from: `main`
- Merge into: `main`
- Examples:
  - `refactor/user-controller`
  - `refactor/book-service`

### Branch Naming Conventions

- Use lowercase
- Use hyphens to separate words
- Be descriptive but concise
- Include the type prefix

**Good Examples:**
- `feature/add-book-recommendations`
- `bugfix/fix-date-format`
- `docs/update-contribution-guide`

**Bad Examples:**
- `my-changes`
- `fix`
- `FEATURE-NEW-THING`

---

## Coding Standards

### JavaScript/Node.js Standards

#### General Rules

- Use **ES6+** features (const, let, arrow functions, etc.)
- Use **2 spaces** for indentation
- Use **semicolons**
- Use **single quotes** for strings
- Max line length: **100 characters**

#### Example

```javascript
// Good
const getBookById = async (id) => {
  try {
    const book = await Book.findById(id);
    return book;
  } catch (error) {
    throw new Error('Book not found');
  }
};

// Bad
var getBookById=function(id){
return Book.findById(id)
}
```

#### Naming Conventions

- **Variables**: camelCase (`userName`, `bookCount`)
- **Constants**: UPPER_SNAKE_CASE (`MAX_BOOKS`, `API_URL`)
- **Functions**: camelCase (`getUserProfile`, `calculateFine`)
- **Classes**: PascalCase (`UserController`, `BookService`)
- **Files**: kebab-case (`user-controller.js`, `book-service.js`)
- **Components**: PascalCase (`BookCard.jsx`, `UserProfile.jsx`)

#### File Structure

```javascript
// 1. Imports
const express = require('express');
const Book = require('../models/Book');

// 2. Constants
const MAX_BORROW_LIMIT = 5;

// 3. Functions/Class
const borrowBook = async (req, res) => {
  // Implementation
};

// 4. Exports
module.exports = { borrowBook };
```

### React/Frontend Standards

#### Component Structure

```jsx
// 1. Imports
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './BookCard.css';

// 2. Component
const BookCard = ({ book, onBorrow }) => {
  // Hooks
  const [loading, setLoading] = useState(false);
  
  // Effects
  useEffect(() => {
    // Effect logic
  }, []);
  
  // Handlers
  const handleBorrow = () => {
    // Handler logic
  };
  
  // Render
  return (
    <div className="book-card">
      {/* JSX */}
    </div>
  );
};

// 3. Export
export default BookCard;
```

#### React Best Practices

- Use **functional components** with hooks
- Extract reusable logic into **custom hooks**
- Use **PropTypes** or **TypeScript** for type checking
- Keep components **small and focused**
- Use **meaningful component names**

### Backend Best Practices

#### Express Route Handlers

```javascript
// Good: Async/await with try-catch
const getBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json({ success: true, data: books });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Use middleware for error handling
const asyncHandler = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};
```

#### MongoDB Models

```javascript
const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please provide a book title'],
    trim: true,
    maxlength: [200, 'Title cannot be more than 200 characters']
  },
  author: {
    type: String,
    required: [true, 'Please provide an author name']
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Book', BookSchema);
```

### CSS/Styling Standards

- Use **CSS Modules** or **styled-components**
- Follow **BEM methodology** for class names
- Use **CSS variables** for colors and spacing
- Keep styles **component-scoped**

```css
/* BEM Example */
.book-card {
  padding: 1rem;
}

.book-card__title {
  font-size: 1.5rem;
  font-weight: bold;
}

.book-card__title--highlighted {
  color: var(--primary-color);
}
```

---

## Commit Message Guidelines

We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification.

### Format

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types

- **feat**: A new feature
- **fix**: A bug fix
- **docs**: Documentation changes
- **style**: Code style changes (formatting, semicolons, etc.)
- **refactor**: Code refactoring
- **test**: Adding or updating tests
- **chore**: Maintenance tasks

### Examples

```bash
# Feature
git commit -m "feat(auth): add password reset functionality"

# Bug fix
git commit -m "fix(books): resolve book count display issue"

# Documentation
git commit -m "docs(readme): update installation instructions"

# Refactor
git commit -m "refactor(user): simplify user validation logic"

# Multiple changes
git commit -m "feat(borrowing): add book return feature

- Add return endpoint
- Update book availability count
- Send return confirmation email

Closes #123"
```

### Best Practices

- Use the **imperative mood** ("add" not "added")
- Keep the first line under **50 characters**
- Capitalize the first letter
- No period at the end
- Reference issues with `#issue-number`
- Use `Closes #123` to auto-close issues

---

## Pull Request Process

### Before Creating a PR

✅ **Checklist:**
- [ ] Code follows the style guidelines
- [ ] All tests pass locally
- [ ] New tests added for new features
- [ ] Documentation updated
- [ ] No console.log statements (use proper logging)
- [ ] No commented-out code
- [ ] Branch is up to date with main

### Creating a Pull Request

1. **Title**: Use clear, descriptive title
   - Good: "Add user profile editing feature"
   - Bad: "Update files"

2. **Description**: Use the PR template

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
- Describe how you tested your changes
- Include test cases

## Screenshots (if applicable)
Add screenshots for UI changes

## Related Issues
Closes #123
```

3. **Labels**: Add appropriate labels
   - `bug`, `enhancement`, `documentation`, `good first issue`

4. **Reviewers**: Request review from maintainers

### Draft Pull Requests

Use draft PRs for work in progress:
```
[WIP] Add user authentication feature
```

### PR Size Guidelines

- **Small**: < 200 lines changed ✅ Preferred
- **Medium**: 200-500 lines changed ⚠️ Acceptable
- **Large**: > 500 lines changed ❌ Should be split

---

## Code Review Process

### For Authors

#### Before Requesting Review

- Self-review your code
- Run all tests and linting
- Ensure CI passes
- Add clear PR description

#### During Review

- **Respond promptly** to feedback
- Be **open to suggestions**
- Ask questions if unclear
- Make requested changes promptly
- Re-request review after changes

#### Handling Feedback

```markdown
# Good responses:
"Good catch! I'll update this."
"I chose this approach because X. Would you prefer Y?"
"Can you clarify what you mean by Z?"

# Avoid:
"This works fine."
"I don't agree."
```

### For Reviewers

#### What to Review

✅ **Focus on:**
- Code correctness and logic
- Edge cases and error handling
- Performance implications
- Security vulnerabilities
- Code readability and maintainability
- Test coverage
- Documentation accuracy

#### Review Etiquette

**Do:**
- Be constructive and respectful
- Explain the "why" behind suggestions
- Ask questions instead of making demands
- Acknowledge good code
- Use "we" instead of "you"

```markdown
# Good:
"We could simplify this by using Array.map(). What do you think?"
"Great use of async/await here!"
"Could we add a test case for the empty input scenario?"

# Avoid:
"This is wrong."
"You should never do this."
"Bad code."
```

**Types of Comments:**
- 🔴 **Required**: Must be changed before merge
- 🟡 **Suggestion**: Nice to have, author decides
- 🟢 **Nitpick**: Minor style suggestion
- 💬 **Question**: Asking for clarification
- 👍 **Praise**: Acknowledging good work

#### Review Timeline

- **Small PRs**: Review within 24 hours
- **Medium PRs**: Review within 2-3 days
- **Large PRs**: Review within a week

### Approval Process

- **1 approval** required for merging (minimum)
- **2 approvals** recommended for critical changes
- All CI checks must pass
- No unresolved conversations

---

## Testing Guidelines

### Test Structure

```javascript
// Example: Book Service Test
describe('BookService', () => {
  describe('getBookById', () => {
    it('should return a book when valid ID is provided', async () => {
      // Arrange
      const mockBook = { _id: '123', title: 'Test Book' };
      
      // Act
      const result = await BookService.getBookById('123');
      
      // Assert
      expect(result).toEqual(mockBook);
    });
    
    it('should throw error when book is not found', async () => {
      // Test implementation
    });
  });
});
```

### Test Coverage Goals

- **Unit Tests**: 80%+ coverage
- **Integration Tests**: Core features
- **E2E Tests**: Critical user flows

### Running Tests

```bash
# Run all tests
npm test

# Run specific test file
npm test -- BookService.test.js

# Run with coverage
npm test -- --coverage

# Run in watch mode
npm test -- --watch
```

---

## Documentation

### Code Comments

```javascript
// Good: Explain "why", not "what"
// Calculate fine with grace period because library policy allows 2 days
const fine = calculateFine(dueDate, returnDate, GRACE_PERIOD);

// Bad: Redundant comments
// Get the user by ID
const user = getUserById(id);
```

### JSDoc Comments

```javascript
/**
 * Borrow a book for a user
 * @param {string} userId - The ID of the user
 * @param {string} bookId - The ID of the book
 * @returns {Promise<Object>} The borrowing record
 * @throws {Error} If book is not available
 */
async function borrowBook(userId, bookId) {
  // Implementation
}
```

### README Updates

When adding new features, update:
- Installation steps (if needed)
- Configuration options
- Usage examples
- API documentation

---

## Getting Help

### Communication Channels

- **GitHub Issues**: Bug reports and feature requests
- **GitHub Discussions**: Questions and general discussions
- **Email**: dev@library.com for sensitive issues

### Asking Good Questions

1. **Search first**: Check existing issues and docs
2. **Be specific**: Include error messages, steps to reproduce
3. **Provide context**: OS, Node version, relevant code
4. **Share what you tried**: Show your debugging attempts

---

## Recognition

Contributors will be recognized in:
- README.md contributors section
- Release notes
- GitHub contributors page

Thank you for contributing to the Library Management System! 🎉

---

**Questions?** Open an issue or reach out to the maintainers.

**Happy Coding!** 🚀
