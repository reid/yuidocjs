
/**
 * The test project
 * @project tester
 * @title The Tester
 * @icon http://a.img
 * @url http://one.url
 * @url http://two.url
 * @author admo
 * @contributor davglass
 * @contributor entropy
 */

/**
 * The module
 * @module mymodule
 * @category one,two
 * @category three
 * @requires one
 * @requires two
 * @uses three
 * @uses four
 */

/**
 * The submodule
 * @submodule mysubmodule
 * @category three,four
 */


/**
 * The class def
 * @class myclass
 * @constructor
 */

/**
 * test optional
 * @method testoptional
 * @param notype my desc
 * @param {int} namesecond my desc
 * @param namefirst {string} my desc
 * @param [optionalvar] {bool} my desc
 * @param {string} [optionalwithdefault="defaultval"] my desc
 * @evil
 * @injects {HTML} uses a string parameter to populate innerHTML
 * @returns something without a type
 * @example
 *   This is code
 * @example
 *   This is more code
 */

/**
 * test object param
 * @method testobjectparam
 * @param {object} anobject the object
 * @param {string} anobject.prop1 prop1
 * @param {bool} anobject.prop2 prop2
 * @return {string} something with a type
 */

/**
 * test 0..n param
 * @method test0ton
 * @param {string} [optionalandmultiple]* my desc
 * @returns something without a type
 */

/**
 * test 1..n param
 * @method test1ton
 * @param {string} multiple* my desc
 * @returns something without a type
 */

    /**
     * Testing really long param description paring
     * @method reallyLongParamDesc
     * @param {Object} config Object with configuration property name/value pairs. The object can be 
     * used to provide default values for the objects published attributes.
     *
     * <p>
     * The config object can also contain the following non-attribute properties, providing a convenient 
     * way to configure events listeners and plugins for the instance, as part of the constructor call:
     * </p>
     *
     * <dl>
     *     <dt>on</dt>
     *     <dd>An event name to listener function map, to register event listeners for the "on" moment of the event. A constructor convenience property for the <a href="Base.html#method_on">on</a> method.</dd>
     *     <dt>after</dt>
     *     <dd>An event name to listener function map, to register event listeners for the "after" moment of the event. A constructor convenience property for the <a href="Base.html#method_after">after</a> method.</dd>
     *     <dt>bubbleTargets</dt>
     *     <dd>An object, or array of objects, to register as bubble targets for bubbled events fired by this instance. A constructor convenience property for the <a href="EventTarget.html#method_addTarget">addTarget</a> method.</dd>
     *     <dt>plugins</dt>
     *     <dd>A plugin, or array of plugins to be plugged into the instance (see PluginHost's plug method for signature details). A constructor convenience property for the <a href="Plugin.Host.html#method_plug">plug</a> method.</dd>
     * </dl>
     *
    */
