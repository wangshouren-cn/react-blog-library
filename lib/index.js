import React, { useCallback, useState, useRef, useMemo, useEffect, useContext, useLayoutEffect } from 'react';
import dayjs from 'dayjs';
import ReactDOM from 'react-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

var jsxRuntime = {exports: {}};

var reactJsxRuntime_production_min = {};

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};

/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f=React,g=60103;reactJsxRuntime_production_min.Fragment=60107;if("function"===typeof Symbol&&Symbol.for){var h=Symbol.for;g=h("react.element");reactJsxRuntime_production_min.Fragment=h("react.fragment");}var m=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n$1=Object.prototype.hasOwnProperty,p={key:!0,ref:!0,__self:!0,__source:!0};
function q(c,a,k){var b,d={},e=null,l=null;void 0!==k&&(e=""+k);void 0!==a.key&&(e=""+a.key);void 0!==a.ref&&(l=a.ref);for(b in a)n$1.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps,a)void 0===d[b]&&(d[b]=a[b]);return {$$typeof:g,type:c,key:e,ref:l,props:d,_owner:m.current}}reactJsxRuntime_production_min.jsx=q;reactJsxRuntime_production_min.jsxs=q;

var reactJsxRuntime_development = {};

/** @license React v17.0.2
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

(function (exports) {

if (process.env.NODE_ENV !== "production") {
  (function() {

var React$1 = React;
var _assign = objectAssign;

// ATTENTION
// When adding new symbols to this file,
// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var REACT_ELEMENT_TYPE = 0xeac7;
var REACT_PORTAL_TYPE = 0xeaca;
exports.Fragment = 0xeacb;
var REACT_STRICT_MODE_TYPE = 0xeacc;
var REACT_PROFILER_TYPE = 0xead2;
var REACT_PROVIDER_TYPE = 0xeacd;
var REACT_CONTEXT_TYPE = 0xeace;
var REACT_FORWARD_REF_TYPE = 0xead0;
var REACT_SUSPENSE_TYPE = 0xead1;
var REACT_SUSPENSE_LIST_TYPE = 0xead8;
var REACT_MEMO_TYPE = 0xead3;
var REACT_LAZY_TYPE = 0xead4;
var REACT_BLOCK_TYPE = 0xead9;
var REACT_SERVER_BLOCK_TYPE = 0xeada;
var REACT_FUNDAMENTAL_TYPE = 0xead5;
var REACT_DEBUG_TRACING_MODE_TYPE = 0xeae1;
var REACT_LEGACY_HIDDEN_TYPE = 0xeae3;

if (typeof Symbol === 'function' && Symbol.for) {
  var symbolFor = Symbol.for;
  REACT_ELEMENT_TYPE = symbolFor('react.element');
  REACT_PORTAL_TYPE = symbolFor('react.portal');
  exports.Fragment = symbolFor('react.fragment');
  REACT_STRICT_MODE_TYPE = symbolFor('react.strict_mode');
  REACT_PROFILER_TYPE = symbolFor('react.profiler');
  REACT_PROVIDER_TYPE = symbolFor('react.provider');
  REACT_CONTEXT_TYPE = symbolFor('react.context');
  REACT_FORWARD_REF_TYPE = symbolFor('react.forward_ref');
  REACT_SUSPENSE_TYPE = symbolFor('react.suspense');
  REACT_SUSPENSE_LIST_TYPE = symbolFor('react.suspense_list');
  REACT_MEMO_TYPE = symbolFor('react.memo');
  REACT_LAZY_TYPE = symbolFor('react.lazy');
  REACT_BLOCK_TYPE = symbolFor('react.block');
  REACT_SERVER_BLOCK_TYPE = symbolFor('react.server.block');
  REACT_FUNDAMENTAL_TYPE = symbolFor('react.fundamental');
  symbolFor('react.scope');
  symbolFor('react.opaque.id');
  REACT_DEBUG_TRACING_MODE_TYPE = symbolFor('react.debug_trace_mode');
  symbolFor('react.offscreen');
  REACT_LEGACY_HIDDEN_TYPE = symbolFor('react.legacy_hidden');
}

var MAYBE_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = '@@iterator';
function getIteratorFn(maybeIterable) {
  if (maybeIterable === null || typeof maybeIterable !== 'object') {
    return null;
  }

  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];

  if (typeof maybeIterator === 'function') {
    return maybeIterator;
  }

  return null;
}

var ReactSharedInternals = React$1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;

function error(format) {
  {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    printWarning('error', format, args);
  }
}

function printWarning(level, format, args) {
  // When changing this logic, you might want to also
  // update consoleWithStackDev.www.js as well.
  {
    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
    var stack = ReactDebugCurrentFrame.getStackAddendum();

    if (stack !== '') {
      format += '%s';
      args = args.concat([stack]);
    }

    var argsWithFormat = args.map(function (item) {
      return '' + item;
    }); // Careful: RN currently depends on this prefix

    argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
    // breaks IE9: https://github.com/facebook/react/issues/13610
    // eslint-disable-next-line react-internal/no-production-logging

    Function.prototype.apply.call(console[level], console, argsWithFormat);
  }
}

// Filter certain DOM attributes (e.g. src, href) if their values are empty strings.

var enableScopeAPI = false; // Experimental Create Event Handle API.

function isValidElementType(type) {
  if (typeof type === 'string' || typeof type === 'function') {
    return true;
  } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


  if (type === exports.Fragment || type === REACT_PROFILER_TYPE || type === REACT_DEBUG_TRACING_MODE_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_LEGACY_HIDDEN_TYPE || enableScopeAPI ) {
    return true;
  }

  if (typeof type === 'object' && type !== null) {
    if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_BLOCK_TYPE || type[0] === REACT_SERVER_BLOCK_TYPE) {
      return true;
    }
  }

  return false;
}

function getWrappedName(outerType, innerType, wrapperName) {
  var functionName = innerType.displayName || innerType.name || '';
  return outerType.displayName || (functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName);
}

function getContextName(type) {
  return type.displayName || 'Context';
}

function getComponentName(type) {
  if (type == null) {
    // Host root, text node or just invalid type.
    return null;
  }

  {
    if (typeof type.tag === 'number') {
      error('Received an unexpected object in getComponentName(). ' + 'This is likely a bug in React. Please file an issue.');
    }
  }

  if (typeof type === 'function') {
    return type.displayName || type.name || null;
  }

  if (typeof type === 'string') {
    return type;
  }

  switch (type) {
    case exports.Fragment:
      return 'Fragment';

    case REACT_PORTAL_TYPE:
      return 'Portal';

    case REACT_PROFILER_TYPE:
      return 'Profiler';

    case REACT_STRICT_MODE_TYPE:
      return 'StrictMode';

    case REACT_SUSPENSE_TYPE:
      return 'Suspense';

    case REACT_SUSPENSE_LIST_TYPE:
      return 'SuspenseList';
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_CONTEXT_TYPE:
        var context = type;
        return getContextName(context) + '.Consumer';

      case REACT_PROVIDER_TYPE:
        var provider = type;
        return getContextName(provider._context) + '.Provider';

      case REACT_FORWARD_REF_TYPE:
        return getWrappedName(type, type.render, 'ForwardRef');

      case REACT_MEMO_TYPE:
        return getComponentName(type.type);

      case REACT_BLOCK_TYPE:
        return getComponentName(type._render);

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            return getComponentName(init(payload));
          } catch (x) {
            return null;
          }
        }
    }
  }

  return null;
}

// Helpers to patch console.logs to avoid logging during side-effect free
// replaying on render function. This currently only patches the object
// lazily which won't cover if the log function was extracted eagerly.
// We could also eagerly patch the method.
var disabledDepth = 0;
var prevLog;
var prevInfo;
var prevWarn;
var prevError;
var prevGroup;
var prevGroupCollapsed;
var prevGroupEnd;

function disabledLog() {}

disabledLog.__reactDisabledLog = true;
function disableLogs() {
  {
    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      prevLog = console.log;
      prevInfo = console.info;
      prevWarn = console.warn;
      prevError = console.error;
      prevGroup = console.group;
      prevGroupCollapsed = console.groupCollapsed;
      prevGroupEnd = console.groupEnd; // https://github.com/facebook/react/issues/19099

      var props = {
        configurable: true,
        enumerable: true,
        value: disabledLog,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        info: props,
        log: props,
        warn: props,
        error: props,
        group: props,
        groupCollapsed: props,
        groupEnd: props
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    disabledDepth++;
  }
}
function reenableLogs() {
  {
    disabledDepth--;

    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      var props = {
        configurable: true,
        enumerable: true,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        log: _assign({}, props, {
          value: prevLog
        }),
        info: _assign({}, props, {
          value: prevInfo
        }),
        warn: _assign({}, props, {
          value: prevWarn
        }),
        error: _assign({}, props, {
          value: prevError
        }),
        group: _assign({}, props, {
          value: prevGroup
        }),
        groupCollapsed: _assign({}, props, {
          value: prevGroupCollapsed
        }),
        groupEnd: _assign({}, props, {
          value: prevGroupEnd
        })
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    if (disabledDepth < 0) {
      error('disabledDepth fell below zero. ' + 'This is a bug in React. Please file an issue.');
    }
  }
}

var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
var prefix;
function describeBuiltInComponentFrame(name, source, ownerFn) {
  {
    if (prefix === undefined) {
      // Extract the VM specific prefix used by each line.
      try {
        throw Error();
      } catch (x) {
        var match = x.stack.trim().match(/\n( *(at )?)/);
        prefix = match && match[1] || '';
      }
    } // We use the prefix to ensure our stacks line up with native stack frames.


    return '\n' + prefix + name;
  }
}
var reentry = false;
var componentFrameCache;

{
  var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
  componentFrameCache = new PossiblyWeakMap();
}

function describeNativeComponentFrame(fn, construct) {
  // If something asked for a stack inside a fake render, it should get ignored.
  if (!fn || reentry) {
    return '';
  }

  {
    var frame = componentFrameCache.get(fn);

    if (frame !== undefined) {
      return frame;
    }
  }

  var control;
  reentry = true;
  var previousPrepareStackTrace = Error.prepareStackTrace; // $FlowFixMe It does accept undefined.

  Error.prepareStackTrace = undefined;
  var previousDispatcher;

  {
    previousDispatcher = ReactCurrentDispatcher.current; // Set the dispatcher in DEV because this might be call in the render function
    // for warnings.

    ReactCurrentDispatcher.current = null;
    disableLogs();
  }

  try {
    // This should throw.
    if (construct) {
      // Something should be setting the props in the constructor.
      var Fake = function () {
        throw Error();
      }; // $FlowFixMe


      Object.defineProperty(Fake.prototype, 'props', {
        set: function () {
          // We use a throwing setter instead of frozen or non-writable props
          // because that won't throw in a non-strict mode function.
          throw Error();
        }
      });

      if (typeof Reflect === 'object' && Reflect.construct) {
        // We construct a different control for this case to include any extra
        // frames added by the construct call.
        try {
          Reflect.construct(Fake, []);
        } catch (x) {
          control = x;
        }

        Reflect.construct(fn, [], Fake);
      } else {
        try {
          Fake.call();
        } catch (x) {
          control = x;
        }

        fn.call(Fake.prototype);
      }
    } else {
      try {
        throw Error();
      } catch (x) {
        control = x;
      }

      fn();
    }
  } catch (sample) {
    // This is inlined manually because closure doesn't do it for us.
    if (sample && control && typeof sample.stack === 'string') {
      // This extracts the first frame from the sample that isn't also in the control.
      // Skipping one frame that we assume is the frame that calls the two.
      var sampleLines = sample.stack.split('\n');
      var controlLines = control.stack.split('\n');
      var s = sampleLines.length - 1;
      var c = controlLines.length - 1;

      while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
        // We expect at least one stack frame to be shared.
        // Typically this will be the root most one. However, stack frames may be
        // cut off due to maximum stack limits. In this case, one maybe cut off
        // earlier than the other. We assume that the sample is longer or the same
        // and there for cut off earlier. So we should find the root most frame in
        // the sample somewhere in the control.
        c--;
      }

      for (; s >= 1 && c >= 0; s--, c--) {
        // Next we find the first one that isn't the same which should be the
        // frame that called our sample function and the control.
        if (sampleLines[s] !== controlLines[c]) {
          // In V8, the first line is describing the message but other VMs don't.
          // If we're about to return the first line, and the control is also on the same
          // line, that's a pretty good indicator that our sample threw at same line as
          // the control. I.e. before we entered the sample frame. So we ignore this result.
          // This can happen if you passed a class to function component, or non-function.
          if (s !== 1 || c !== 1) {
            do {
              s--;
              c--; // We may still have similar intermediate frames from the construct call.
              // The next one that isn't the same should be our match though.

              if (c < 0 || sampleLines[s] !== controlLines[c]) {
                // V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
                var _frame = '\n' + sampleLines[s].replace(' at new ', ' at ');

                {
                  if (typeof fn === 'function') {
                    componentFrameCache.set(fn, _frame);
                  }
                } // Return the line we found.


                return _frame;
              }
            } while (s >= 1 && c >= 0);
          }

          break;
        }
      }
    }
  } finally {
    reentry = false;

    {
      ReactCurrentDispatcher.current = previousDispatcher;
      reenableLogs();
    }

    Error.prepareStackTrace = previousPrepareStackTrace;
  } // Fallback to just using the name if we couldn't make it throw.


  var name = fn ? fn.displayName || fn.name : '';
  var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';

  {
    if (typeof fn === 'function') {
      componentFrameCache.set(fn, syntheticFrame);
    }
  }

  return syntheticFrame;
}
function describeFunctionComponentFrame(fn, source, ownerFn) {
  {
    return describeNativeComponentFrame(fn, false);
  }
}

function shouldConstruct(Component) {
  var prototype = Component.prototype;
  return !!(prototype && prototype.isReactComponent);
}

function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {

  if (type == null) {
    return '';
  }

  if (typeof type === 'function') {
    {
      return describeNativeComponentFrame(type, shouldConstruct(type));
    }
  }

  if (typeof type === 'string') {
    return describeBuiltInComponentFrame(type);
  }

  switch (type) {
    case REACT_SUSPENSE_TYPE:
      return describeBuiltInComponentFrame('Suspense');

    case REACT_SUSPENSE_LIST_TYPE:
      return describeBuiltInComponentFrame('SuspenseList');
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_FORWARD_REF_TYPE:
        return describeFunctionComponentFrame(type.render);

      case REACT_MEMO_TYPE:
        // Memo may contain any component type so we recursively resolve it.
        return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);

      case REACT_BLOCK_TYPE:
        return describeFunctionComponentFrame(type._render);

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            // Lazy may contain any component type so we recursively resolve it.
            return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
          } catch (x) {}
        }
    }
  }

  return '';
}

var loggedTypeFailures = {};
var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;

function setCurrentlyValidatingElement(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      ReactDebugCurrentFrame.setExtraStackFrame(stack);
    } else {
      ReactDebugCurrentFrame.setExtraStackFrame(null);
    }
  }
}

function checkPropTypes(typeSpecs, values, location, componentName, element) {
  {
    // $FlowFixMe This is okay but Flow doesn't know it.
    var has = Function.call.bind(Object.prototype.hasOwnProperty);

    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error$1 = void 0; // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.

        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
            err.name = 'Invariant Violation';
            throw err;
          }

          error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
        } catch (ex) {
          error$1 = ex;
        }

        if (error$1 && !(error$1 instanceof Error)) {
          setCurrentlyValidatingElement(element);

          error('%s: type specification of %s' + ' `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error$1);

          setCurrentlyValidatingElement(null);
        }

        if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error$1.message] = true;
          setCurrentlyValidatingElement(element);

          error('Failed %s type: %s', location, error$1.message);

          setCurrentlyValidatingElement(null);
        }
      }
    }
  }
}

var ReactCurrentOwner = ReactSharedInternals.ReactCurrentOwner;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var RESERVED_PROPS = {
  key: true,
  ref: true,
  __self: true,
  __source: true
};
var specialPropKeyWarningShown;
var specialPropRefWarningShown;
var didWarnAboutStringRefs;

{
  didWarnAboutStringRefs = {};
}

function hasValidRef(config) {
  {
    if (hasOwnProperty.call(config, 'ref')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.ref !== undefined;
}

function hasValidKey(config) {
  {
    if (hasOwnProperty.call(config, 'key')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.key !== undefined;
}

function warnIfStringRefCannotBeAutoConverted(config, self) {
  {
    if (typeof config.ref === 'string' && ReactCurrentOwner.current && self && ReactCurrentOwner.current.stateNode !== self) {
      var componentName = getComponentName(ReactCurrentOwner.current.type);

      if (!didWarnAboutStringRefs[componentName]) {
        error('Component "%s" contains the string ref "%s". ' + 'Support for string refs will be removed in a future major release. ' + 'This case cannot be automatically converted to an arrow function. ' + 'We ask you to manually fix this case by using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://reactjs.org/link/strict-mode-string-ref', getComponentName(ReactCurrentOwner.current.type), config.ref);

        didWarnAboutStringRefs[componentName] = true;
      }
    }
  }
}

function defineKeyPropWarningGetter(props, displayName) {
  {
    var warnAboutAccessingKey = function () {
      if (!specialPropKeyWarningShown) {
        specialPropKeyWarningShown = true;

        error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    };

    warnAboutAccessingKey.isReactWarning = true;
    Object.defineProperty(props, 'key', {
      get: warnAboutAccessingKey,
      configurable: true
    });
  }
}

function defineRefPropWarningGetter(props, displayName) {
  {
    var warnAboutAccessingRef = function () {
      if (!specialPropRefWarningShown) {
        specialPropRefWarningShown = true;

        error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    };

    warnAboutAccessingRef.isReactWarning = true;
    Object.defineProperty(props, 'ref', {
      get: warnAboutAccessingRef,
      configurable: true
    });
  }
}
/**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, instanceof check
 * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} props
 * @param {*} key
 * @param {string|object} ref
 * @param {*} owner
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @internal
 */


var ReactElement = function (type, key, ref, self, source, owner, props) {
  var element = {
    // This tag allows us to uniquely identify this as a React Element
    $$typeof: REACT_ELEMENT_TYPE,
    // Built-in properties that belong on the element
    type: type,
    key: key,
    ref: ref,
    props: props,
    // Record the component responsible for creating this element.
    _owner: owner
  };

  {
    // The validation flag is currently mutative. We put it on
    // an external backing store so that we can freeze the whole object.
    // This can be replaced with a WeakMap once they are implemented in
    // commonly used development environments.
    element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
    // the validation flag non-enumerable (where possible, which should
    // include every environment we run tests in), so the test framework
    // ignores it.

    Object.defineProperty(element._store, 'validated', {
      configurable: false,
      enumerable: false,
      writable: true,
      value: false
    }); // self and source are DEV only properties.

    Object.defineProperty(element, '_self', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: self
    }); // Two elements created in two different places should be considered
    // equal for testing purposes and therefore we hide it from enumeration.

    Object.defineProperty(element, '_source', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: source
    });

    if (Object.freeze) {
      Object.freeze(element.props);
      Object.freeze(element);
    }
  }

  return element;
};
/**
 * https://github.com/reactjs/rfcs/pull/107
 * @param {*} type
 * @param {object} props
 * @param {string} key
 */

function jsxDEV(type, config, maybeKey, source, self) {
  {
    var propName; // Reserved names are extracted

    var props = {};
    var key = null;
    var ref = null; // Currently, key can be spread in as a prop. This causes a potential
    // issue if key is also explicitly declared (ie. <div {...props} key="Hi" />
    // or <div key="Hi" {...props} /> ). We want to deprecate key spread,
    // but as an intermediary step, we will use jsxDEV for everything except
    // <div {...props} key="Hi" />, because we aren't currently able to tell if
    // key is explicitly declared to be undefined or not.

    if (maybeKey !== undefined) {
      key = '' + maybeKey;
    }

    if (hasValidKey(config)) {
      key = '' + config.key;
    }

    if (hasValidRef(config)) {
      ref = config.ref;
      warnIfStringRefCannotBeAutoConverted(config, self);
    } // Remaining properties are added to a new props object


    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        props[propName] = config[propName];
      }
    } // Resolve default props


    if (type && type.defaultProps) {
      var defaultProps = type.defaultProps;

      for (propName in defaultProps) {
        if (props[propName] === undefined) {
          props[propName] = defaultProps[propName];
        }
      }
    }

    if (key || ref) {
      var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;

      if (key) {
        defineKeyPropWarningGetter(props, displayName);
      }

      if (ref) {
        defineRefPropWarningGetter(props, displayName);
      }
    }

    return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
  }
}

var ReactCurrentOwner$1 = ReactSharedInternals.ReactCurrentOwner;
var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;

function setCurrentlyValidatingElement$1(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
    } else {
      ReactDebugCurrentFrame$1.setExtraStackFrame(null);
    }
  }
}

var propTypesMisspellWarningShown;

{
  propTypesMisspellWarningShown = false;
}
/**
 * Verifies the object is a ReactElement.
 * See https://reactjs.org/docs/react-api.html#isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a ReactElement.
 * @final
 */

function isValidElement(object) {
  {
    return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
  }
}

function getDeclarationErrorAddendum() {
  {
    if (ReactCurrentOwner$1.current) {
      var name = getComponentName(ReactCurrentOwner$1.current.type);

      if (name) {
        return '\n\nCheck the render method of `' + name + '`.';
      }
    }

    return '';
  }
}

function getSourceInfoErrorAddendum(source) {
  {
    if (source !== undefined) {
      var fileName = source.fileName.replace(/^.*[\\\/]/, '');
      var lineNumber = source.lineNumber;
      return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
    }

    return '';
  }
}
/**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */


var ownerHasKeyUseWarning = {};

function getCurrentComponentErrorInfo(parentType) {
  {
    var info = getDeclarationErrorAddendum();

    if (!info) {
      var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;

      if (parentName) {
        info = "\n\nCheck the top-level render call using <" + parentName + ">.";
      }
    }

    return info;
  }
}
/**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it. Error statuses are cached so a warning
 * will only be shown once.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */


function validateExplicitKey(element, parentType) {
  {
    if (!element._store || element._store.validated || element.key != null) {
      return;
    }

    element._store.validated = true;
    var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);

    if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
      return;
    }

    ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
    // property, it may be the creator of the child that's responsible for
    // assigning it a key.

    var childOwner = '';

    if (element && element._owner && element._owner !== ReactCurrentOwner$1.current) {
      // Give the component that originally created this child.
      childOwner = " It was passed a child from " + getComponentName(element._owner.type) + ".";
    }

    setCurrentlyValidatingElement$1(element);

    error('Each child in a list should have a unique "key" prop.' + '%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);

    setCurrentlyValidatingElement$1(null);
  }
}
/**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */


function validateChildKeys(node, parentType) {
  {
    if (typeof node !== 'object') {
      return;
    }

    if (Array.isArray(node)) {
      for (var i = 0; i < node.length; i++) {
        var child = node[i];

        if (isValidElement(child)) {
          validateExplicitKey(child, parentType);
        }
      }
    } else if (isValidElement(node)) {
      // This element was passed in a valid location.
      if (node._store) {
        node._store.validated = true;
      }
    } else if (node) {
      var iteratorFn = getIteratorFn(node);

      if (typeof iteratorFn === 'function') {
        // Entry iterators used to provide implicit keys,
        // but now we print a separate warning for them later.
        if (iteratorFn !== node.entries) {
          var iterator = iteratorFn.call(node);
          var step;

          while (!(step = iterator.next()).done) {
            if (isValidElement(step.value)) {
              validateExplicitKey(step.value, parentType);
            }
          }
        }
      }
    }
  }
}
/**
 * Given an element, validate that its props follow the propTypes definition,
 * provided by the type.
 *
 * @param {ReactElement} element
 */


function validatePropTypes(element) {
  {
    var type = element.type;

    if (type === null || type === undefined || typeof type === 'string') {
      return;
    }

    var propTypes;

    if (typeof type === 'function') {
      propTypes = type.propTypes;
    } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
    // Inner props are checked in the reconciler.
    type.$$typeof === REACT_MEMO_TYPE)) {
      propTypes = type.propTypes;
    } else {
      return;
    }

    if (propTypes) {
      // Intentionally inside to avoid triggering lazy initializers:
      var name = getComponentName(type);
      checkPropTypes(propTypes, element.props, 'prop', name, element);
    } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
      propTypesMisspellWarningShown = true; // Intentionally inside to avoid triggering lazy initializers:

      var _name = getComponentName(type);

      error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', _name || 'Unknown');
    }

    if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
      error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
    }
  }
}
/**
 * Given a fragment, validate that it can only be provided with fragment props
 * @param {ReactElement} fragment
 */


function validateFragmentProps(fragment) {
  {
    var keys = Object.keys(fragment.props);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];

      if (key !== 'children' && key !== 'key') {
        setCurrentlyValidatingElement$1(fragment);

        error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);

        setCurrentlyValidatingElement$1(null);
        break;
      }
    }

    if (fragment.ref !== null) {
      setCurrentlyValidatingElement$1(fragment);

      error('Invalid attribute `ref` supplied to `React.Fragment`.');

      setCurrentlyValidatingElement$1(null);
    }
  }
}

function jsxWithValidation(type, props, key, isStaticChildren, source, self) {
  {
    var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
    // succeed and there will likely be errors in render.

    if (!validType) {
      var info = '';

      if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
        info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
      }

      var sourceInfo = getSourceInfoErrorAddendum(source);

      if (sourceInfo) {
        info += sourceInfo;
      } else {
        info += getDeclarationErrorAddendum();
      }

      var typeString;

      if (type === null) {
        typeString = 'null';
      } else if (Array.isArray(type)) {
        typeString = 'array';
      } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
        typeString = "<" + (getComponentName(type.type) || 'Unknown') + " />";
        info = ' Did you accidentally export a JSX literal instead of a component?';
      } else {
        typeString = typeof type;
      }

      error('React.jsx: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
    }

    var element = jsxDEV(type, props, key, source, self); // The result can be nullish if a mock or a custom function is used.
    // TODO: Drop this when these are no longer allowed as the type argument.

    if (element == null) {
      return element;
    } // Skip key warning if the type isn't valid since our key validation logic
    // doesn't expect a non-string/function type and can throw confusing errors.
    // We don't want exception behavior to differ between dev and prod.
    // (Rendering will throw with a helpful message and as soon as the type is
    // fixed, the key warnings will appear.)


    if (validType) {
      var children = props.children;

      if (children !== undefined) {
        if (isStaticChildren) {
          if (Array.isArray(children)) {
            for (var i = 0; i < children.length; i++) {
              validateChildKeys(children[i], type);
            }

            if (Object.freeze) {
              Object.freeze(children);
            }
          } else {
            error('React.jsx: Static children should always be an array. ' + 'You are likely explicitly calling React.jsxs or React.jsxDEV. ' + 'Use the Babel transform instead.');
          }
        } else {
          validateChildKeys(children, type);
        }
      }
    }

    if (type === exports.Fragment) {
      validateFragmentProps(element);
    } else {
      validatePropTypes(element);
    }

    return element;
  }
} // These two functions exist to still get child warnings in dev
// even with the prod transform. This means that jsxDEV is purely
// opt-in behavior for better messages but that we won't stop
// giving you warnings if you use production apis.

function jsxWithValidationStatic(type, props, key) {
  {
    return jsxWithValidation(type, props, key, true);
  }
}
function jsxWithValidationDynamic(type, props, key) {
  {
    return jsxWithValidation(type, props, key, false);
  }
}

var jsx =  jsxWithValidationDynamic ; // we may want to special case jsxs internally to take advantage of static children.
// for now we can ship identical prod functions

var jsxs =  jsxWithValidationStatic ;

exports.jsx = jsx;
exports.jsxs = jsxs;
  })();
}
}(reactJsxRuntime_development));

if (process.env.NODE_ENV === 'production') {
  jsxRuntime.exports = reactJsxRuntime_production_min;
} else {
  jsxRuntime.exports = reactJsxRuntime_development;
}

var e=[],t=[];function n(n,r){if(n&&"undefined"!=typeof document){var a,s=!0===r.prepend?"prepend":"append",d=!0===r.singleTag,i="string"==typeof r.container?document.querySelector(r.container):document.getElementsByTagName("head")[0];if(d){var u=e.indexOf(i);-1===u&&(u=e.push(i)-1,t[u]={}),a=t[u]&&t[u][s]?t[u][s]:t[u][s]=c();}else a=c();65279===n.charCodeAt(0)&&(n=n.substring(1)),a.styleSheet?a.styleSheet.cssText+=n:a.appendChild(document.createTextNode(n));}function c(){var e=document.createElement("style");if(e.setAttribute("type","text/css"),r.attributes)for(var t=Object.keys(r.attributes),n=0;n<t.length;n++)e.setAttribute(t[n],r.attributes[t[n]]);var a="prepend"===s?"afterbegin":"beforeend";return i.insertAdjacentElement(a,e),e}}

var css$e = ".index_module_button__c20d2442 {\n  padding: 0.3em 0.8em;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  background: #44cef6 linear-gradient(hsla(0, 0%, 100%, 0.3), transparent);\n  border-radius: 0.2em;\n  color: #ffffff;\n  box-shadow: 0 0.05em 0.25em rgba(0, 0, 0, 0.5);\n  text-shadow: 0 -0.05em 0.05em rgba(0, 0, 0, 0.5);\n  line-height: 1.5;\n  transition: all 0.2s;\n}\n.index_module_danger__c20d2442 {\n  background-color: #ee5151;\n}\n.index_module_success__c20d2442 {\n  background-color: #6b0;\n}\n.index_module_default__c20d2442 {\n  background-color: #44cef6;\n}\n.index_module_button__c20d2442.index_module_disabled__c20d2442 {\n  background-color: #929191;\n}\n.index_module_button__c20d2442.index_module_disabled__c20d2442:hover {\n  cursor: not-allowed;\n}\n.index_module_button__c20d2442:not(.index_module_disabled__c20d2442):hover {\n  cursor: pointer;\n  box-shadow: 0 0.05em 0.25em rgba(0, 0, 0, 0.7);\n  background-image: linear-gradient(hsla(0, 0%, 100%, 0.5), transparent);\n}\n.index_module_button__c20d2442:not(.index_module_disabled__c20d2442):active {\n  background-image: linear-gradient(hsla(0, 0%, 100%, 0.1), transparent);\n  box-shadow: 0 0.05em 0.25em rgba(0, 0, 0, 0.7) inset;\n}\n.index_module_small__c20d2442 {\n  font-size: 75%;\n  line-height: 1;\n}\n.index_module_big__c20d2442 {\n  font-size: 125%;\n  line-height: 1.5;\n}\n";
var modules_63b47c51$e = {"button":"index_module_button__c20d2442","danger":"index_module_danger__c20d2442","success":"index_module_success__c20d2442","default":"index_module_default__c20d2442","disabled":"index_module_disabled__c20d2442","small":"index_module_small__c20d2442","big":"index_module_big__c20d2442"};
n(css$e,{});

const Button = ({ children, className, onClick, disabled, type = "default", }) => {
    const handleClick = useCallback((e) => {
        e.preventDefault();
        onClick && onClick(e);
        return false;
    }, [onClick]);
    return (jsxRuntime.exports.jsx("button", Object.assign({ onClick: handleClick, className: modules_63b47c51$e.button +
            " " +
            (className || "") +
            " " +
            (disabled && typeof disabled === "boolean" ? modules_63b47c51$e["disabled"] : "") +
            " " +
            modules_63b47c51$e[type], type: "button" }, { children: children })));
};
var Button$1 = React.memo(Button);

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

var formatTimeStrap = (timeStrap) => {
    return dayjs(timeStrap).format("YYYY-MM-DD HH:mm:ss");
};

/**
 * @description: 获取差集，结果为Set
 * @param {*}
 * @return {*}
 */
function getExceptSet(small, big) {
    const smallSet = small instanceof Set ? small : new Set(small), bigSet = big instanceof Set ? big : new Set(big), exceptSet = new Set();
    bigSet.forEach((item) => {
        if (smallSet.has(item)) {
            smallSet.delete(item);
        }
        else {
            exceptSet.add(item);
        }
    });
    return exceptSet;
}
/**
 * @description: 获取差集，结果为Array
 * @param {*}
 * @return {*}
 */
const getExceptArray = (small, big) => [...getExceptSet(small, big)];

const isTrue = (value) => {
    return typeof value === "boolean" && value;
};
const isObject = (value) => {
    return Object.prototype.toString.call(value) === "[object Object]";
};
const isValidString = (value) => {
    return typeof value === "string" && value.length > 0;
};
const isNumber = (value) => {
    return typeof value === "number";
};

var css$d = ".index_module_message__6c94a4d8 {\n  position: fixed;\n  right: -10rem;\n  bottom: 40vh;\n  animation: index_module_messageAnimation__6c94a4d8 3s forwards;\n  padding: 0.5rem;\n  background-color: #f4eeb9;\n  border-radius: 0.2rem;\n  box-shadow: 0 0.05em 0.25em rgba(0, 0, 0, 0.7);\n  max-width: 10rem;\n  text-align: center;\n  color: #fff;\n}\n.index_module_message__6c94a4d8:hover {\n  cursor: pointer;\n  opacity: 1 !important;\n  visibility: visible !important;\n}\n.index_module_success__6c94a4d8 {\n  background-color: #6b0;\n}\n.index_module_error__6c94a4d8 {\n  background-color: #ee5151;\n}\n@keyframes index_module_messageAnimation__6c94a4d8 {\n  0% {\n    right: -10rem;\n  }\n  10% {\n    right: 0;\n  }\n  70% {\n    right: 0;\n    opacity: 1;\n  }\n  100% {\n    right: 0;\n    opacity: 0;\n    visibility: hidden;\n  }\n}\n";
var modules_63b47c51$d = {"message":"index_module_message__6c94a4d8","messageAnimation":"index_module_messageAnimation__6c94a4d8","success":"index_module_success__6c94a4d8","error":"index_module_error__6c94a4d8"};
n(css$d,{});

const Message = (function () {
    let dom, id = Math.random().toString() + "message";
    function initDom() {
        dom = document.createElement("div");
        dom.id = id;
    }
    function success(msg) {
        if (!dom)
            initDom();
        dom.className = `${modules_63b47c51$d["message"]} ${modules_63b47c51$d["success"]}`;
        dom.innerHTML = `${msg}`;
        show(dom);
    }
    function error(msg) {
        if (!dom)
            initDom();
        dom.className = `${modules_63b47c51$d["message"]} ${modules_63b47c51$d["error"]}`;
        dom.innerHTML = `${msg}`;
        show(dom);
    }
    function show(dom) {
        if (dom.parentNode === document.body)
            document.body.removeChild(dom);
        document.body.appendChild(dom);
    }
    return {
        success,
        error,
    };
})();

var css$c = ".index_module_input__cc627c96 {\n  height: 2rem;\n  border: none;\n  border-bottom: 1px solid #e1e1e1;\n  outline: none;\n  background: none;\n}\n";
var modules_63b47c51$c = {"input":"index_module_input__cc627c96"};
n(css$c,{});

const FunctionComponent$1 = (_a) => {
    var { tip, onChange } = _a, props = __rest(_a, ["tip", "onChange"]);
    const { max, min } = props;
    const nativeOnChange = useCallback((e) => {
        const newValue = e.target.value;
        if (isNumber(max) && Number(newValue) > max) {
            Message.error("数值太大了，不能超过 " + max);
            return;
        }
        if (isNumber(min) && Number(newValue) < min) {
            Message.error("数值太小了，不能小于 " + min);
            return;
        }
        onChange && onChange(newValue);
    }, [max, min, onChange]);
    return (jsxRuntime.exports.jsxs(jsxRuntime.exports.Fragment, { children: [jsxRuntime.exports.jsx("input", Object.assign({ className: modules_63b47c51$c.input, onChange: nativeOnChange }, props)), tip || null] }));
};

var css$b = ".index_module_container__7e14594b {\n  display: inline-flex;\n}\n";
var modules_63b47c51$b = {"container":"index_module_container__7e14594b"};
n(css$b,{});

/**
 * @description: children是渲染到Button里的值
 * @param {*}
 * @return {*}
 */
const InputWithButton = ({ children, disabled, max, min, inputType, onButtonClick, buttonPos = "left", onChange, placeholder, autoClear = true }) => {
    const [value, setValue] = useState("");
    const handleChange = useCallback((value) => {
        setValue(value);
        onChange && onChange(value);
    }, [setValue, onChange]);
    const handleClick = useCallback((e) => {
        onButtonClick && onButtonClick(e, value);
        autoClear && setValue("");
    }, [value, onButtonClick]);
    return (jsxRuntime.exports.jsxs("span", Object.assign({ className: modules_63b47c51$b["container"] }, { children: [buttonPos === "left" ? (jsxRuntime.exports.jsx(Button$1, Object.assign({ onClick: handleClick, disabled: disabled }, { children: children }))) : null, jsxRuntime.exports.jsx(FunctionComponent$1, { placeholder: placeholder || "", disabled: disabled, type: inputType, max: max, min: min, onChange: handleChange }), buttonPos === "right" ? (jsxRuntime.exports.jsx(Button$1, Object.assign({ onClick: handleClick, disabled: disabled }, { children: children }))) : null] })));
};

const formContext = React.createContext(null);

class FormStore {
    constructor(reRender) {
        /**
         * @description: 存放表单数据值
         */
        this.store = {};
        /**
         * @description: 存放校验规则的map，key是field，value是规则数组
         */
        this.rulesMap = new Map();
        /**
         * @description: 存储验证失败时的回调，key是field，value是{onSuccess,onFailed}
         * @param {*}
         * @return {*}
         */
        this.onValidatedCallbackMap = new Map();
        this.reRender = reRender;
    }
    getValues() {
        return this.store;
    }
    /**
     * @description: 设置值以后会重新刷新页面数据
     * @param {any} values
     * @return {*}
     */
    setValues(values) {
        this.store = Object.assign(Object.assign({}, this.store), values);
        this.reRender();
    }
    setValue(field, value) {
        this.store[field] = value;
        this.reRender();
    }
    getValue(field) {
        return this.store[field];
    }
    addRules(field, rules) {
        const oldRules = this.rulesMap.get(field) || [];
        const newRules = [...oldRules, ...rules];
        this.rulesMap.set(field, newRules);
    }
    /**
     * @description: 验证所有字段，验证成功返回true，失败返回提示数组，validateAll还有个作用就是可以删除无用的数据项
     * 因为有用的字段都在rulesMap里（FormItem做的）添加了
     * @param {string} field
     * @return {*}
     */
    validateAll() {
        const msgs = [];
        for (const key of Object.keys(this.store)) {
            if (!this.rulesMap.has(key))
                delete this.store[key];
        }
        for (const field of this.rulesMap.keys()) {
            const result = this.validate(field);
            if (result !== true) {
                msgs.push(result);
            }
        }
        return msgs.length === 0 ? true : msgs;
    }
    /**
     * @description: 验证单个字段，验证成功返回true，失败返回提示
     * @param {string} field
     * @return {*}
     */
    validate(field) {
        const value = this.getValue(field), rules = this.rulesMap.get(field) || [];
        console.log("field", field);
        console.log("rules", rules);
        for (const rule of rules) {
            const { required, msg, reg } = rule;
            if (typeof required === "boolean" && (value == null || value === "")) {
                return msg || `${field}不能为空`;
            }
            if (reg && !reg.test(value)) {
                return msg || `输入内容不符合规范`;
            }
        }
        return true;
    }
    /**
     * @description: FormItem调用，为children增加value和onChange
     * @param {*}
     * @return {*}
     */
    createBoundChild(children, field) {
        let child = React.Children.only(children);
        return React.cloneElement(child, Object.assign(Object.assign({}, child.props), { value: this.getValue(field), onChange: (v) => {
                this.setValue(field, v);
                const res = this.validate(field);
                const { onFailed, onSuccess } = this.onValidatedCallbackMap.get(field) || {};
                if (!isTrue(res)) {
                    onFailed && onFailed(res);
                }
                else {
                    onSuccess && onSuccess();
                }
            } }));
    }
    onValidated(field, onFailed, onSuccess) {
        this.onValidatedCallbackMap.set(field, {
            onFailed,
            onSuccess,
        });
    }
    reset() {
        this.store = {};
        this.rulesMap.clear();
        return this;
    }
}

/**
 * @description: 创建formStore的工厂hooks 泛型T表示表单里的数据类型
 * @param {FormStore} formStore
 * @return {*}
 */
const useFormStore = (formStore) => {
    const formRef = useRef(null);
    const [_, setState] = useState();
    if (!formRef.current) {
        formRef.current = formStore
            ? formStore.reset()
            : new FormStore(() => setState({}));
    }
    return [formRef.current];
};

var css$a = ".index_module_tip__5db61214 {\n  background: white;\n  padding: 0.5rem;\n  background-color: #44cef6;\n  border-radius: 0.2rem;\n  color: white;\n  text-shadow: 0 -0.05em 0.05em rgba(0, 0, 0, 0.5);\n  box-shadow: 0 0.05em 0.25em rgba(0, 0, 0, 0.5);\n  z-index: 99999;\n  opacity: 0.6;\n  min-width: 12rem;\n  max-width: 20rem;\n  position: absolute;\n  animation: index_module_tipAnimation__5db61214 0.2s forwards;\n  left: 0;\n}\n@keyframes index_module_tipAnimation__5db61214 {\n  0% {\n    transform: scale(0);\n  }\n  100% {\n    transform: scale(1) translateY(0.5rem);\n  }\n}\n.index_module_triangle__5db61214 {\n  position: absolute;\n  width: 0;\n  height: 0;\n  top: 0;\n  border-left: 0.5em solid transparent;\n  border-right: 0.5em solid transparent;\n  border-bottom: 1em solid #44cef6;\n  transform: translateY(-0.6em);\n  opacity: 0.8;\n}\n.index_module_tipContainer__5db61214 {\n  position: relative;\n  display: inline-block;\n}\n";
var modules_63b47c51$a = {"tip":"index_module_tip__5db61214","tipAnimation":"index_module_tipAnimation__5db61214","triangle":"index_module_triangle__5db61214","tip-container":"index_module_tipContainer__5db61214"};
n(css$a,{});

const Tip = ({ msg, when, children, className, }) => {
    const initState = useMemo(() => {
        if (typeof when === "boolean")
            return when;
        return false;
    }, []);
    const [state, setState] = useState(initState);
    useEffect(() => {
        if (typeof when === "boolean")
            setState(when);
    }, [when]);
    return (jsxRuntime.exports.jsxs("div", Object.assign({ onMouseEnter: when === "hover" ? (e) => setState(true) : undefined, onMouseLeave: when === "hover" ? (e) => setState(false) : undefined, className: modules_63b47c51$a["tip-container"] +
            " " +
            (typeof className === "string" ? className : "") }, { children: [children, state && (jsxRuntime.exports.jsxs("div", Object.assign({ className: modules_63b47c51$a["tip"] }, { children: [jsxRuntime.exports.jsx("span", { className: modules_63b47c51$a["triangle"] }), msg] })))] })));
};
var Tip$1 = React.memo(Tip);

var css$9 = ".index_module_formItem__adbe6945 {\n  padding-top: 0.5rem;\n  border-bottom: 1px solid #e1e1e1;\n}\n.index_module_formItem__adbe6945 {\n  padding-bottom: 0.5rem;\n}\n.index_module_form__adbe6945 {\n  padding: 0.5rem;\n}\n";
var modules_63b47c51$9 = {"form-item":"index_module_formItem__adbe6945","form":"index_module_form__adbe6945"};
n(css$9,{});

/**
 * @description: 对于FormItem的子项，肯定有一个value和onChange属性，不能手动传递这两个属性，全部交由FormItem来传递
 * 也即不能写出<FormItem field="content"><Input onchange={onChange} value={value}/></FormItem>这样的代码
 */
const FormItem = (_a) => {
    var { label, children, field, rules = [], className } = _a, props = __rest(_a, ["label", "children", "field", "rules", "className"]);
    const formStore = useContext(formContext);
    useEffect(() => {
        formStore === null || formStore === void 0 ? void 0 : formStore.addRules(field, rules);
    }, []);
    useEffect(() => {
        formStore === null || formStore === void 0 ? void 0 : formStore.onValidated(field, (msg) => setTipProps({
            msg,
            when: true,
        }), () => setTipProps({
            msg: "",
            when: false,
        }));
    }, []);
    const [tipProps, setTipProps] = useState({
        when: false,
        msg: "",
    });
    if (!formStore) {
        console.error("FormItem:未获取到formStore", formStore);
        return null;
    }
    return (jsxRuntime.exports.jsxs("div", Object.assign({ className: modules_63b47c51$9["form-item"] + " " + className }, props, { children: [label ? `${label} ` : "", jsxRuntime.exports.jsx(Tip$1, Object.assign({}, tipProps, { children: formStore.createBoundChild(children, field) }))] })));
};

const Form = (_a) => {
    var { children, formStore, className = "", initialValues } = _a, props = __rest(_a, ["children", "formStore", "className", "initialValues"]);
    useEffect(() => {
        initialValues && nativeForm.setValues(initialValues);
    }, []);
    const [nativeForm] = useFormStore(formStore);
    return (jsxRuntime.exports.jsx("form", Object.assign({ className: modules_63b47c51$9["form"] + " " + className }, props, { children: jsxRuntime.exports.jsx(formContext.Provider, Object.assign({ value: nativeForm }, { children: children })) })));
};
var Form$1 = React.memo(Form);

var css$8 = ".index_module_image__c16740bf {\n  border-radius: 0.3rem;\n}\n";
var modules_63b47c51$8 = {"image":"index_module_image__c16740bf"};
n(css$8,{});

const Img = (props) => {
    return jsxRuntime.exports.jsx("img", Object.assign({ className: modules_63b47c51$8.image, width: 50 }, props));
};

const Loading = (_a) => {
    var { loading, children } = _a, props = __rest(_a, ["loading", "children"]);
    return loading ? jsxRuntime.exports.jsx("span", Object.assign({}, props, { children: "loading... " })) : jsxRuntime.exports.jsx(jsxRuntime.exports.Fragment, { children: children });
};

var css$7 = ".index_module_modalContainer__7a8ceb67 {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  z-index: 999;\n  top: 0;\n  left: 0;\n  display: flex;\n  background-color: rgba(0, 0, 0, 0.1);\n  transition: background-color 0.1s;\n  overflow: visible;\n}\n.index_module_modal__7a8ceb67 {\n  margin: auto;\n  background-color: white;\n  max-width: 500px;\n  min-width: 200px;\n  border-radius: 0.5rem;\n  padding: 1rem;\n  animation: index_module_modalAnimation__7a8ceb67 0.1s forwards ease-in-out;\n  transform-origin: center;\n}\n@keyframes index_module_modalAnimation__7a8ceb67 {\n  0% {\n    transform: scale(0.2) translateY(-6rem);\n  }\n  100% {\n    transform: scale(1) translateY(-6rem);\n  }\n}\n.index_module_modalContent__7a8ceb67 {\n  padding-bottom: 0.5rem;\n}\n.index_module_modalFooter__7a8ceb67 {\n  padding-top: 0.5rem;\n  border-top: 1px dashed #333;\n  display: flex;\n  justify-content: space-between;\n}\n";
var modules_63b47c51$7 = {"modal-container":"index_module_modalContainer__7a8ceb67","modal":"index_module_modal__7a8ceb67","modalAnimation":"index_module_modalAnimation__7a8ceb67","modal-content":"index_module_modalContent__7a8ceb67","modal-footer":"index_module_modalFooter__7a8ceb67"};
n(css$7,{});

const Modal = (function () {
    const id = Math.random().toString() + "modal-container";
    let container;
    let _options;
    // container.id = id;
    // container.className = styles["modal-container"];
    function close() {
        if (!container)
            init();
        ReactDOM.unmountComponentAtNode(container);
        container.style.display = "none";
        container.removeEventListener("click", closeEventHandler);
        _options && _options.onCancel && _options.onCancel();
    }
    function onConfirm(options, e) {
        options.onOk && options.onOk(e);
        close();
    }
    function closeEventHandler(e) {
        if (e.target === container)
            close();
    }
    function confirm(options) {
        if (!container)
            init();
        _options = options;
        container.style.display = "flex";
        const reactElement = (jsxRuntime.exports.jsx(jsxRuntime.exports.Fragment, { children: jsxRuntime.exports.jsxs("div", Object.assign({ className: modules_63b47c51$7["modal"] }, { children: [jsxRuntime.exports.jsx("div", Object.assign({ className: modules_63b47c51$7["modal-content"] }, { children: options.content })), jsxRuntime.exports.jsxs("div", Object.assign({ className: modules_63b47c51$7["modal-footer"] }, { children: [jsxRuntime.exports.jsx(Button$1, Object.assign({ onClick: (e) => onConfirm(options, e) }, { children: "\u786E\u8BA4" })), jsxRuntime.exports.jsx(Button$1, Object.assign({ onClick: close }, { children: "\u53D6\u6D88" }))] }))] })) }));
        if (options.autoClose)
            container.addEventListener("click", closeEventHandler);
        ReactDOM.render(reactElement, container);
    }
    function init() {
        container = document.createElement("div");
        container.className = modules_63b47c51$7["modal-container"];
        container.id = id;
        document.body.appendChild(container);
    }
    /**
     * @description: 自定义的模态框：没有确定和取消按钮，只做弹出模态框渲染options.content的作用，可以调用Modal.close关闭
     * @param {*}
     * @return {*}
     */
    function open(options) {
        if (!container)
            init();
        if (options.autoClose)
            container.addEventListener("click", closeEventHandler);
        container.style.display = "flex";
        ReactDOM.render(jsxRuntime.exports.jsx("div", Object.assign({ className: modules_63b47c51$7["modal"] }, { children: jsxRuntime.exports.jsx("div", Object.assign({ className: modules_63b47c51$7["modal-content"] }, { children: options.content })) })), container);
    }
    return { confirm, close, open };
})();

var css$6 = ".index_module_saveBar__bb6992bc {\n  height: 4rem;\n  border-top: 1px dashed #333;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  width: 100vw;\n  background-color: #fdf7d8;\n  padding: 0 1.5rem;\n  z-index: 999;\n}\n.index_module_left__bb6992bc {\n  font-size: 12px;\n}\n.index_module_lastSaveTime__bb6992bc {\n  margin-left: 1.5rem;\n}\n.index_module_btn__bb6992bc {\n  margin-left: 1.5rem;\n}\n";
var modules_63b47c51$6 = {"save-bar":"index_module_saveBar__bb6992bc","left":"index_module_left__bb6992bc","last-save-time":"index_module_lastSaveTime__bb6992bc","btn":"index_module_btn__bb6992bc"};
n(css$6,{});

const SaveBar = ({ lastSaveTime, onSave, onRefresh, showBack = false, }) => {
    let [_, setCount] = useState(1);
    const navigate = useNavigate();
    useLayoutEffect((i = 1) => {
        const timer = setInterval(() => {
            setCount(++i);
        }, 1000);
        return () => {
            clearInterval(timer);
        };
    }, []);
    return (jsxRuntime.exports.jsxs("div", Object.assign({ className: modules_63b47c51$6["save-bar"] }, { children: [jsxRuntime.exports.jsxs("div", Object.assign({ className: modules_63b47c51$6["left"] }, { children: [jsxRuntime.exports.jsxs("span", { children: ["\u73B0\u5728\u65F6\u95F4\uFF1A", dayjs().format("HH:mm:ss")] }), lastSaveTime ? (jsxRuntime.exports.jsxs("span", Object.assign({ className: modules_63b47c51$6["last-save-time"] }, { children: [" ", "\u4E0A\u6B21\u4FDD\u5B58\u65F6\u95F4\uFF1A", formatTimeStrap(lastSaveTime)] }))) : ("")] })), jsxRuntime.exports.jsxs("div", Object.assign({ className: modules_63b47c51$6["right"] }, { children: [onRefresh ? (jsxRuntime.exports.jsx(Button$1, Object.assign({ className: modules_63b47c51$6["btn"], onClick: onRefresh }, { children: "\u5237\u65B0" }))) : null, onSave ? (jsxRuntime.exports.jsx(Button$1, Object.assign({ type: "success", className: modules_63b47c51$6["btn"], onClick: onSave }, { children: "\u4FDD\u5B58" }))) : null, showBack ? (jsxRuntime.exports.jsx(Button$1, Object.assign({ type: "danger", className: modules_63b47c51$6["btn"], onClick: () => navigate(-1) }, { children: "\u8FD4\u56DE" }))) : null] }))] })));
};
var index$2 = React.memo(SaveBar);

const Select = (_a) => {
    var { onChange, value, options } = _a, props = __rest(_a, ["onChange", "value", "options"]);
    const handleChange = useCallback((e) => {
        onChange && onChange(e.target.value);
    }, [onChange]);
    return (jsxRuntime.exports.jsx(jsxRuntime.exports.Fragment, { children: jsxRuntime.exports.jsx("select", Object.assign({ onChange: handleChange }, props, { children: options === null || options === void 0 ? void 0 : options.map(({ value, label }) => {
                return (jsxRuntime.exports.jsx("option", Object.assign({ value: value }, { children: label }), label));
            }) })) }));
};

function useForceUpdate() {
    const [, $] = useState({});
    const forceUpdate = useCallback(() => {
        $({});
    }, []);
    return forceUpdate;
}

function useHttpData (api) {
    const forceUpdate = useForceUpdate();
    /**
     * @description:执行这个函数可以获取数据
     * @param {*}
     * @return {*}
     */
    const run = useCallback((...args) => __awaiter(this, void 0, void 0, function* () {
        const state = ref.current;
        Object.assign(state, { loading: true });
        forceUpdate();
        let newData = {}, error;
        try {
            newData = yield api(...args);
        }
        catch (e) {
            error = e;
        }
        Object.assign(state.data, newData);
        Object.assign(state, { error, loading: false });
        forceUpdate();
        return state.data;
    }), []);
    const ref = useRef({
        loading: false,
        run,
        data: {},
        error: null,
    });
    return ref.current;
}

/**
 * @description: 这个hook可以处理并发请求，并将成功的api和失败的api分别存放在dataMap和errors中
 * @param {Apis} apis
 * @example: 在展示表格数据时，要将表格数据和搜索字段一起请求，之后在根据字段搜索的时候只需要请求表格数据就可以了
 * @return {*}
 */
function useHttpDataAll (apis) {
    /**
     * @description: 可以传入要请求的apiKeys（是由apis里的键组成的数组），其他的不请求的数据保持上一个状态
     */
    const run = useCallback((apiKeys) => __awaiter(this, void 0, void 0, function* () {
        let willFetchApis = apiKeys ? filterApis(apiKeys, apis) : apis;
        //用ref而不用state是为了保证返回的数据自始至终都指向同一个引用
        const state = ref.current;
        Object.assign(state, { loading: true });
        forceUpdate();
        const [partialDataMap, errors] = yield fetchAll(willFetchApis);
        const dataMap = Object.assign(state.dataMap, partialDataMap);
        Object.assign(state, {
            dataMap,
            errors,
            loading: false,
        });
        forceUpdate();
        return [dataMap, errors];
    }), []);
    const filterApis = useCallback((apiKeys, Apis) => {
        const result = {};
        for (const key of apiKeys) {
            const api = Apis[key];
            if (typeof api === "function")
                result[key] = api;
        }
        return result;
    }, []);
    const fetchAll = useCallback(
    /* async */ (apis) => {
        return new Promise((resolve) => {
            const dataMap = {}, errors = [], result = [dataMap, errors];
            let times = Object.keys(apis).length;
            for (const [name, api] of Object.entries(apis)) {
                api().then((data) => {
                    dataMap[name] = data;
                    if (--times === 0)
                        resolve(result);
                }, (err) => {
                    errors.push(err);
                    if (--times === 0)
                        resolve(result);
                });
                /* //这样写是串行的，但是想实现的是并行的效果
              try {
                dataMap[name] = await api();
              } catch (e) {
                errors.push(e);
              } */
            }
        });
    }, [apis]);
    const ref = useRef({
        loading: false,
        errors: [],
        dataMap: {},
        run: run,
    });
    const forceUpdate = useForceUpdate();
    return ref.current;
}

/**
 * @description: 可以设置和获取url上的参数，设置值时会对window上的url进行处理
 * @param {string} initialSearch
 * @return {*}
 */
function useSearch (initialSearch) {
    const path = window.location.pathname;
    let defaultSearch = useMemo(() => {
        const defaultSearch = parseSearch(window.location.search);
        Object.assign(defaultSearch, typeof initialSearch === "string"
            ? parseSearch(initialSearch)
            : initialSearch);
        return defaultSearch;
    }, []);
    const [_search, _setSearch] = useState(defaultSearch);
    const setSearch = useCallback((newSearch) => {
        _setSearch(newSearch);
        window.history.pushState(null, document.title, path + stringifySearch(newSearch));
    }, [_search]);
    return [_search, setSearch];
}
const stringifySearch = (search) => Object.entries(search).reduce((str, [key, value]) => str + `${key}=${value || ""}&`, "?");
const parseSearch = (str = "") => {
    str = str.replace("?", "");
    const keyValueAry = str.split("&"); //["a=b","c="]
    let res = {};
    for (const keyValue of keyValueAry) {
        const [key, value] = keyValue.split("=");
        if (!key)
            continue;
        res[key] = value;
    }
    return res;
};

function useHttpListData (api, initialSearch = {}) {
    const forceUpdate = useForceUpdate();
    const path = window.location.pathname;
    let defaultSearch = useMemo(() => {
        const defaultSearch = parseSearch(window.location.search);
        Object.assign(defaultSearch, initialSearch);
        return defaultSearch;
    }, []);
    const setSearchAndRun = useCallback((partialSearch) => {
        setSearch(partialSearch);
        run();
    }, []);
    const setSearch = useCallback((partialSearch) => {
        const search = ref.current.search;
        Object.assign(search, partialSearch);
        window.history.pushState(null, document.title, path + stringifySearch(partialSearch));
    }, []);
    /**
     * @description:执行这个函数可以获取数据
     * @param {*}
     * @return {*}
     */
    const run = useCallback(() => __awaiter(this, void 0, void 0, function* () {
        const state = ref.current;
        Object.assign(state, { loading: true });
        forceUpdate();
        let data = {}, error;
        try {
            data = yield api(state.search);
        }
        catch (e) {
            error = e;
        }
        //这里用...将data展开了，所以能拿到list
        Object.assign(state, Object.assign(Object.assign({}, data), { error, loading: false }));
        forceUpdate();
    }), []);
    const ref = useRef({
        page: 1,
        pageSize: 20,
        loading: false,
        error: null,
        list: [],
        run,
        total: 0,
        search: defaultSearch,
        setSearchAndRun,
        setSearch,
    });
    return ref.current;
}

var css$5 = ".index_module_table__d3048071 {\n  width: 100%;\n  color: #333;\n  text-align: left;\n  border-spacing: 0;\n  border-color: #333;\n  border: 1px dashed #333;\n  border-top: 0;\n  text-align: center;\n}\n.index_module_th__d3048071,\n.index_module_td__d3048071 {\n  border-bottom: 1px dashed #333;\n  font-weight: normal;\n  padding: 0.5em;\n  max-width: 10rem;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n.index_module_td__d3048071 {\n  overflow: hidden;\n}\n.index_module_footer__d3048071 {\n  margin-top: 0.5rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.index_module_operations__d3048071 * + * {\n  margin-left: 0.5rem;\n}\n.index_module_empty__d3048071 {\n  padding: 1.5rem;\n  text-align: center;\n  border: 1px dashed #333;\n}\n.index_module_thead__d3048071 {\n  position: sticky;\n  top: 0;\n  background: #fdf7d8;\n}\n.index_module_th__d3048071 {\n  border-top: 1px dashed #333;\n}\n.index_module_canSort__d3048071 {\n  position: relative;\n}\n.index_module_canSort__d3048071:hover {\n  cursor: pointer;\n}\n";
var modules_63b47c51$5 = {"table":"index_module_table__d3048071","th":"index_module_th__d3048071","td":"index_module_td__d3048071","footer":"index_module_footer__d3048071","operations":"index_module_operations__d3048071","empty":"index_module_empty__d3048071","thead":"index_module_thead__d3048071","can-sort":"index_module_canSort__d3048071"};
n(css$5,{});

const Table = ({ columns, records, trKey, page, pageSize, total, onPageChange, }) => {
    const renderValue = useCallback((value, record, index, render) => {
        const holder = "——";
        if (typeof render === "function") {
            return render(value, record, index) || holder;
        }
        if (Array.isArray(value) && value.length === 0) {
            return holder;
        }
        return value == null ? holder : value;
    }, []);
    const totalPage = useMemo(() => Math.ceil(total / pageSize), [total, pageSize]);
    useForceUpdate();
    return (jsxRuntime.exports.jsxs(jsxRuntime.exports.Fragment, { children: [records.length > 0 ? (jsxRuntime.exports.jsxs("table", Object.assign({ className: modules_63b47c51$5["table"] }, { children: [jsxRuntime.exports.jsx("thead", Object.assign({ className: modules_63b47c51$5["thead"] }, { children: jsxRuntime.exports.jsx("tr", Object.assign({ className: modules_63b47c51$5["tr"] }, { children: columns.map(({ field, name, onSort }, index) => (jsxRuntime.exports.jsx("th", Object.assign({ className: modules_63b47c51$5["th"] }, { children: typeof onSort === "function" && field ? (jsxRuntime.exports.jsx(Tip$1, Object.assign({ msg: "\u70B9\u51FB\u53EF\u4EE5\u8FDB\u884C\u6392\u5E8F", when: "hover" }, { children: jsxRuntime.exports.jsx("strong", Object.assign({ onClick: () => onSort(field), className: modules_63b47c51$5["can-sort"] }, { children: name })) }))) : (name) }), field || name || index))) })) })), jsxRuntime.exports.jsxs("tbody", { children: [records.map((record, index) => (jsxRuntime.exports.jsx("tr", Object.assign({ className: modules_63b47c51$5["tr"] }, { children: columns.map(({ field, render, name }, index) => (jsxRuntime.exports.jsx("td", Object.assign({ className: modules_63b47c51$5["td"] }, { children: renderValue(field && isValidString(field) ? record[field] : null, record, index, render) }), field || name || index))) }), record[trKey]))), jsxRuntime.exports.jsx("tr", {})] })] }))) : (jsxRuntime.exports.jsx("div", Object.assign({ className: modules_63b47c51$5["empty"] }, { children: "\u7A7A\u7A7A\u5982\u4E5F" }))), records.length > 0 ? (jsxRuntime.exports.jsxs("div", Object.assign({ className: modules_63b47c51$5["footer"] }, { children: [jsxRuntime.exports.jsxs("span", Object.assign({ className: modules_63b47c51$5["description"] }, { children: ["\u5F53\u524D\u7B2C ", jsxRuntime.exports.jsx("strong", { children: page }), " \u9875\uFF0C\u5171 ", jsxRuntime.exports.jsx("strong", { children: totalPage }), " ", "\u9875\uFF0C\u5171 ", jsxRuntime.exports.jsx("strong", { children: total }), " \u6761\u6570\u636E\u3002"] })), jsxRuntime.exports.jsxs("div", Object.assign({ className: modules_63b47c51$5["operations"] }, { children: [" ", jsxRuntime.exports.jsx(Button$1, Object.assign({ onClick: () => onPageChange(1, page), disabled: page === 1, className: modules_63b47c51$5["button"] }, { children: "\u7B2C\u4E00\u9875" })), jsxRuntime.exports.jsx(Button$1, Object.assign({ onClick: () => onPageChange(page + 1, page), disabled: totalPage <= page, className: modules_63b47c51$5["button"] }, { children: "\u4E0B\u4E00\u9875" })), jsxRuntime.exports.jsx(Button$1, Object.assign({ onClick: () => onPageChange(totalPage, page), disabled: totalPage <= page, className: modules_63b47c51$5["button"] }, { children: "\u5C3E\u9875" })), jsxRuntime.exports.jsx(InputWithButton, Object.assign({ inputType: "number", max: totalPage, min: 1, onButtonClick: (e, value) => Number(value) && onPageChange(Number(value), page), disabled: totalPage <= 1 }, { children: "\u8DF3\u8F6C\u5230" }))] }))] }))) : null] }));
};

var css$4 = ".index_module_tag__6aaad67d {\n  padding: 0.2rem 0.5rem;\n  border: 1px solid #333;\n  margin-right: 0.5rem;\n}\n.index_module_active__6aaad67d {\n  border-color: #6b0;\n}\n";
var modules_63b47c51$4 = {"tag":"index_module_tag__6aaad67d","active":"index_module_active__6aaad67d"};
n(css$4,{});

const Tag = (_a) => {
    var { value, onActiveChange, active = false, className = "", onClick } = _a, props = __rest(_a, ["value", "onActiveChange", "active", "className", "onClick"]);
    const [isActive, setIsActive] = useState(active);
    const handleClick = useCallback((e) => {
        onClick && onClick(e);
        if (!onActiveChange)
            return;
        const active = !isActive;
        setIsActive(active);
        onActiveChange(active);
    }, [isActive, onActiveChange, onClick]);
    useEffect(() => {
        setIsActive(active);
    }, [active]);
    return (jsxRuntime.exports.jsx("span", Object.assign({ onClick: handleClick, className: modules_63b47c51$4["tag"] +
            " " +
            className +
            " " +
            (isActive ? modules_63b47c51$4["active"] : "") }, props, { children: value })));
};

var css$3 = ".index_module_tagBox__535a4f21 {\n  display: inline-flex;\n  flex-wrap: wrap;\n}\n.index_module_delete__535a4f21 {\n  margin-right: 1.5rem;\n  color: #ee5151;\n  display: flex;\n  align-items: center;\n}\n.index_module_delete__535a4f21 {\n  cursor: pointer;\n}\n";
var modules_63b47c51$3 = {"tag-box":"index_module_tagBox__535a4f21","delete":"index_module_delete__535a4f21"};
n(css$3,{});

const TagBox = (_a) => {
    var { value, onChange, showAdd = false, className = "", onClickAdd, onActiveChange, canDelete, beforeActiveChange, defaultActiveState = [], single = false, defaultValue = [], difference = false } = _a, props = __rest(_a, ["value", "onChange", "showAdd", "className", "onClickAdd", "onActiveChange", "canDelete", "beforeActiveChange", "defaultActiveState", "single", "defaultValue", "difference"]);
    let [state, setState] = useState(defaultValue);
    useEffect(() => {
        if (value)
            setState(value);
    }, [value]);
    const [activeState, setActiveState] = useState([
        ...defaultActiveState,
    ]);
    const [text, setText] = useState("");
    const [isInput, setIsInput] = useState(false);
    const addTag = useCallback((...tags) => {
        const newState = state.concat(tags);
        setState(newState);
        return newState;
    }, [state]);
    const onAdd = useCallback((e) => {
        if (onClickAdd)
            onClickAdd(state, addTag);
        else
            setIsInput(true);
    }, [state, addTag]);
    const confirm = (e) => {
        setIsInput(false);
        if (difference && state.includes(text)) {
            setText("");
            return Message.error("这个名称已经存在了");
        }
        if (!text)
            return;
        const newState = addTag(text);
        setText("");
        onChange && onChange(newState);
    };
    const onInputChange = useCallback((v) => {
        setText(v);
    }, []);
    const handleActiveChange = useCallback((tag, toActive, index) => {
        if (!onActiveChange && !beforeActiveChange)
            return;
        let newActiveState;
        if (beforeActiveChange) {
            newActiveState = beforeActiveChange(activeState, tag, toActive);
        }
        else {
            if (single) {
                if (toActive) {
                    newActiveState = [tag];
                }
                else {
                    newActiveState = [];
                }
            }
            else if (toActive) {
                activeState.push(tag);
                newActiveState = activeState;
            }
            else {
                newActiveState = activeState.filter((t) => t != tag);
            }
        }
        setActiveState(newActiveState);
        onActiveChange && onActiveChange(newActiveState, tag, toActive);
    }, [activeState, onActiveChange, setActiveState, beforeActiveChange]);
    const handleDelete = useCallback((index) => {
        state.splice(index, 1);
        setState(state);
        onChange && onChange(state);
    }, [state, onChange, setState]);
    return (jsxRuntime.exports.jsxs("div", Object.assign({ className: modules_63b47c51$3["tag-box"] + " " + className }, props, { children: [Array.isArray(state)
                ? state.map((str, index) => (jsxRuntime.exports.jsxs("span", Object.assign({ style: { display: "flex" } }, { children: [jsxRuntime.exports.jsx(Tag, { active: activeState.includes(str) || false, onActiveChange: (onActiveChange || beforeActiveChange) &&
                                ((active) => handleActiveChange(str, active, index)), value: str }), canDelete ? (jsxRuntime.exports.jsx("span", Object.assign({ onClick: () => handleDelete(index), className: modules_63b47c51$3["delete"] }, { children: "\u00D7" }))) : null] }), index)))
                : null, showAdd ? (isInput ? (jsxRuntime.exports.jsxs(jsxRuntime.exports.Fragment, { children: [jsxRuntime.exports.jsx(FunctionComponent$1, { value: text, onChange: onInputChange }), jsxRuntime.exports.jsx(Button$1, Object.assign({ onClick: confirm }, { children: "\u786E\u5B9A" }))] })) : (jsxRuntime.exports.jsx(Button$1, Object.assign({ onClick: onAdd }, { children: "\u6DFB\u52A0" })))) : null] })));
};

const TextArea = ({ value, onChange, defaultValue = "", }) => {
    /**
     * @description: hooks states:
     */
    const [state, setState] = useState(defaultValue);
    /**
     * @description: hooks callbacks:
     */
    useEffect(() => {
        if (value != null)
            setState(value);
    }, [value]);
    const handleChange = useCallback((e) => {
        const newValue = e.target.value;
        setState(newValue);
        onChange && onChange(newValue);
    }, [onChange]);
    /**
     * @description: hooks objects:
     */
    /**
     * @description: other:
     */
    return (jsxRuntime.exports.jsx(jsxRuntime.exports.Fragment, { children: jsxRuntime.exports.jsx("textarea", { onChange: handleChange, value: state }) }));
};

var css$2 = ".index_module_add__29ed35bc {\n  padding: 1.5rem;\n  display: inline-block;\n  border: 1px dashed #333;\n}\n.index_module_add__29ed35bc:hover {\n  cursor: pointer;\n}\n.index_module_input__29ed35bc {\n  position: fixed;\n  top: 120vh;\n  left: 120vh;\n}\n.index_module_imgContainer__29ed35bc {\n  display: inline-flex;\n  align-items: center;\n}\n.index_module_delete__29ed35bc {\n  color: #ee5151;\n  margin-left: 0.5rem;\n}\n.index_module_delete__29ed35bc {\n  cursor: pointer;\n}\n.index_module_img__29ed35bc:hover {\n  cursor: pointer;\n}\n";
var modules_63b47c51$2 = {"add":"index_module_add__29ed35bc","input":"index_module_input__29ed35bc","img-container":"index_module_imgContainer__29ed35bc","delete":"index_module_delete__29ed35bc","img":"index_module_img__29ed35bc"};
n(css$2,{});

const SingleUpload = ({ value, onChange, transformer, }) => {
    useEffect(() => {
        setImgFile(value);
    }, [value]);
    const [imgFile, setImgFile] = useState(value);
    const ref = useRef(null);
    const addFile = useCallback(() => {
        if (!ref.current)
            return;
        ref.current.click();
    }, []);
    /**
     * @description:只有选中文件点击确定后才会触发，因此必有file
     * @param {*} useCallback
     * @return {*}
     */
    const handleFileChange = useCallback((e) => __awaiter(void 0, void 0, void 0, function* () {
        if (!ref.current)
            return;
        const file = ref.current.files[0];
        const formData = new FormData();
        formData.append(file.name, file);
        const imgFile = yield transformer(formData);
        setImgFile(imgFile);
        onChange && onChange(imgFile);
    }), []);
    const handleDelete = useCallback(() => {
        setImgFile(null);
    }, []);
    return imgFile ? (jsxRuntime.exports.jsxs("span", Object.assign({ className: modules_63b47c51$2["img-container"] }, { children: [jsxRuntime.exports.jsx(Img, { className: modules_63b47c51$2["img"], onClick: () => window.open(imgFile.url), src: imgFile.url }), jsxRuntime.exports.jsx("span", Object.assign({ onClick: handleDelete, className: modules_63b47c51$2["delete"] }, { children: "\u00D7" }))] }))) : (jsxRuntime.exports.jsxs("span", Object.assign({ onClick: addFile, className: modules_63b47c51$2["add"] }, { children: ["+", jsxRuntime.exports.jsx("input", { onChange: handleFileChange, ref: ref, className: modules_63b47c51$2["input"], type: "file" })] })));
};

const MultipartUpload = ({ value, onChange, transformer, defaultValue = [], max, }) => {
    /**
     * @description: states hooks
     */
    const [state, setState] = useState(defaultValue);
    /**
     * @description: callbacks hooks
     */
    useEffect(() => {
        if (value != null)
            setState(value);
    }, [value]);
    const ref = useRef(null);
    const addFile = useCallback(() => {
        if (!ref.current)
            return;
        ref.current.click();
    }, []);
    /**
     * @description:只有选中文件点击确定后才会触发，因此必有file
     * @param {*} useCallback
     * @return {*}
     */
    const handleFileChange = useCallback((e) => __awaiter(void 0, void 0, void 0, function* () {
        if (!ref.current)
            return;
        const file = ref.current.files[0];
        const formData = new FormData();
        formData.append(file.name, file);
        const imgFile = yield transformer(formData);
        const newState = [...state, imgFile];
        setState(newState);
        onChange && onChange(newState);
    }), [state]);
    const handleDelete = useCallback(() => {
        state.pop();
        setState([...state]);
    }, [state]);
    /**
     * @description: objects hooks
     */
    /**
     * @description: other
     */
    return (jsxRuntime.exports.jsxs(jsxRuntime.exports.Fragment, { children: [state.map((imgFile) => {
                return (jsxRuntime.exports.jsxs("span", Object.assign({ className: modules_63b47c51$2["img-container"] }, { children: [jsxRuntime.exports.jsx(Img, { className: modules_63b47c51$2["img"], onClick: () => window.open(imgFile.url), src: imgFile.url }), jsxRuntime.exports.jsx("span", Object.assign({ onClick: handleDelete, className: modules_63b47c51$2["delete"] }, { children: "\u00D7" }))] }), imgFile.uid));
            }), max > state.length ? (jsxRuntime.exports.jsx(jsxRuntime.exports.Fragment, { children: jsxRuntime.exports.jsxs("span", Object.assign({ onClick: addFile, className: modules_63b47c51$2["add"] }, { children: ["+", jsxRuntime.exports.jsx("input", { onChange: handleFileChange, ref: ref, className: modules_63b47c51$2["input"], type: "file" })] })) })) : null] }));
};

var css$1 = ".index_module_wrong__d27e2a30 {\n  color: #ee5151;\n}\n.index_module_right__d27e2a30 {\n  color: #6b0;\n}\n";
var modules_63b47c51$1 = {"wrong":"index_module_wrong__d27e2a30","right":"index_module_right__d27e2a30"};
n(css$1,{});

const ValidTip = ({ isValid }) => {
    if (typeof isValid !== "boolean")
        return null;
    return isValid ? (jsxRuntime.exports.jsx("span", Object.assign({ className: modules_63b47c51$1["right"] }, { children: "\uD83D\uDE00" }))) : (jsxRuntime.exports.jsx("span", Object.assign({ className: modules_63b47c51$1["wrong"] }, { children: "\uD83D\uDE1F" })));
};
var index$1 = React.memo(ValidTip);

var css = ".index_module_login__f9ea2189 {\n  display: inline-block;\n  height: fit-content;\n  margin: auto;\n  padding: 1.5rem;\n  text-align: center;\n}\n.index_module_button__f9ea2189 {\n  width: 80%;\n}\n@keyframes index_module_loginAnimation__f9ea2189 {\n  100% {\n    transform: translateY(-5rem);\n  }\n}\n.index_module_formItem__f9ea2189 {\n  margin-bottom: 2.5rem;\n}\n.index_module_loginContainer__f9ea2189 {\n  width: 100%;\n  height: 100%;\n  display: flex;\n}\n.index_module_title__f9ea2189 {\n  margin-bottom: 1.5rem;\n}\n";
var modules_63b47c51 = {"login":"index_module_login__f9ea2189","button":"index_module_button__f9ea2189","form-item":"index_module_formItem__f9ea2189","login-container":"index_module_loginContainer__f9ea2189","title":"index_module_title__f9ea2189","loginAnimation":"index_module_loginAnimation__f9ea2189"};
n(css,{});

const FunctionComponent = ({ api, onLogined }) => {
    const [formStore] = useFormStore();
    const handleClick = () => __awaiter(void 0, void 0, void 0, function* () {
        const msgs = formStore.validateAll();
        if (isTrue(msgs)) {
            const res = yield api(formStore.getValues());
            if (res) {
                const { token } = res, user = __rest(res, ["token"]);
                onLogined(token, user);
                // localStorage.setItem("token", token);
                // window.location.reload();
            }
        }
        else {
            Message.error(msgs.join("；"));
        }
    });
    useEffect(() => {
        formStore.setValues({
            password: "513167210",
            username: "wangshouren"
        });
    }, []);
    const onPasswordKeydown = useCallback((e) => {
        if (e.key === "Enter") {
            handleClick();
        }
    }, []);
    return (jsxRuntime.exports.jsxs(Form$1, Object.assign({ formStore: formStore, className: modules_63b47c51["login"] }, { children: [jsxRuntime.exports.jsx("h1", Object.assign({ className: modules_63b47c51["title"] }, { children: "login" })), jsxRuntime.exports.jsx(FormItem
            // defaultValue={"132"}
            , Object.assign({ 
                // defaultValue={"132"}
                rules: [
                    {
                        required: true,
                        reg: /([a-z0-9]){6,10}/i,
                        msg: "用户名是只包含a-z、0-9的任意组合，且长度为6~18位",
                    },
                ], className: modules_63b47c51["form-item"], label: "Username", field: "username" }, { children: jsxRuntime.exports.jsx(FunctionComponent$1, {}) })), jsxRuntime.exports.jsx(FormItem
            // defaultValue={"132"}
            , Object.assign({ 
                // defaultValue={"132"}
                className: modules_63b47c51["form-item"], label: "Password", field: "password", rules: [
                    {
                        required: true,
                    },
                    {
                        required: true,
                        reg: /([a-z0-9]){6,10}/i,
                        msg: "密码是只包含a-z、0-9的任意组合，且长度为6~18位",
                    },
                ] }, { children: jsxRuntime.exports.jsx(FunctionComponent$1, { onKeyDown: onPasswordKeydown, type: "password" }) })), jsxRuntime.exports.jsx(Button$1, Object.assign({ type: "success", className: modules_63b47c51["button"], onClick: handleClick }, { children: "login" }))] })));
};
var index = React.memo(FunctionComponent);

function login(data) {
    return http.post("/admin/login", data);
}
function updateAbout(id, data) {
    return http.put("/admin/" + id, data);
}
function getAbout() {
    return http.get("/admin/about");
}

function getArticleList(params) {
    return http.get("/article", {
        params,
    });
}
function destroyArticle(id) {
    return http.delete(`/article/${id}`);
}
function getArticleById(id) {
    return http.get(`/article/${id}`);
}
function updateArticle(id, data) {
    return http.put(`/article/${id}`, data);
}
function createArticle(data) {
    return http.post(`/article`, data);
}

function getCategoryList(params = {}) {
    return http.get("/category", {
        params,
    });
}
function destroyCategory(id) {
    return http.delete(`/category/${id}`);
}
function updateCategory(id, data) {
    return http.put(`/category/${id}`, data);
}
function createCategory(data) {
    return http.post(`/category`, data);
}

function getCommentList(params = {}) {
    return http.get("/comment", {
        params,
    });
}
function destroyComment(id) {
    return http.delete("/comment/" + id);
}
function updateComment(id, data) {
    return http.put(`/comment/${id}`, data);
}

function upload(formData) {
    return http.post("/common/upload", formData, {
        headers: {
            "Content-type": "multipart/form-data",
        },
    });
}

function getTagList(params = {}) {
    return http.get("/tag", {
        params,
    });
}
function destroyTag(id) {
    return http.delete(`/tag/${id}`);
}
function updateTag(id, data) {
    return http.put(`/tag/${id}`, data);
}
function createTag(data) {
    return http.post(`/tag`, data);
}

const http = axios.create({
    timeout: 5000,
    baseURL: "http://192.168.2.101:7001",
    withCredentials: true,
});
/**
 * @description: 请求拦截
 */
http.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    if (config && token && config.headers && isValidString(token)) {
        config.headers["Authorization"] = token;
    }
    return config;
});
/**
 * @description: 响应拦截
 */
http.interceptors.response.use((response) => {
    const { data: result } = response;
    if (!isObject(result))
        return null;
    const { code, msg, data, err } = result;
    if (code === 0) {
        if (isValidString(msg))
            Message.success(msg);
        return data;
    }
    let message = isValidString(msg) ? msg : err;
    if (code !== 0 && isValidString(message)) {
        Message.error(message);
    }
});

export { Button$1 as Button, InputWithButton as ButtonWithInput, Form$1 as Form, FormItem, FormStore, Img, FunctionComponent$1 as Input, Loading, index as Login, Message, Modal, MultipartUpload, index$2 as SaveBar, Select, SingleUpload, Table, Tag, TagBox, TextArea, Tip$1 as Tip, index$1 as ValidTip, createArticle, createCategory, createTag, destroyArticle, destroyCategory, destroyComment, destroyTag, formatTimeStrap, getAbout, getArticleById, getArticleList, getCategoryList, getCommentList, getExceptArray, getTagList, http, isNumber, isObject, isTrue, isValidString, login, parseSearch, stringifySearch, updateAbout, updateArticle, updateCategory, updateComment, updateTag, upload, useForceUpdate, useFormStore, useHttpData, useHttpDataAll, useHttpListData, useSearch };
