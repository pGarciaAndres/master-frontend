describe('Login specs', () => {
  it('visit the login page located at /', () => {
    cy.visit('/');
  });

  it('should the input name has the focus when user clicks on it', () => {
    // Arrange
    // Act
    cy.visit('/');
    cy.findByRole('textbox').click();

    // Assert
    cy.findByRole('textbox').should('have.focus');
  });

  it('should the input password has the focus when user clicks on it', () => {
    // Arrange
    // Act
    cy.visit('/');
    cy.findByLabelText('Contraseña *').click();

    // Assert
    cy.findByLabelText('Contraseña *').should('have.focus');
  });

  it('should display error message when input name is clicked and then it loses the focus', () => {
    // Arrange
    // Act
    cy.visit('/');
    cy.findByRole('textbox').click();
    cy.findByLabelText('Contraseña *').click();

    // Assert
    cy.findByText('Debe informar el campo').should('exist');
  });

  it('should display error message when input password is clicked and then it loses the focus', () => {
    // Arrange
    // Act
    cy.visit('/');
    cy.findByLabelText('Contraseña *').click();
    cy.findByRole('textbox').click();

    // Assert
    cy.findByText('Debe informar el campo').should('exist');
  });

  it('should display error alert when username and or password is incorrect', () => {
    // Arrange
    const userText = 'username';
    const pwdText = 'password';

    // Act
    cy.visit('/');
    cy.findByRole('textbox').as('username');
    cy.findByLabelText('Contraseña *').as('password');
    cy.get('@username').type(userText);
    cy.get('@password').type(pwdText);
    cy.findByRole('button', { name: /login/i }).click();

    // Assert
    cy.findByRole('alert')
      .should('be.visible')
      .should('have.text', 'Usuario y/o password no válidos');
  });

  it('should navigate to the authorized url when username and password are correct', () => {
    // Arrange
    const userText = 'admin';
    const pwdText = 'test';

    // Act
    cy.visit('/');
    cy.findByRole('textbox').as('username');
    cy.findByLabelText('Contraseña *').as('password');
    cy.get('@username').type(userText);
    cy.get('@password').type(pwdText);
    cy.findByRole('button', { name: /login/i }).click();

    // Assert
    cy.url().should('eq', 'http://localhost:8080/#/submodule-list');
  });
});
