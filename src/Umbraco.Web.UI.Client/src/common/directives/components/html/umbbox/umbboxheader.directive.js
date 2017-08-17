/**
@ngdoc directive
@name umbraco.directives.directive:umbBoxHeader
@restrict E
@scope

@description
Use this directive to construct a title. Recommended to use it inside an {@link umbraco.directives.directive:umbBox umbBox} directive. See documentation for {@link umbraco.directives.directive:umbBox umbBox}.

<h3>Markup example</h3>
<pre>
    <umb-box>
        <umb-box-header title="this is a title"></umb-box-header>
        <umb-box-content>
            // Content here
        </umb-box-content>
    </umb-box>
</pre>

<h3>Markup example with using titleKey</h3>
<pre>
    <umb-box>
        // the title-key property needs an areaAlias_keyAlias from the language files
        <umb-box-header title-key="user_profile"></umb-box-header>
        <umb-box-content>
            // Content here
        </umb-box-content>
    </umb-box>
</pre>
{@link https://our.umbraco.org/documentation/extending/language-files/ Here you can see more about the language files}

<h3>Use in combination with:</h3>
<ul>
    <li>{@link umbraco.directives.directive:umbBox umbBox}</li>
    <li>{@link umbraco.directives.directive:umbBoxContent umbBoxContent}</li>
</ul>

@param {string} title (<code>attrbute</code>): Custom title text.
@param {string} title-key (<code>attrbute</code>): the key alias of the language xml files.
**/


(function(){
    'use strict';

    function BoxHeaderDirective() {

        var directive = {
            restrict: 'E',
            replace: true,
            transclude: true,
            templateUrl: 'views/components/html/umb-box/umb-box-header.html',
            scope: {
                titleKey: "@?",
                title: "@?"
            }
        };

        return directive;

    }

    angular.module('umbraco.directives').directive('umbBoxHeader', BoxHeaderDirective);

})();