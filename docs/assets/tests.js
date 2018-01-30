'use strict';

define('ember-adjustable-number/tests/app.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass jshint.');
  });
});
define('ember-adjustable-number/tests/helpers/destroy-app', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = destroyApp;

  function destroyApp(application) {
    _ember['default'].run(application, 'destroy');
  }
});
define('ember-adjustable-number/tests/helpers/destroy-app.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/destroy-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass jshint.');
  });
});
define('ember-adjustable-number/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'ember', 'ember-adjustable-number/tests/helpers/start-app', 'ember-adjustable-number/tests/helpers/destroy-app'], function (exports, _qunit, _ember, _emberAdjustableNumberTestsHelpersStartApp, _emberAdjustableNumberTestsHelpersDestroyApp) {
  var Promise = _ember['default'].RSVP.Promise;

  exports['default'] = function (name) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _emberAdjustableNumberTestsHelpersStartApp['default'])();

        if (options.beforeEach) {
          return options.beforeEach.apply(this, arguments);
        }
      },

      afterEach: function afterEach() {
        var _this = this;

        var afterEach = options.afterEach && options.afterEach.apply(this, arguments);
        return Promise.resolve(afterEach).then(function () {
          return (0, _emberAdjustableNumberTestsHelpersDestroyApp['default'])(_this.application);
        });
      }
    });
  };
});
define('ember-adjustable-number/tests/helpers/module-for-acceptance.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/module-for-acceptance.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass jshint.');
  });
});
define('ember-adjustable-number/tests/helpers/resolver', ['exports', 'ember-adjustable-number/resolver', 'ember-adjustable-number/config/environment'], function (exports, _emberAdjustableNumberResolver, _emberAdjustableNumberConfigEnvironment) {

  var resolver = _emberAdjustableNumberResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _emberAdjustableNumberConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _emberAdjustableNumberConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});
define('ember-adjustable-number/tests/helpers/resolver.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass jshint.');
  });
});
define('ember-adjustable-number/tests/helpers/start-app', ['exports', 'ember', 'ember-adjustable-number/app', 'ember-adjustable-number/config/environment'], function (exports, _ember, _emberAdjustableNumberApp, _emberAdjustableNumberConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var application = undefined;

    var attributes = _ember['default'].merge({}, _emberAdjustableNumberConfigEnvironment['default'].APP);
    attributes = _ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    _ember['default'].run(function () {
      application = _emberAdjustableNumberApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});
define('ember-adjustable-number/tests/helpers/start-app.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/start-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass jshint.');
  });
});
define('ember-adjustable-number/tests/resolver.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass jshint.');
  });
});
define('ember-adjustable-number/tests/router.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | router.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass jshint.');
  });
});
define('ember-adjustable-number/tests/test-helper', ['exports', 'ember-adjustable-number/tests/helpers/resolver', 'ember-qunit'], function (exports, _emberAdjustableNumberTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_emberAdjustableNumberTestsHelpersResolver['default']);
});
define('ember-adjustable-number/tests/test-helper.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | test-helper.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass jshint.');
  });
});
/* jshint ignore:start */

require('ember-adjustable-number/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;

/* jshint ignore:end */
//# sourceMappingURL=tests.map
