'use strict';

describe('Controller: ContactCtrl', function () {

  // load the controller's module
  beforeEach(module('angularYoApp'));

  var ContactCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ContactCtrl = $controller('ContactCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a email to the scope', function () {
    expect(ContactCtrl.email).toBe('atosfiel@gmail.com');
  });
});
