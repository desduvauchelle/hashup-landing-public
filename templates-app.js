angular.module('templates-app', ['pages/about/about.tpl.html', 'pages/components/footer/footer.tpl.html', 'pages/components/navHeader/navHeader.tpl.html', 'pages/components/portfolioItem/portfolioItem.tpl.html', 'pages/contact/contact.tpl.html', 'pages/home/home.tpl.html', 'pages/mvp/mvp.tpl.html', 'pages/packages/packages.tpl.html', 'pages/portfolio/portfolio.tpl.html', 'pages/privacy/privacy.tpl.html', 'pages/started/started.tpl.html', 'pages/style/style.tpl.html', 'pages/terms/terms.tpl.html', 'pages/ux/ux.tpl.html']);

angular.module("pages/about/about.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("pages/about/about.tpl.html",
    "<div class=\"page-wrapper\" id=\"page-about\">\n" +
    "    <h1>About HASHUP</h1>\n" +
    "    <h2>A dream of better apps</h2>\n" +
    "    <section>\n" +
    "        <div class=\"container\">\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-md-6 col-md-offset-3\" style=\"text-align: center;\">\n" +
    "                    <h3>Mission statement</h3>\n" +
    "                    <p>\n" +
    "                        We want to make awesome apps that people love. <br />\n" +
    "                        We want to build things fast.<br />\n" +
    "                        We want to take risks.<br />\n" +
    "                    </p>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </section>\n" +
    "    <section class=\"section-alternate\">\n" +
    "        <div class=\"container\">\n" +
    "            <h2>Core team</h2>\n" +
    "            <div ng-repeat=\"person in team | filter: { category: 'core'}\" class=\"row\">\n" +
    "                <div class=\"col-md-3\">\n" +
    "                    <img ng-src=\"{{person.img}}\" alt=\"{{person.name}}\" width=\"100%\" />\n" +
    "                </div>\n" +
    "                <div class=\"col-md-9\">\n" +
    "                    <h2>{{person.name}} <small>{{person.role}}</small></h2>\n" +
    "\n" +
    "                    <p><strong>Responsibility</strong><br />{{person.responsibility}}</p>\n" +
    "                    <p><strong>Past</strong><br />{{person.past}}</p>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </section>\n" +
    "    <section>\n" +
    "        <div class=\"container\">\n" +
    "            <h2>Freelancers / Consultants that could help</h2>\n" +
    "            <div ng-repeat=\"person in team | filter: { category: 'freelancer'}\" class=\"row\">\n" +
    "                <div class=\"col-md-3\">\n" +
    "                    <img ng-src=\"{{person.img}}\" alt=\"{{person.name}}\" width=\"100%\" />\n" +
    "                </div>\n" +
    "                <div class=\"col-md-9\">\n" +
    "                    <h2>{{person.name}} <small>{{person.role}}</small></h2>\n" +
    "\n" +
    "                    <p><strong>Responsibility</strong><br />{{person.responsibility}}</p>\n" +
    "                    <p ng-show=\"person.past\"><strong>Past</strong><br />{{person.past}}</p>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </section>\n" +
    "</div>\n" +
    "");
}]);

angular.module("pages/components/footer/footer.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("pages/components/footer/footer.tpl.html",
    "<div class=\"footer-started\" ng-show=\"showStarted()\">\n" +
    "    <h3>Are you ready yet?</h3>\n" +
    "    <a ui-sref=\"started\" class=\"btn btn-primary\">Start a project now <i class=\"fa fa-chevron-right\"></i></a>\n" +
    "</div>\n" +
    "<section id=\"footer\">\n" +
    "    <div class=\"container\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-xs-6 col-md-3 col-sm-6\">\n" +
    "                <h3>COMPANY</h3>\n" +
    "                <!-- <a href=\"#\">Who we are</a> -->\n" +
    "                <a ui-sref=\"started\">Start a project</a>\n" +
    "                <a ui-sref=\"portfolio\">Success stories</a>\n" +
    "                <a ui-sref=\"ux\">User experience</a>\n" +
    "                <a ui-sref=\"mvp\">MVP</a>\n" +
    "                <a ui-sref=\"about\">About</a>\n" +
    "                <!-- <a href=\"#\">How it works</a> -->\n" +
    "                <!-- <a href=\"#\">Join us</a> -->\n" +
    "            </div>\n" +
    "            <div class=\"col-xs-6 col-md-3 col-sm-6\">\n" +
    "                <h3>INFO</h3>\n" +
    "                <!-- <a href=\"#\">FAQ</a> -->\n" +
    "                <a ui-sref=\"packages\">Packages</a>\n" +
    "                <a ui-sref=\"terms\">Terms of use</a>\n" +
    "                <a ui-sref=\"privacy\">Privacy</a>\n" +
    "            </div>\n" +
    "            <div class=\"col-xs-6 col-md-3 col-sm-6\">\n" +
    "                <h3>Contact</h3>\n" +
    "            </div>\n" +
    "            <div class=\"col-xs-6 col-md-3 col-sm-6\">\n" +
    "                <a ui-sref=\"home\" class=\"brand wow fadeInUp\">HASHUP</a>\n" +
    "                <span class=\"copyright wow fadeIn\" data-wow-delay=\".1s\">&copy; 2015 HASHUP, All Rights Reserved.</span>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <!-- <div class=\"row\"> -->\n" +
    "            <!-- <div class=\"col-sm-12\"> -->\n" +
    "                <!-- <ul class=\"social-links\"> -->\n" +
    "                    <!-- <li><a href=\"#\" class=\"wow fadeInUp\"><i class=\"fa fa-facebook\"></i></a></li> -->\n" +
    "                    <!-- <li><a href=\"https://twitter.com/_hashup\" class=\"wow fadeInUp\" data-wow-delay=\".1s\"><i class=\"fa fa-twitter\"></i></a></li> -->\n" +
    "                    <!-- <li><a href=\"#\" class=\"wow fadeInUp\" data-wow-delay=\".2s\"><i class=\"fa fa-google-plus\"></i></a></li> -->\n" +
    "                    <!-- <li><a href=\"https://fr.linkedin.com/in/desduvauchelle\" class=\"wow fadeInUp\" data-wow-delay=\".3s\"><i class=\"fa fa-linkedin\"></i></a></li> -->\n" +
    "                    <!-- <li><a href=\"#\" class=\"wow fadeInUp\" data-wow-delay=\".4s\"><i class=\"fa fa-pinterest\"></i></a></li> -->\n" +
    "                    <!-- <li><a href=\"mailto:denis@babygotchi.com\" class=\"wow fadeInUp\" data-wow-delay=\".5s\"><i class=\"fa fa-envelope\"></i></a></li> -->\n" +
    "                <!-- </ul> -->\n" +
    "            <!-- </div> -->\n" +
    "        <!-- </div> -->\n" +
    "    </div>\n" +
    "</section>\n" +
    "");
}]);

angular.module("pages/components/navHeader/navHeader.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("pages/components/navHeader/navHeader.tpl.html",
    "<!-- Fixed navbar -->\n" +
    "<nav  ng-class=\"isNotHomePage()\" class=\"navbar navbar-default navbar-fixed-top\">\n" +
    "    <div class=\"container\">\n" +
    "        <div class=\"navbar-header\">\n" +
    "            <button ng-click=\"isCollapsed = !isCollapsed\" type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\"\n" +
    "                    aria-expanded=\"false\" aria-controls=\"navbar\">\n" +
    "                <span class=\"sr-only\">Toggle navigation</span>\n" +
    "                <span class=\"icon-bar\"></span>\n" +
    "                <span class=\"icon-bar\"></span>\n" +
    "                <span class=\"icon-bar\"></span>\n" +
    "            </button>\n" +
    "            <a class=\"navbar-brand\" ui-sref=\"home\">{{appName}}</a>\n" +
    "        </div>\n" +
    "        <div ng-class=\"isCollapsed? 'collapse': ''\" id=\"navbar\" class=\"navbar-collapse collapse\">\n" +
    "            <ul class=\"nav navbar-nav navbar-right\">\n" +
    "                <li ng-class=\"getPage('/home')\"><a ui-sref=\"home\">Home</a></li>\n" +
    "                <li ng-class=\"getPage('/mvp')\"><a ui-sref=\"mvp\">MVP</a></li>\n" +
    "                <li ng-class=\"getPage('/portfolio')\"><a ui-sref=\"portfolio\">Success stories</a></li>\n" +
    "                <li ng-class=\"getPage('/packages')\"><a ui-sref=\"packages({type:''})\">Packages</a></li>\n" +
    "                <!-- <li ng-class=\"getPage('/about')\"><a ng-href=\"#/about\">About</a></li> -->\n" +
    "                <!-- <li ng-class=\"getPage('/contact')\"><a ui-sref=\"contact\">Contact</a></li> -->\n" +
    "                <li><a ui-sref=\"started\" class=\"btn btn-primary\">Start a project</a></li>\n" +
    "            </ul>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</nav>\n" +
    "\n" +
    "<div ng-class=\"isNotHomePage()\" id=\"nav-spacer\"></div>\n" +
    "");
}]);

angular.module("pages/components/portfolioItem/portfolioItem.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("pages/components/portfolioItem/portfolioItem.tpl.html",
    "<div ng-repeat=\"portfolio in portfolios\" class=\"portfolio-item wow fadeIn\">\n" +
    "    <img ng-src=\"assets/img/portfolios/{{portfolio.id}}/{{portfolio.image}}\" alt=\"{{portfolio.title}}\" class=\"wow zoomIn\" data-wow-delay=\"{{ $index/4 }}s\" />\n" +
    "    <div class=\"wrapper\">\n" +
    "        <h3>{{portfolio.title}} <span ng-repeat=\"type in portfolio.type\"><i class=\"fa fa-{{type}}\"></i></span></h3>\n" +
    "        <h4>{{portfolio.description}}</h4>\n" +
    "    </div>\n" +
    "    <a ui-sref=\"portfolio({ id: portfolio.id })\" class=\"main-link\"></a>\n" +
    "</div>\n" +
    "\n" +
    "<!-- <div class=\"row\">\n" +
    "    <div class=\"col-md-6\" style=\"background: no-repeat center center url('assets/img/portfolios/babygotchi/babygotchi.png'); background-size: cover; min-height: 369px;\"></div>\n" +
    "    <div class=\"col-md-6\" style=\"background: no-repeat center center url('assets/img/portfolios/twoodo/twoodo.png'); background-size: cover; min-height: 369px;\"></div>\n" +
    "</div> -->\n" +
    "");
}]);

angular.module("pages/contact/contact.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("pages/contact/contact.tpl.html",
    "<div class=\"page-wrapper\" id=\"page-contact\">\n" +
    "    <div class=\"container\">\n" +
    "        <h1>Say hello.</h1>\n" +
    "        <h2>If you have any questions, reach out on Github. <br />We're happy to talk.</h2>\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-md-4 col-md-offset-4\">\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("pages/home/home.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("pages/home/home.tpl.html",
    "<div id=\"page-home\">\n" +
    "\n" +
    "\n" +
    "    <section id=\"home\" full-height>\n" +
    "        <canvas starfield id=\"home-animation\"></canvas>\n" +
    "        <div class=\"wrapper\">\n" +
    "\n" +
    "            <div class=\"container\">\n" +
    "                <div class=\"text\">\n" +
    "                    <!-- <h2>Time goes by fast...</h2> -->\n" +
    "                    <h1>WE MAKE AWESOME WEB &amp; MOBILE APPS. <br />SUPER FAST &amp; FOR FREE*<small>*sometimes ;)</small></h1>\n" +
    "                    <h2>From your idea to launch. For experts and community leaders.</h2>\n" +
    "                    <br />\n" +
    "                    <br />\n" +
    "                    <a ui-sref=\"started\" class=\"btn btn-default\">LAUNCH YOUR IDEA NOW</a>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"mouse-icon\">\n" +
    "            <div class=\"wheel\"></div>\n" +
    "        </div>\n" +
    "    </section>\n" +
    "\n" +
    "    <section id=\"hello\">\n" +
    "        <div class=\"container\">\n" +
    "            <h1>Did you say FREE?</h1>\n" +
    "            <h2>YES we did. But under circumstances:</h2>\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-md-6\">\n" +
    "                    <h2>YOU HAVE A BIG COMMUNITY</h2>\n" +
    "                    <img ng-src=\"assets/img/random/following.png\" width=\"80%\" alt=\"Community leader\" />\n" +
    "                    <!-- <p>\n" +
    "                        Do you have a big community?\n" +
    "                    </p> -->\n" +
    "                </div>\n" +
    "                <div class=\"col-md-6\">\n" +
    "                    <h2>YOU HAVE A VALIDATED IDEA</h2>\n" +
    "                    <img ng-src=\"assets/img/random/build.png\" width=\"80%\" alt=\"Community leader\" />\n" +
    "                    <!-- <p>\n" +
    "                        We build apps that will serve your community in a big way.\n" +
    "                    </p> -->\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </section>\n" +
    "\n" +
    "    <section id=\"how\" class=\"section-alternate\">\n" +
    "        <div class=\"container\">\n" +
    "            <h1>HOW WE ROLL</h1>\n" +
    "            <h2>We take care of everything. From idea to launch, fast.</h2>\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-md-3 col-sm-6\">\n" +
    "                    <div class=\"illustration wow zoomIn\"><img ng-src=\"assets/img/random/model.png\" alt=\"Model\" width=\"100%\" /></div>\n" +
    "                    <h2>Lean launch</h2>\n" +
    "                    <p>We use the lean startup methodology to build your app.</p>\n" +
    "                </div>\n" +
    "                <div class=\"col-md-3 col-sm-6\">\n" +
    "                    <div class=\"illustration wow zoomIn\" data-wow-delay=\"0.2s\"><img ng-src=\"assets/img/random/design.png\" alt=\"Design\" width=\"100%\" /></div>\n" +
    "                    <h2>Design</h2>\n" +
    "                    <p>We create the ideal user experience with your guidance.</p>\n" +
    "                </div>\n" +
    "                <div class=\"col-md-3 col-sm-6\">\n" +
    "                    <div class=\"illustration wow zoomIn\" data-wow-delay=\"0.4s\"><img ng-src=\"assets/img/random/build2.png\" alt=\"Build\" width=\"100%\" /></div>\n" +
    "                    <h2>Build</h2>\n" +
    "                    <p>We build your web/mobile app the way the community wants it.</p>\n" +
    "                </div>\n" +
    "                <div class=\"col-md-3 col-sm-6\">\n" +
    "                    <div class=\"illustration wow zoomIn\" data-wow-delay=\"0.6s\"><img ng-src=\"assets/img/random/grow.png\" alt=\"Grow\" width=\"100%\" /></div>\n" +
    "                    <h2>Grow</h2>\n" +
    "                    <p>We'll setup growth tools to increase chances of success.</p>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </section>\n" +
    "\n" +
    "\n" +
    "    <section id=\"ready\">\n" +
    "        <div class=\"container\">\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-md-8\">\n" +
    "                    <h2>DO YOU HAVE A FOLLOWING? GREAT.</h2>\n" +
    "                    <h2>Let's get started on your idea now!</h2>\n" +
    "                </div>\n" +
    "                <div class=\"col-md-4\">\n" +
    "                    <a ui-sref=\"packages\" class=\"btn btn-default\">Packages</a>\n" +
    "                    <a ui-sref=\"started\" class=\"btn btn-primary\">Get started</a>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </section>\n" +
    "\n" +
    "\n" +
    "    <section id=\"what\">\n" +
    "        <div class=\"container\">\n" +
    "            <h1>WHAT WE MAKE</h1>\n" +
    "            <h2>HASHUP takes your idea to product launch, super fast!</h2>\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-md-3 col-sm-6\">\n" +
    "                    <div class=\"code output wow zoomIn\">Website</div>\n" +
    "                    <br />\n" +
    "                    <strong>Simple website</strong>\n" +
    "                    <br />For agencies, hotels, calling cards, portfolios\n" +
    "                </div>\n" +
    "                <div class=\"col-md-3 col-sm-6\">\n" +
    "                    <div class=\"code output wow zoomIn\" data-wow-delay=\"0.2s\">App</div>\n" +
    "                    <br />\n" +
    "                    <strong>Application website</strong>\n" +
    "                    <br />For Saas models\n" +
    "                </div>\n" +
    "\n" +
    "                <div class=\"col-md-3 col-sm-6\">\n" +
    "                    <div class=\"code output wow zoomIn\" data-wow-delay=\"0.4s\">iPhone</div>\n" +
    "                    <br />\n" +
    "                    <strong>Native iPhone app</strong>\n" +
    "                    <br />Well for iPhone apps\n" +
    "                </div>\n" +
    "\n" +
    "                <div class=\"col-md-3 col-sm-6\">\n" +
    "                    <div class=\"code output wow zoomIn\" data-wow-delay=\"0.6s\">Expertise</div>\n" +
    "                    <br />\n" +
    "                    <strong>Expertise &amp; consulting</strong>\n" +
    "                    <br />We can help out with startup advise, product management, ...\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </section>\n" +
    "\n" +
    "\n" +
    "\n" +
    "    <section id=\"portfolio\" class=\"section-alternate\">\n" +
    "        <div class=\"container\">\n" +
    "            <h1>Made with <i class=\"fa fa-heart\"></i> by HASHUP</h1>\n" +
    "        </div>\n" +
    "        <div class=\"list\">\n" +
    "            <portfolio-item></portfolio-item>\n" +
    "        </div>\n" +
    "        <a ng-show=\"hasMorePortfolio\" ui-sref=\"portfolio\" class=\"btn btn-default\">View more</a>\n" +
    "    </section>\n" +
    "</div>\n" +
    "");
}]);

angular.module("pages/mvp/mvp.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("pages/mvp/mvp.tpl.html",
    "<div class=\"page-wrapper\" id=\"page-contact\">\n" +
    "	<div class=\"container\">\n" +
    "		<h1>Minimum Viable Product</h1>\n" +
    "		<h2>Done is better than perfect!</h2>\n" +
    "		<br />\n" +
    "		<br />\n" +
    "		<img src=\"assets/img/random/build-fast.png\" alt=\"Build fast, fail fast\" width=\"100%\" />\n" +
    "		<div class=\"row\">\n" +
    "			<div class=\"col-md-4\">\n" +
    "				<h3>Launch fast</h3>\n" +
    "				<p>\n" +
    "					One of the biggest mistakes entrepreneurs do, is to build something perfect.\n" +
    "					<br /> Perfect is what makes your product arrive too late in the market and impossible to adapt when it hits feedback from your users. 90% of the time, the product that works is NOT the first version!\n" +
    "				</p>\n" +
    "			</div>\n" +
    "			<div class=\"col-md-4\">\n" +
    "				<h3>Adapt fast</h3>\n" +
    "				<p>\n" +
    "					Once you get feedback, adapt the product quickly. See what works, what doesn't, as quickly as possible and make the product more awesome at every new version.\n" +
    "				</p>\n" +
    "			</div>\n" +
    "			<div class=\"col-md-4\">\n" +
    "				<h3>Sell fast</h3>\n" +
    "				<p>\n" +
    "					If you want to know if you are really solving a problem, you should be selling fast. If they really have a problem, they'll pay for a slightly buggy product, because they really need it. Even better, sell it before it's even made!\n" +
    "				</p>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<br />\n" +
    "		<br />\n" +
    "		<br />\n" +
    "		<br />\n" +
    "		<br />\n" +
    "		<br />\n" +
    "	</div>\n" +
    "\n" +
    "	<section class=\"section-alternate\">\n" +
    "		<h1>WE DO THINGS FAST.</h1>\n" +
    "		<h2>We can have an app ready in just 5-10 days,<br /> from start to MVP.</h2>\n" +
    "	</section>\n" +
    "\n" +
    "	<section>\n" +
    "		<h1>HOW?</h1>\n" +
    "		<h2>We don't re-invent the wheel.</h2>\n" +
    "		<div class=\"container\">\n" +
    "			<div class=\"row\">\n" +
    "				<div class=\"col-md-4\">\n" +
    "					<h3>Frameworks</h3>\n" +
    "					<p>\n" +
    "						We use a lot of frameworks so that getting started is a matter of minutes instead of days. A lot of things are open source and already done for you these days, so why not use it?\n" +
    "					</p>\n" +
    "				</div>\n" +
    "				<div class=\"col-md-4\">\n" +
    "					<h3>BAAS</h3>\n" +
    "					<p>\n" +
    "						Backend As A Service. Although we have an in house system, it is much faster, simpler and more robust to start with something that people have already perfected and put into your hands for a few bucks a month.\n" +
    "					</p>\n" +
    "				</div>\n" +
    "				<div class=\"col-md-4\">\n" +
    "					<h3>Simplicity</h3>\n" +
    "					<p>\n" +
    "						Simplicity is achieved when nothing else can be removed. Using this practice, you eliminate alot of work in code as well. Anything that is \"nice to have\" is thrown out of the window (or put in v2.0), making the feature requests much shorter = faster.\n" +
    "					</p>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</section>\n" +
    "</div>\n" +
    "");
}]);

angular.module("pages/packages/packages.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("pages/packages/packages.tpl.html",
    "<div class=\"page-wrapper\" id=\"page-packages\">\n" +
    "\n" +
    "\n" +
    "    <secion id=\"packages\" ng-show=\"showSection('selector')\">\n" +
    "        <div class=\"container\">\n" +
    "            <h1>Packages</h1>\n" +
    "            <h2>How our packages work.</h2>\n" +
    "            <div class=\"row\" style=\"text-align: left;\">\n" +
    "                <div class=\"col-md-6 col-md-offset-3\">\n" +
    "                    <p>\n" +
    "                        First, we talk. Go to the <a ui-sref=\"started\">get started</a> page and tell us about your idea, vision, huge pain and frustration that you have a solution for.\n" +
    "                        <br /> No need for a lot of detail-just some words about your thing, what it is, how it's different than everything before it, and how you see us helping.\n" +
    "                        <br /> We want to know why you're excited about your idea and why you think other people will be, too.\n" +
    "                    </p>\n" +
    "                    <p>\n" +
    "                        If the project is something we can do, we'll set aside some time to talk and we'll get a sense of whats great about your vision.\n" +
    "                        And don't worry, when you get started, we have a NDA to make sure we don't steal your idea or let you know if we're already working on something similar.\n" +
    "                    </p>\n" +
    "                    <p>\n" +
    "                        Usually people end up needing either of these 2 packages or a bit of both:\n" +
    "                    </p>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-md-4 col-md-offset-2\">\n" +
    "                    <i class=\"fa fa-hand-rock-o huge\"></i>\n" +
    "                    <h2>SHARER</h2>\n" +
    "                    <p>\n" +
    "                        Free. We build the app. You share it to your community.<br /> We share the profits.\n" +
    "                    </p>\n" +
    "                    <a ui-sref=\"packages({ type: 'sharer'})\" class=\"btn btn-primary\">View details <i class=\"fa fa-chevron-right\"></i></a>\n" +
    "                </div>\n" +
    "                <div class=\"col-md-4\">\n" +
    "                    <i class=\"fa fa-wrench huge\"></i>\n" +
    "                    <h2>WORKER</h2>\n" +
    "                    <p>You pay HASHUP, we make your app.<br /> Nothing more, nothing less.</p>\n" +
    "                    <a ui-sref=\"packages({ type: 'worker'})\" class=\"btn btn-primary\">View details <i class=\"fa fa-chevron-right\"></i></a>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </secion>\n" +
    "\n" +
    "\n" +
    "    <section class=\"package\" ng-show=\"showSection('worker')\">\n" +
    "        <div class=\"container\">\n" +
    "            <a ui-sref=\"packages({ type: ''})\" class=\"back\"><i class=\"fa fa-chevron-left\"></i> Packages</a>\n" +
    "            <h1><i class=\"fa fa-wrench\"></i>\n" +
    "                <br />WORKER</h1>\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-md-3\">\n" +
    "                    <h3>Requirements</h3>\n" +
    "                    <hr />\n" +
    "                    <form>\n" +
    "                        <div class=\"form-group\">\n" +
    "                            <label>What do you need?</label>\n" +
    "                        </div>\n" +
    "                        <div ng-repeat=\"option in options\">\n" +
    "                            <div class=\"checkbox\">\n" +
    "                                <div class=\"wrapper\"></div>\n" +
    "                                <label>\n" +
    "                                    <input type=\"checkbox\" ng-model=\"option.selected\">{{option.name}}\n" +
    "                                    <span class=\"help-block\">{{option.helpText}}</span>\n" +
    "                                </label>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </form>\n" +
    "                    <p class=\"help-block\">\n" +
    "                        Note: Prices are only for reference. They WILL vary depending on the project, animations, complexity.<br />\n" +
    "                        Note 2: Backend can be optional if we opt to use a Backend As A Service such as <a href=\"https://www.parse.com\" target=\"_blank\">Parse</a>\n" +
    "                    </p>\n" +
    "                </div>\n" +
    "                <div class=\"col-md-8\">\n" +
    "                    <h3>Sample pricing</h3>\n" +
    "                    <hr />\n" +
    "                    <div ng-repeat=\"section in appSamples\">\n" +
    "                        <table class=\"table table-striped\">\n" +
    "                            <caption><i class=\"fa fa-{{section.icon}}\"></i> {{section.name}}</caption>\n" +
    "                            <thead>\n" +
    "                                <tr>\n" +
    "                                    <th></th>\n" +
    "                                    <th>Website</th>\n" +
    "                                    <th>iPhone app</th>\n" +
    "                                    <th>Web + iPhone</th>\n" +
    "                                </tr>\n" +
    "                            </thead>\n" +
    "                            <tbody>\n" +
    "                                <tr ng-repeat=\"app in section.apps\">\n" +
    "                                    <th scope=\"row\">{{app.name}} <a ng-show=\"app.link\" href=\"{{app.link}}\" target=\"_blank\"><i class=\"fa fa-external-link\"></i></a></th>\n" +
    "                                    <td>{{pricing(app.pages,'website')}}{{timingEstimate(app.pages,'website')}}</td>\n" +
    "                                    <td>{{pricing(app.pages,'iphone')}}{{timingEstimate(app.pages,'iphone')}}</td>\n" +
    "                                    <td>{{pricing(app.pages,'both')}}{{timingEstimate(app.pages,'both')}}</td>\n" +
    "                                </tr>\n" +
    "                            </tbody>\n" +
    "                        </table>\n" +
    "                    </div>\n" +
    "                    <br />\n" +
    "                    <p>\n" +
    "                        <a ui-sref=\"started\" class=\"btn btn-primary\">Start your project now <i class=\"fa fa-chevron-right\"></i></a>\n" +
    "                    </p>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </section>\n" +
    "\n" +
    "    <section class=\"package\" ng-show=\"showSection('sharer')\">\n" +
    "        <div class=\"container\">\n" +
    "            <a ui-sref=\"packages({ type: ''})\" class=\"back\"><i class=\"fa fa-chevron-left\"></i> Packages</a>\n" +
    "            <h1><i class=\"fa fa-hand-rock-o\"></i>\n" +
    "                <br />SHARER</h1>\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-md-4\">\n" +
    "                    <h3>Are you eligible?</h3>\n" +
    "                    <hr />\n" +
    "                    <form>\n" +
    "                        <div class=\"form-group\">\n" +
    "                            <label>Are you:</label>\n" +
    "                        </div>\n" +
    "                        <div class=\"checkbox\">\n" +
    "                            <div class=\"wrapper\"></div>\n" +
    "                            <label>\n" +
    "                                <input type=\"checkbox\">Famous</label>\n" +
    "                            <p class=\"help-block\">You have a big following and/or social presence.</p>\n" +
    "                        </div>\n" +
    "                        <div class=\"checkbox\">\n" +
    "                            <div class=\"wrapper\"></div>\n" +
    "                            <label>\n" +
    "                                <input type=\"checkbox\">An expert</label>\n" +
    "                            <p class=\"help-block\">Do you know something specific for your industry?</p>\n" +
    "                        </div>\n" +
    "                        <div class=\"checkbox\">\n" +
    "                            <div class=\"wrapper\"></div>\n" +
    "                            <label>\n" +
    "                                <input type=\"checkbox\">Able to sell/market</label>\n" +
    "                            <p class=\"help-block\">You have a robust plan and have experience in selling?</p>\n" +
    "                        </div>\n" +
    "                    </form>\n" +
    "                </div>\n" +
    "                <div class=\"col-md-4\">\n" +
    "                    <h3>Pricing</h3>\n" +
    "                    <hr />\n" +
    "                    <h4>FREE</h4>\n" +
    "                    <p class=\"help-block\">\n" +
    "                        Note: We do require a retainer. This is to ensure your motivation, and so that we don't develop the application for you and you don't do anything with it.\n" +
    "                    </p>\n" +
    "\n" +
    "                </div>\n" +
    "                <div class=\"col-md-4\">\n" +
    "                    <h3>How does it work?</h3>\n" +
    "                    <hr />\n" +
    "                    <ol>\n" +
    "                        <li>WE meet virtually</li>\n" +
    "                        <li>WE discuss your idea</li>\n" +
    "                        <li>HASHUP reviews the project</li>\n" +
    "                        <li>If validated, WE discuss specifics</li>\n" +
    "                        <li>You make a promise to market and sell the app</li>\n" +
    "                        <li>WE collaborate on the design</li>\n" +
    "                        <li>HASHUP gets down and dirty in code</li>\n" +
    "                        <li>WE release the app</li>\n" +
    "                        <li>YOU market/sell the app</li>\n" +
    "                        <li>WE share the spoils and buy a yacht</li>\n" +
    "                    </ol>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <br />\n" +
    "            <p>\n" +
    "                <a ui-sref=\"started\" class=\"btn btn-primary\">Start your project now  <i class=\"fa fa-chevron-right\"></i></a>\n" +
    "            </p>\n" +
    "        </div>\n" +
    "    </section>\n" +
    "\n" +
    "    <section id=\"promise\" class=\"section-alternate\">\n" +
    "        <div class=\"container\">\n" +
    "            <h2>OUR PROMISES</h2>\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-md-4\">\n" +
    "                    <div class=\"col-inside\">\n" +
    "                        <h3>SPEED</h3>\n" +
    "                        <ul>\n" +
    "                            <li>We do our best to deliver fast.</li>\n" +
    "                            <li>The goal is to get an <a href=\"https://en.wikipedia.org/wiki/Minimum_viable_product\" target=\"_blank\">MVP</a> out as fast as possible to see if people like it.</li>\n" +
    "                            <li>We never never have several projects at the same time.</li>\n" +
    "                        </ul>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"col-md-4\">\n" +
    "                    <div class=\"col-inside\">\n" +
    "                        <h3>TRANSPARENCY</h3>\n" +
    "                        <ul>\n" +
    "                            <li>If we are working, our Skype, Twoodo, ...is on to talk with you.</li>\n" +
    "                            <li>We'll let you know when we need to concentrate.</li>\n" +
    "                            <li>Distance is not an issue, with application like <a href=\"http://zoom.us/\" target=\"_blank\">zoom.us</a> and <a href=\"https://www.twoodo.com\" target=\"_blank\">Twoodo</a>. You'll always know what we are currently working on.</li>\n" +
    "                        </ul>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"col-md-4\">\n" +
    "                    <div class=\"col-inside\">\n" +
    "                        <h3>AUTHENTICITY</h3>\n" +
    "                        <ul>\n" +
    "                            <li>We will be honnest.</li>\n" +
    "                            <li>Good or bad, we'll say it.</li>\n" +
    "                        </ul>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </section>\n" +
    "</div>\n" +
    "");
}]);

angular.module("pages/portfolio/portfolio.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("pages/portfolio/portfolio.tpl.html",
    "<div class=\"page-wrapper\" id=\"page-portfolio\">\n" +
    "\n" +
    "    <section ng-show=\"hasFocus\" id=\"focus\">\n" +
    "        <div class=\"container\">\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-md-4\">\n" +
    "                    <img ng-src=\"assets/img/portfolios/{{focusProject.id}}/{{focusProject.image}}\" alt=\"{{focusProject.title}}\" width=\"100%\" class=\"animated fadeIn\" />\n" +
    "                </div>\n" +
    "                <div class=\"col-md-8\">\n" +
    "                    <h1 class=\"animated swing\">{{focusProject.title}}</h1>\n" +
    "                    <span ng-repeat=\"type in focusProject.type\" class=\"small\" title=\"App for {{type}}\"><i class=\"fa fa-{{type}}\"></i></span>\n" +
    "                    <h2>{{focusProject.description}}</h2>\n" +
    "                    <p class=\"details\">{{focusProject.details}}</p>\n" +
    "                    <a href=\"{{focusProject.link}}\" target=\"_blank\">View app <i class=\"fa fa-chevron-right\"></i></a>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"discover\">\n" +
    "                <div ng-repeat=\"img in focusProject.discover\" class=\"item\">\n" +
    "                    <img ng-src=\"assets/img/portfolios/{{focusProject.id}}/{{img}}\" alt=\"{{focusProject.title}}\" width=\"100%\" class=\"wow fadeIn\" />\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "    </section>\n" +
    "\n" +
    "\n" +
    "    <section id=\"portfolio\">\n" +
    "        <div class=\"container\">\n" +
    "            <h1 ng-bind-html=\"sectionTitle\"></h1>\n" +
    "            <h2>Some of the projects we have completed</h2>\n" +
    "        </div>\n" +
    "        <div class=\"list\">\n" +
    "            <portfolio-item></portfolio-item>\n" +
    "        </div>\n" +
    "    </section>\n" +
    "</div>\n" +
    "");
}]);

angular.module("pages/privacy/privacy.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("pages/privacy/privacy.tpl.html",
    "<div class=\"page-wrapper\">\n" +
    "    <section id=\"started\">\n" +
    "        <div class=\"container\">\n" +
    "            <h1>Privacy Policy</h1>\n" +
    "\n" +
    "            <div class=\"\">\n" +
    "                <h2 class=\"no-margin-top\">Our Policy</h2>\n" +
    "                <p>Welcome to the web site (the “Site”) of Hashup (“Hashup”, “we”, “us” and/or “our”,\"company\"). This Site is operated by Hashup and has been created to provide information about our company and our software-as-a-service platform for developing\n" +
    "                    software (together with the Site, the “Services”) to our Service visitors (“you”, “your”). This Privacy Policy sets forth Hashup's policy with respect to information including personally identifiable data (“Personal Data”) and other\n" +
    "                    information that is collected from visitors to the Site and Services.</p>\n" +
    "                <h2>Information We Collect</h2>\n" +
    "                <p>When you interact with us through the Services, we may collect Personal Data and other information from you, as further described below:</p>\n" +
    "                <p>Personal Data That You Provide Through the Services: We collect Personal Data from you when you voluntarily provide such information, such as when you contact us with inquiries, respond to one of our surveys, register for access to the\n" +
    "                    Services or use certain Services. Wherever company collects Personal Data we make an effort to provide a link to this Privacy Policy.</p>\n" +
    "                <p>By voluntarily providing us with Personal Data, you are consenting to our use of it in accordance with this Privacy Policy. If you provide Personal Data to the Services, you acknowledge and agree that such Personal Data may be transferred\n" +
    "                    from your current location to the offices and servers of company and the authorized third parties referred to herein located in the United States.</p>\n" +
    "                <p>Other Information:</p>\n" +
    "                <p>Non-Identifiable Data: When you interact with company through the Services, we receive and store certain personally non-identifiable information. Such information, which is collected passively using various technologies, cannot presently\n" +
    "                    be used to specifically identify you. Company may store such information itself or such information may be included in databases owned and maintained by company affiliates, agents or service providers. The Services may use such information\n" +
    "                    and pool it with other information to track, for example, the total number of visitors to our Site, the number of visitors to each page of our Site, and the domain names of our visitors' Internet service providers. It is important\n" +
    "                    to note that no Personal Data is available or used in this process.</p>\n" +
    "                <p>In operating the Services, we may use a technology called \"cookies.\" A cookie is a piece of</p>\n" +
    "                <p>information that the computer that hosts our Services gives to your browser when you access the Services. Our cookies help provide additional functionality to the Services and help us analyze</p>\n" +
    "                <p>Services usage more accurately. For instance, our Site may set a cookie on your browser that allows you to access the Services without needing to remember and then enter a password more than once during a visit to the Site. In all cases\n" +
    "                    in which we use cookies, we will not collect Personal Data except with your permission. On most web browsers, you will find a “help” section on the toolbar. Please refer to this section for information on how to receive notification\n" +
    "                    when you are receiving a new cookie and how to turn cookies off. We recommend that you leave cookies turned on because they allow you to take advantage of some of the Service features.</p>\n" +
    "                <p>Aggregated Personal Data: In an ongoing effort to better understand and serve the users of the Services, company often conducts research on its customer demographics, interests and behavior based on the Personal Data and other information\n" +
    "                    provided to us. This research may be compiled and analyzed on an aggregate basis, and company may share this aggregate data with its affiliates, agents and business partners. This aggregate information does not identify you personally.\n" +
    "                    Company may also disclose aggregated user statistics in order to describe our services to current and</p>\n" +
    "                <p>prospective business partners, and to other third parties for other lawful purposes.</p>\n" +
    "                <p>Third Party Tracking and Analytics: We may allow third party service providers to use cookies or similar technologies to collect information about your browsing activities over time and across different websites following your use of the\n" +
    "                    Services. For example, we may use Google Analytics, a web analytics service provided by Google, Inc. (“Google”), and Mixpanel, a mobile and web analytics platform provided by Mixpanel, Inc. (“Mixpanel”). Google and Mixpanel use cookies\n" +
    "                    or similar technologies to help us analyze how users function and use our mobile applications and the Site to improve our Service. We may also implement Google Analytics features based on Display</p>\n" +
    "                <p>Advertising (which may include Remarketing with Google Analytics). Visitors can opt out by using Google’s Ads Settings or going to https://tools.google.com/dlpage/gaoptout/. To opt-out of</p>\n" +
    "                <p>Mixpanel’s collection of your data, go to https://mixpanel.com/optout/. Please note that if you get a new computer, install a new browser, erase or otherwise alter your browser's cookie file (including upgrading certain browsers) you may\n" +
    "                    also clear the Mixpanel opt-out cookie.</p>\n" +
    "                <h2>Our Use of Your Personal Data and Other Information</h2>\n" +
    "                <p>Company uses the Personal Data you provide in a manner that is consistent with this Privacy Policy.</p>\n" +
    "                <p>If you provide Personal Data for a certain reason, we may use the Personal Data in connection with the reason for which it was provided. For instance, if you contact us by email, we will use the</p>\n" +
    "                <p>Personal Data you provide to answer your question or resolve your problem. Also, if you provide</p>\n" +
    "                <p>Personal Data in order to obtain access to the Services, we will use your Personal Data to provide you with access to such services and to monitor your use of such services. Company and its subsidiaries and affiliates (the “Related Companies”)\n" +
    "                    may also use your Personal Data and other personally non-identifiable information collected through the Services to help us improve the content and functionality of the Services, to better understand our users and to improve the</p>\n" +
    "                <p>Services. Company and its affiliates may use this information to contact you in the future to tell you about services we believe will be of interest to you. If we do so, each marketing communication we send you will contain instructions\n" +
    "                    permitting you to \"opt-out\" of receiving future marketing communications. In addition, if at any time you wish not to receive any future marketing communications or you wish to have your name deleted from our mailing lists, please\n" +
    "                    contact us as indicated below.\n" +
    "                </p>\n" +
    "                <p>If company intends on using any Personal Data in any manner that is not consistent with this Privacy Policy, you will be informed of such anticipated use prior to or at the time at which the Personal Data is collected.</p>\n" +
    "                <h2>Our Disclosure of Your Personal Data and Other Information</h2>\n" +
    "                <p>Company is not in the business of selling your information. We consider this information to be a vital part of our relationship with you. There are, however, certain circumstances in which we may share your Personal Data with certain third\n" +
    "                    parties without further notice to you, as set forth below:</p>\n" +
    "                <p>Business Transfers: As we develop our business, we might sell or buy businesses or assets. In the event of a corporate sale, merger, reorganization, dissolution or similar event, Personal Data may be part of the transferred assets.</p>\n" +
    "                <p>Related Companies: We may also share your Personal Data with our Related Companies for purposes consistent with this Privacy Policy.</p>\n" +
    "                <p>Agents, Consultants and Related Third Parties: company, like many businesses, sometimes hires other companies to perform certain business-related functions. Examples of such functions include mailing information, maintaining databases\n" +
    "                    and processing payments. When we employ another entity to perform a function of this nature, we only provide them with the information that they need to perform their specific function.</p>\n" +
    "                <p>Legal Requirements: company may disclose your Personal Data if required to do so by law or in the good faith belief that such action is necessary to (i) comply with a legal obligation, (ii) protect and defend the rights or property of\n" +
    "                    company, (iii) act in urgent circumstances to protect the personal safety of users of the Services or the public, or (iv) protect against legal liability.</p>\n" +
    "                <h2>Your Choices</h2>\n" +
    "                <p>You can visit the Site without providing any Personal Data. If you choose not to provide any Personal Data, you may not be able to use certain Services.</p>\n" +
    "                <h2>Exclusions</h2>\n" +
    "                <p>This Privacy Policy does not apply to any Personal Data collected by company other than Personal Data collected through the Services. This Privacy Policy shall not apply to any unsolicited information you provide to company through the\n" +
    "                    Services or through any other means. This includes, but is not limited to, information posted to any public areas of the Services, such as forums, any ideas for new products or modifications to existing products, and other unsolicited\n" +
    "                    submissions (collectively, “Unsolicited Information”). All Unsolicited Information shall be deemed to be non-confidential and company shall be free to reproduce, use, disclose, and distribute such Unsolicited Information to others\n" +
    "                    without limitation or attribution.</p>\n" +
    "                <h2>Children</h2>\n" +
    "                <p>Company does not knowingly collect Personal Data from children under the age of 13. If you are under the age of 13, please do not submit any Personal Data through the Services. We encourage parents and legal guardians to monitor their\n" +
    "                    children’s Internet usage and to help enforce our Privacy Policy by instructing their children never to provide Personal Data on the Services without their permission. If you have reason to believe that a child under the age of 13\n" +
    "                    has provided Personal Data to company through the Services, please contact us, and we will endeavor to delete that information from our databases.</p>\n" +
    "                <h2>Links to Other Web Sites</h2>\n" +
    "                <p>This Privacy Policy applies only to the Services. The Services may contain links to other web sites not operated or controlled by company (the “Third Party Sites”). The policies and procedures we described here do not apply to the Third\n" +
    "                    Party Sites. The links from the Services do not imply that company endorses or has reviewed the Third Party Sites. We suggest contacting those sites directly for information on their privacy policies.</p>\n" +
    "                <h2>Security</h2>\n" +
    "                <p>Company takes reasonable steps to protect the Personal Data provided via the Services from loss, misuse, and unauthorized access, disclosure, alteration, or destruction. However, no Internet or email transmission is ever fully secure or\n" +
    "                    error free. In particular, email sent to or from the Services may not be secure. Therefore, you should take special care in deciding what information you send to us via email. Please keep this in mind when disclosing any Personal Data\n" +
    "                    to company via the Internet.</p>\n" +
    "                <h2>Other Terms and Conditions</h2>\n" +
    "                <p>Your access to and use of the Services is subject to the Terms of Service at <a ui-sref=\"terms\">https://www.hashup.com/#/terms</a>\n" +
    "                    <span>.</span>\n" +
    "                </p>\n" +
    "                <h2>Access to Information; Contacting company Policy:</h2>\n" +
    "                <p>To keep your Personal Data accurate, current, and complete, please contact us as specified below. We will take reasonable steps to update or correct Personal Data in our possession that you have previously submitted via the Services.</p>\n" +
    "                <p>Please also feel free to contact us if you have any questions about company's Privacy Policy or the information practices of the Services.</p>\n" +
    "                <p>You may contact us as follows: <a href=\"mailto:denis@hashup.io\">denis@hashup.io</a>\n" +
    "                    <span>.</span>\n" +
    "                </p>\n" +
    "            </div>\n" +
    "            <br />\n" +
    "            <br />\n" +
    "            <br />\n" +
    "            <br />\n" +
    "        </div>\n" +
    "    </section>\n" +
    "</div>\n" +
    "");
}]);

angular.module("pages/started/started.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("pages/started/started.tpl.html",
    "<div class=\"page-wrapper\">\n" +
    "	<section id=\"page-started\">\n" +
    "		<div class=\"container\">\n" +
    "			<h1>Get started</h1>\n" +
    "			<h2>Get started with just a couple of questions.</h2>\n" +
    "            <br />\n" +
    "            <br />\n" +
    "            <form ng-submit=\"sendMessage()\" ng-show=\"showForm\" name=\"contactForm\" novalidate style=\"max-width: 500px; margin: 0 auto;\">\n" +
    "                <div ng-class=\"(contactForm.name.$invalid && contactForm.name.$touched) ? 'has-feedback has-error': ''\"  class=\"form-group\">\n" +
    "    				<label for=\"name\">What's your name?</label>\n" +
    "    				<input ng-model=\"message.name\" ng-required=\"true\" type=\"text\" class=\"form-control\" id=\"name\" placeholder=\"Name\">\n" +
    "    			</div>\n" +
    "    			<div ng-class=\"(contactForm.name.$invalid && contactForm.name.$touched) ? 'has-feedback has-error': ''\" class=\"form-group\">\n" +
    "    				<label for=\"email\">Your email?</label>\n" +
    "    				<input ng-model=\"message.email\" ng-required=\"true\" type=\"email\" class=\"form-control\" id=\"email\" placeholder=\"Email\">\n" +
    "    			</div>\n" +
    "    			<div class=\"form-group\">\n" +
    "    				<label for=\"exampleInputPassword1\">How can we help?</label>\n" +
    "    				<textarea ng-model=\"message.content\" class=\"form-control\" placeholder=\"Ex: I need an iPhone that does this ...\"></textarea>\n" +
    "    			</div>\n" +
    "    			<button type=\"submit\" class=\"btn btn-primary btn-lg\">Submit</button>\n" +
    "    		</form>\n" +
    "		</div>\n" +
    "	</section>\n" +
    "</div>\n" +
    "");
}]);

angular.module("pages/style/style.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("pages/style/style.tpl.html",
    "<div class=\"page-wrapper\" id=\"style\">\n" +
    "    <section>\n" +
    "        <div class=\"container\">\n" +
    "            <h1>Style guide</h1>\n" +
    "            <h3>Make sure your design makes sense altogether in one place.</h3>\n" +
    "        </div>\n" +
    "    </section>\n" +
    "\n" +
    "    <section>\n" +
    "        <div class=\"container\">\n" +
    "            <h1>Typography h1</h1>\n" +
    "            <h2>Headers h2</h2>\n" +
    "            <h3>Headers h3</h3>\n" +
    "            <h4>Headers h4</h4>\n" +
    "            <h5>Headers h5</h5>\n" +
    "            <h6>Headers h6</h6>\n" +
    "            <p>\n" +
    "                This is a paragraph text\n" +
    "            </p>\n" +
    "            <p class=\"help-block\">\n" +
    "                This is help block.\n" +
    "            </p>\n" +
    "        </div>\n" +
    "    </section>\n" +
    "\n" +
    "    <section>\n" +
    "        <div class=\"container\">\n" +
    "            <h1>Theme colors</h1>\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-md-3\">\n" +
    "                    <div class=\"illustration bg-red\">\n" +
    "\n" +
    "                    </div>\n" +
    "                    <h3>@theme-red</h3>\n" +
    "                </div>\n" +
    "                <div class=\"col-md-3\">\n" +
    "                    <div class=\"illustration bg-blue\">\n" +
    "\n" +
    "                    </div>\n" +
    "                    <h3>@theme-blue</h3>\n" +
    "                </div>\n" +
    "                <div class=\"col-md-3\">\n" +
    "                    <div class=\"illustration bg-yellow\">\n" +
    "\n" +
    "                    </div>\n" +
    "                    <h3>@theme-yellow</h3>\n" +
    "                </div>\n" +
    "                <div class=\"col-md-3\">\n" +
    "                    <div class=\"illustration bg-black\">\n" +
    "\n" +
    "                    </div>\n" +
    "                    <h3>@theme-black</h3>\n" +
    "                </div>\n" +
    "                <div class=\"col-md-3\">\n" +
    "                    <div class=\"illustration bg-orange\">\n" +
    "\n" +
    "                    </div>\n" +
    "                    <h3>@theme-orange</h3>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </section>\n" +
    "\n" +
    "    <section>\n" +
    "        <div class=\"container\">\n" +
    "            <h1>Buttons</h1>\n" +
    "            <div class=\"\">\n" +
    "                <h3>Normal</h3>\n" +
    "                <button type=\"button\" class=\"btn btn-default\">Default</button>\n" +
    "                <button type=\"button\" class=\"btn btn-primary\">Primary</button>\n" +
    "                <button type=\"button\" class=\"btn btn-success\">Success</button>\n" +
    "                <button type=\"button\" class=\"btn btn-info\">Info</button>\n" +
    "                <button type=\"button\" class=\"btn btn-warning\">Warning</button>\n" +
    "                <button type=\"button\" class=\"btn btn-danger\">Danger</button>\n" +
    "                <button type=\"button\" class=\"btn btn-link\">Link</button>\n" +
    "            </div>\n" +
    "            <div class=\"alternate\">\n" +
    "                <h3>Alternate</h3>\n" +
    "                <button type=\"button\" class=\"btn btn-default\">Default</button>\n" +
    "                <button type=\"button\" class=\"btn btn-primary\">Primary</button>\n" +
    "                <button type=\"button\" class=\"btn btn-success\">Success</button>\n" +
    "                <button type=\"button\" class=\"btn btn-info\">Info</button>\n" +
    "                <button type=\"button\" class=\"btn btn-warning\">Warning</button>\n" +
    "                <button type=\"button\" class=\"btn btn-danger\">Danger</button>\n" +
    "                <button type=\"button\" class=\"btn btn-link\">Link</button>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </section>\n" +
    "\n" +
    "    <section>\n" +
    "        <div class=\"container\">\n" +
    "            <h1>Alert</h1>\n" +
    "\n" +
    "            <p class=\"alert alert-info\">\n" +
    "                This is an alert info\n" +
    "            </p>\n" +
    "            <p class=\"alert alert-success\">\n" +
    "                This is an alert success\n" +
    "            </p>\n" +
    "            <p class=\"alert alert-warning\">\n" +
    "                This is an alert warning\n" +
    "            </p>\n" +
    "            <p class=\"alert alert-danger\">\n" +
    "                This is an alert danger\n" +
    "            </p>\n" +
    "        </div>\n" +
    "    </section>\n" +
    "    <section>\n" +
    "        <div class=\"container\">\n" +
    "            <h1>Tables</h1>\n" +
    "            <h3>Basic</h3>\n" +
    "            <table class=\"table\">\n" +
    "                <caption>Optional table caption.</caption>\n" +
    "                <thead>\n" +
    "                    <tr>\n" +
    "                        <th>#</th>\n" +
    "                        <th>First Name</th>\n" +
    "                        <th>Last Name</th>\n" +
    "                        <th>Username</th>\n" +
    "                    </tr>\n" +
    "                </thead>\n" +
    "                <tbody>\n" +
    "                    <tr>\n" +
    "                        <th scope=\"row\">1</th>\n" +
    "                        <td>Mark</td>\n" +
    "                        <td>Otto</td>\n" +
    "                        <td>@mdo</td>\n" +
    "                    </tr>\n" +
    "                    <tr>\n" +
    "                        <th scope=\"row\">2</th>\n" +
    "                        <td>Jacob</td>\n" +
    "                        <td>Thornton</td>\n" +
    "                        <td>@fat</td>\n" +
    "                    </tr>\n" +
    "                    <tr>\n" +
    "                        <th scope=\"row\">3</th>\n" +
    "                        <td>Larry</td>\n" +
    "                        <td>the Bird</td>\n" +
    "                        <td>@twitter</td>\n" +
    "                    </tr>\n" +
    "                </tbody>\n" +
    "            </table>\n" +
    "            <h3>Stripped</h3>\n" +
    "            <table class=\"table table-striped\">\n" +
    "                <caption>Optional table caption.</caption>\n" +
    "                <thead>\n" +
    "                    <tr>\n" +
    "                        <th>#</th>\n" +
    "                        <th>First Name</th>\n" +
    "                        <th>Last Name</th>\n" +
    "                        <th>Username</th>\n" +
    "                    </tr>\n" +
    "                </thead>\n" +
    "                <tbody>\n" +
    "                    <tr>\n" +
    "                        <th scope=\"row\">1</th>\n" +
    "                        <td>Mark</td>\n" +
    "                        <td>Otto</td>\n" +
    "                        <td>@mdo</td>\n" +
    "                    </tr>\n" +
    "                    <tr>\n" +
    "                        <th scope=\"row\">2</th>\n" +
    "                        <td>Jacob</td>\n" +
    "                        <td>Thornton</td>\n" +
    "                        <td>@fat</td>\n" +
    "                    </tr>\n" +
    "                    <tr>\n" +
    "                        <th scope=\"row\">3</th>\n" +
    "                        <td>Larry</td>\n" +
    "                        <td>the Bird</td>\n" +
    "                        <td>@twitter</td>\n" +
    "                    </tr>\n" +
    "                </tbody>\n" +
    "            </table>\n" +
    "            <h3>Bordered</h3>\n" +
    "            <table class=\"table table-bordered\">\n" +
    "                <caption>Optional table caption.</caption>\n" +
    "                <thead>\n" +
    "                    <tr>\n" +
    "                        <th>#</th>\n" +
    "                        <th>First Name</th>\n" +
    "                        <th>Last Name</th>\n" +
    "                        <th>Username</th>\n" +
    "                    </tr>\n" +
    "                </thead>\n" +
    "                <tbody>\n" +
    "                    <tr>\n" +
    "                        <th scope=\"row\">1</th>\n" +
    "                        <td>Mark</td>\n" +
    "                        <td>Otto</td>\n" +
    "                        <td>@mdo</td>\n" +
    "                    </tr>\n" +
    "                    <tr>\n" +
    "                        <th scope=\"row\">2</th>\n" +
    "                        <td>Jacob</td>\n" +
    "                        <td>Thornton</td>\n" +
    "                        <td>@fat</td>\n" +
    "                    </tr>\n" +
    "                    <tr>\n" +
    "                        <th scope=\"row\">3</th>\n" +
    "                        <td>Larry</td>\n" +
    "                        <td>the Bird</td>\n" +
    "                        <td>@twitter</td>\n" +
    "                    </tr>\n" +
    "                </tbody>\n" +
    "            </table>\n" +
    "            <h3>Hover</h3>\n" +
    "            <table class=\"table table-hover\">\n" +
    "                <caption>Optional table caption.</caption>\n" +
    "                <thead>\n" +
    "                    <tr>\n" +
    "                        <th>#</th>\n" +
    "                        <th>First Name</th>\n" +
    "                        <th>Last Name</th>\n" +
    "                        <th>Username</th>\n" +
    "                    </tr>\n" +
    "                </thead>\n" +
    "                <tbody>\n" +
    "                    <tr>\n" +
    "                        <th scope=\"row\">1</th>\n" +
    "                        <td>Mark</td>\n" +
    "                        <td>Otto</td>\n" +
    "                        <td>@mdo</td>\n" +
    "                    </tr>\n" +
    "                    <tr>\n" +
    "                        <th scope=\"row\">2</th>\n" +
    "                        <td>Jacob</td>\n" +
    "                        <td>Thornton</td>\n" +
    "                        <td>@fat</td>\n" +
    "                    </tr>\n" +
    "                    <tr>\n" +
    "                        <th scope=\"row\">3</th>\n" +
    "                        <td>Larry</td>\n" +
    "                        <td>the Bird</td>\n" +
    "                        <td>@twitter</td>\n" +
    "                    </tr>\n" +
    "                </tbody>\n" +
    "            </table>\n" +
    "            <h3>Condensed</h3>\n" +
    "            <table class=\"table table-condensed\">\n" +
    "                <caption>Optional table caption.</caption>\n" +
    "                <thead>\n" +
    "                    <tr>\n" +
    "                        <th>#</th>\n" +
    "                        <th>First Name</th>\n" +
    "                        <th>Last Name</th>\n" +
    "                        <th>Username</th>\n" +
    "                    </tr>\n" +
    "                </thead>\n" +
    "                <tbody>\n" +
    "                    <tr>\n" +
    "                        <th scope=\"row\">1</th>\n" +
    "                        <td>Mark</td>\n" +
    "                        <td>Otto</td>\n" +
    "                        <td>@mdo</td>\n" +
    "                    </tr>\n" +
    "                    <tr>\n" +
    "                        <th scope=\"row\">2</th>\n" +
    "                        <td>Jacob</td>\n" +
    "                        <td>Thornton</td>\n" +
    "                        <td>@fat</td>\n" +
    "                    </tr>\n" +
    "                    <tr>\n" +
    "                        <th scope=\"row\">3</th>\n" +
    "                        <td>Larry</td>\n" +
    "                        <td>the Bird</td>\n" +
    "                        <td>@twitter</td>\n" +
    "                    </tr>\n" +
    "                </tbody>\n" +
    "            </table>\n" +
    "        </div>\n" +
    "    </section>\n" +
    "</div>\n" +
    "");
}]);

angular.module("pages/terms/terms.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("pages/terms/terms.tpl.html",
    "<div class=\"page-wrapper\">\n" +
    "    <section id=\"started\">\n" +
    "        <div class=\"container\">\n" +
    "            <h1>Terms of service</h1>\n" +
    "\n" +
    "            <div class=\"\">\n" +
    "                <h2 class=\"no-margin-top\">1. Acceptance of Terms</h2>\n" +
    "                <ol>\n" +
    "                    <li>\n" +
    "                        <strong>a.) &nbsp;</strong>company, a Liquid Labs Inc. product (“company” or “we”), provides its Service (as defined below) to you through its web site located at http://www.hashup.io (the “Site”), subject to this Terms of Service agreement\n" +
    "                        (“TOS”). By accepting this TOS or by accessing or using the Service or Site, you acknowledge that you have read, understood, and agree to be bound by this TOS. If you are entering into this TOS on behalf of a company, business\n" +
    "                        or other legal entity, you represent that you have the authority to bind such entity and its affiliates to this TOS, in which case the terms “you” or “your” shall refer to such entity and its affiliates. If you do not have such\n" +
    "                        authority, or if you do not agree with this TOS, you must not accept this TOS and may not use the Service.</li>\n" +
    "                    <li>\n" +
    "                        <strong>b.) &nbsp;</strong>company may change this TOS from time to time by providing thirty (30) days prior notice either by emailing the email address associated with your account or by posting a notice on the Site. You can review the\n" +
    "                        most current version of this TOS at any time hashup.com. The revised terms and conditions will become effective thirty (30) days after we post or send you notice of such changes, and if you use the Service after that date, your\n" +
    "                        use will constitute acceptance of the revised terms and conditions. If any change to this TOS is not acceptable to you, your only remedy is stop using the Services.</li>\n" +
    "                    <li>\n" +
    "                        <strong>c.) &nbsp;</strong>As part of the registration process, you will identify an administrative user name and pass word for your account (“Account”).</li>\n" +
    "                </ol>\n" +
    "                <h2>2. Description of Service</h2>\n" +
    "                <p>The “Service(s)” includes (a) the Site, (b) company’s software-as-a-service platform for hiring software developers and managing software development projects and (c) all software (including the Software, as defined below), data, reports,\n" +
    "                    text, images, sounds, video, and content made available through any of the foregoing (collectively referred to as the “Content”). Any new features added to or augmenting the Service are also subject to this TOS.</p>\n" +
    "                <h2>3. Additional Terms</h2>\n" +
    "                <p>The Service is designed to connect customers (“Customers”) with third party software developers (“Developers”) and manage software development projects and deliverables for Customers and may be subject to additional terms, including payment\n" +
    "                    terms if you are a Customer or Developer. If you are a Customer you may be required to agree to our Customer Terms, prior to purchasing the Service. If you are a Developer, you may be required to agree to our Developer Terms prior\n" +
    "                    to accepting a Project. The Customer Terms and Developer Terms shall hereinafter be referred to as the “Additional Terms.” If there is any conflict between this TOS and the Additional Terms, the Additional Terms shall control.</p>\n" +
    "                <h2>4. General Conditions/ Access and Use of the Service</h2>\n" +
    "                <ol>\n" +
    "                    <li>\n" +
    "                        <strong>a.) &nbsp;</strong>Subject to the terms and conditions of this TOS, you may access and use the Service only for lawful purposes. All rights, title and interest in and to the Service and its components will remain with and belong\n" +
    "                        exclusively to company. You shall not (a) sublicense, resell, rent, lease, transfer, assign, time share or otherwise commercially exploit or make the Service available to any third party; (b) use the Service in any unlawful manner\n" +
    "                        (including without limitation in violation of any data, privacy or export control laws) or in any manner that interferes with or disrupts the integrity or performance of the Service or its components, or (c) modify, adapt or hack\n" +
    "                        the Service to, or otherwise attempt to gain unauthorized access to the Service or its related systems or networks. You shall comply with any codes of conduct, policies or other notices company provides you or publishes in connection\n" +
    "                        with the Service, and you shall promptly notify company if you learn of a security breach related to the Service.</li>\n" +
    "                    <li>\n" +
    "                        <strong>b.) &nbsp;</strong>Any software that may be made available by company in connection with the Service (“Soft ware”) contains proprietary and confidential information that is protected by applicable intellectual property and other\n" +
    "                        laws. Subject to the terms and conditions of this TOS, company hereby grants you a non-transferable, non-sublicensable and non-exclusive right and license to use the object code of any Software on a single device solely in connection\n" +
    "                        with the Service, provided that you shall not (and shall not allow any third party to) copy, modify, create a derivative work of, reverse engineer, reverse assemble or otherwise attempt to discover any source code or sell, assign,\n" +
    "                        sublicense or otherwise transfer any right in any Software. You agree not to access the Service by any means other than through the interface that is provided by company for use in accessing the Service. Any rights not expressly\n" +
    "                        granted herein are reserved and no license or right to use any trademark of company or any third party is granted to you in connection with the Service.</li>\n" +
    "                    <li>\n" +
    "                        <strong>c.) &nbsp;</strong>You are solely responsible for all data, information, feedback, suggestions, text, content and other materials that you upload, post, deliver, provide or otherwise transmit or store (here- after “post(ing)”)\n" +
    "                        in connection with or relating to the Service (“Your Content”). You agree to cooperate with and provide reasonable assistance to company in promoting and advertising the Services.</li>\n" +
    "                    <li>\n" +
    "                        <strong>d.) &nbsp;</strong>You are responsible for maintaining the confidentiality of your login, password and account and for all activities that occur under your login or account. company reserves the right to access your account in\n" +
    "                        order to respond to your requests for technical support. By posting Your Content on or through the Service, you hereby do and shall grant company a worldwide, non-exclusive, perpetual, irrevocable, royalty-free, fully paid, sublicensable\n" +
    "                        and transferable license to use, modify, reproduce, distribute, display, publish and perform Your Content solely to provide the Services. company has the right, but not the obligation, to monitor the Service, Content, or Your Content.\n" +
    "                        You further agree that company may remove or disable any Content at any time for any reason (including, but not limited to, upon receipt of claims or allegations from third parties or authorities relating to such Content), or for\n" +
    "                        no reason at all.</li>\n" +
    "                    <li>\n" +
    "                        <strong>e.) &nbsp;</strong>You understand that the operation of the Service, including Your Content, may be unencrypted and involve (a) transmissions over various networks; (b) changes to conform and adapt to technical requirements of\n" +
    "                        connecting networks or devices and (c) transmission to company’s third party vendors and hosting partners to provide the necessary hardware, software, networking, storage, and related technology required to operate and maintain\n" +
    "                        the Service. Accordingly, you acknowledge that you bear sole responsibility for adequate security, protection and backup of Your Content. company will have no liability to you for any unauthorized access or use of any of Your Content,\n" +
    "                        or any corruption, deletion, destruction or loss of any of Your Content.</li>\n" +
    "                    <li>\n" +
    "                        <strong>f.) &nbsp;</strong>You shall be responsible for obtaining and maintaining any equipment and ancillary services needed to connect to, access or otherwise use the Services, including, without limitation, modems, hardware, server,\n" +
    "                        software, operating system, networking, web servers, long distance and local telephone service (collectively, “Equipment”). You shall be responsible for ensuring that such Equipment is compatible with the Services (and, to the\n" +
    "                        extent applicable, the Software) and complies with all configurations and specifications set forth in company’s published policies then in effect. You shall also be responsible for maintaining the security of the Equipment, your\n" +
    "                        Account, passwords (including but not limited to administrative and user passwords) and files, and for all uses of your Account or the Equipment with or without your knowledge or consent.</li>\n" +
    "                    <li>\n" +
    "                        <strong>g.) &nbsp;</strong>The failure of company to exercise or enforce any right or provision of this TOS shall not be a waiver of that right. You acknowledge that this TOS is a contract between you and company, even though it is electronic\n" +
    "                        and is not physically signed by you and company, and it governs your use of the Service.</li>\n" +
    "                    <li>\n" +
    "                        <strong>h.) &nbsp;</strong>Subject to the terms hereof, company may (but has no obligation to) provide technical support services, through email in accordance with our standard practice.</li>\n" +
    "                </ol>\n" +
    "                <h2>5. Representations and Warranties</h2>\n" +
    "                <p>You represent and warrant to company that (i) you have full power and authority to enter into this TOS; (ii) you own all Your Content or have obtained all permissions, releases, rights or licenses required to engage in your posting and\n" +
    "                    other activities (and allow company to perform its obligations) in connection with the Services without obtaining any further releases or consents; (iii) Your Content and other activities in connection with the Service, and company’s\n" +
    "                    exercise of all rights and license granted by you herein, do not and will not violate, infringe, or misappropriate any third party’s copyright, trademark, right of privacy or publicity, or other personal or proprietary right, nor does\n" +
    "                    Your Content contain any matter that is defamatory, obscene, unlawful, threatening, abusive, tortious, offensive or harassing; and (iv) you are eighteen (18) years of age or older.</p>\n" +
    "                <h2>6. Termination</h2>\n" +
    "                <p>company reserves the right, in its sole discretion, to restrict, suspend, or terminate this Agreement and your access to all or any part of the Site or the Content at any time and for any reason without prior notice or liability. company\n" +
    "                    reserves the right to change, suspend, or discontinue all or any part of the Site at any time without prior notice or liability. However, all accrued rights to payment and the terms of Section 4-12 shall survive termination of this\n" +
    "                    TOS.</p>\n" +
    "                <h2>7. Disclaimer of Warranties</h2>\n" +
    "                <p>The Services may be temporarily unavailable for scheduled maintenance or for unscheduled emergency maintenance, either by company or by third-party providers, or because of other causes beyond our reasonable control. HOWEVER, THE SERVICE,\n" +
    "                    INCLUDING THE SITE AND CONTENT, AND ALL SERVER AND NETWORK COMPONENTS ARE PROVIDED ON AN “AS IS” AND “AS AVAILABLE” BASIS WITHOUT ANY WARRANTIES OF ANY KIND, AND company EXPRESSLY DISCLAIMS ANY AND ALL WARRANTIES, WHETHER EXPRESS OR\n" +
    "                    IMPLIED, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY, TITLE, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. YOU ACKNOWLEDGE THAT company DOES NOT WARRANT THAT THE SERVICE WILL BE UNINTERRUPTED,\n" +
    "                    TIMELY, SECURE, ERROR-FREE OR VIRUS-FREE, NOR DOES IT MAKE ANY WARRANTY AS TO THE RESULTS THAT MAY BE OBTAINED FROM USE OF THE SERVICES, AND NO INFORMATION, ADVICE OR SERVICES OBTAINED BY YOU FROM company OR THROUGH THE SERVICE SHALL\n" +
    "                    CREATE ANY WARRANTY NOT EXPRESSLY STATED IN THIS TOS.</p>\n" +
    "                <h2>8. Limitation of Liability</h2>\n" +
    "                <ol>\n" +
    "                    <li>\n" +
    "                        <strong>a.) &nbsp;</strong>UNDER NO CIRCUMSTANCES AND UNDER NO LEGAL THEORY (WHETHER IN CONTRACT, TORT, OR OTHERWISE) SHALL company BE LIABLE TO YOU OR ANY THIRD PARTY FOR (A) ANY INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, CONSEQUENTIAL\n" +
    "                        OR PUNITIVE DAMAGES, INCLUDING LOST PROFITS, LOST SALES OR BUSINESS, LOST DATA, OR (B) FOR ANY DIRECT DAMAGES, COSTS, LOSSES OR LIABILITIES IN EXCESS OF THE FEES ACTUALLY PAID BY YOU IN THE SIX (6) MONTHS PRECEDING THE EVENT GIVING\n" +
    "                        RISE TO YOUR CLAIM OR, IF NO FEES APPLY, ONE HUNDRED ($100) U.S. DOLLARS. THE PROVISIONS OF THIS SECTION ALLOCATE THE RISKS UNDER THIS TOS BETWEEN THE PARTIES, AND THE PARTIES HAVE RELIED ON THESE LIMITATIONS IN DETERMINING WHETHER\n" +
    "                        TO ENTER INTO THIS TOS.</li>\n" +
    "                    <li>\n" +
    "                        <strong>b.) &nbsp;</strong>Some states do not allow the exclusion of implied warranties or limitation of liability for incidental or consequential damages, which means that some of the above limitations may not apply to you. IN THESE STATES,\n" +
    "                        company’S LIABILITY WILL BE LIMITED TO THE GREATEST EXTENT PERMITTED BY LAW.</li>\n" +
    "                </ol>\n" +
    "                <h2>9. Idemnification</h2>\n" +
    "                <p>You shall defend, indemnify, and hold harmless company from and against any claims, actions or demands, including without limitation reasonable legal and accounting fees, arising or resulting from your breach of this TOS, any of Your Content,\n" +
    "                    or your other access, contribution to, use or misuse of the Service. company shall provide notice to you of any such claim, suit or demand. company reserves the right to assume the exclusive defense and control of any matter which\n" +
    "                    is subject to indemnification under this section. In such case, you agree to cooperate with any reasonable requests assisting company’s defense of such matter.</p>\n" +
    "                <h2>10. U.S. Government Matters</h2>\n" +
    "                <p>You may not remove or export from the United States or allow the export or re-export of the Services or anything related thereto, or any direct product thereof in violation of any restrictions, laws or regulations of the United States\n" +
    "                    Department of Commerce, the United States Department of Treasury Office of Foreign Assets Control, or any other United States or foreign agency or authority. As defined in FAR section 2.101, the software and documentation installed\n" +
    "                    by company on your Equipment (if applicable) are “commercial items” and according to DFAR section 252.227 7014(a)(1) and (5) are deemed to be “commercial computer software” and “commercial computer software documentation.” Consistent\n" +
    "                    with DFAR section 227.7202 and FAR section 12.212, any use modification, reproduction, release, performance, display, or disclosure of such commercial software or commercial software documentation by the U.S. Government will be governed\n" +
    "                    solely by the terms of this TOS and will be prohibited except to the extent expressly permitted by the terms of this TOS.</p>\n" +
    "                <h2>11. Assignment</h2>\n" +
    "                <p>You may not assign this TOS without the prior written consent of company, but company may assign or transfer this TOS, in whole or in part, without restriction.</p>\n" +
    "                <h2>12. Miscellaneous</h2>\n" +
    "                <p>If any provision of this TOS is found to be unenforceable or invalid, that provision will be limited or eliminated to the minimum extent necessary so that this TOS will otherwise remain in full force and effect and enforceable. Both parties\n" +
    "                    agree that this TOS and any Additional Terms as applicable, are the complete and exclusive statement of the mutual understanding of the parties and supersedes and cancels all previous written and oral agreements, communications and\n" +
    "                    other understandings relating to the subject matter of this TOS, and that all waivers and modifications must be in a writing signed by both parties, except as otherwise provided herein. No agency, partnership, joint venture, or employment\n" +
    "                    is created as a result of this TOS and you do not have any authority of any kind to bind company in any respect whatsoever. In any action or proceeding to enforce rights under this TOS, the prevailing party will be entitled to recover\n" +
    "                    costs and attorneys’ fees. All notices under this TOS will be in writing and will be deemed to have been duly given when received, if personally delivered; when receipt is electronically confirmed, if transmitted by facsimile or email;\n" +
    "                    the day after it is sent, if sent for next day delivery by recognized overnight delivery service; and upon receipt, if sent by certified or registered mail, return receipt requested.</p>\n" +
    "                <h2>13. Governing Law</h2>\n" +
    "                <p>This TOS shall be governed by the laws of the State of California without regard to the principles of conflicts of law. Unless otherwise elected by company in a particular instance, you hereby expressly agree to submit to the exclusive\n" +
    "                    personal jurisdiction of the federal and state courts of the State of California or the purpose of resolving any dispute relating to your access to or use of the Service.</p>\n" +
    "                <h2>14. Privacy</h2>\n" +
    "                <p>company’s collection and use of personal information and other data is subject to company’s Privacy Policy at www.hashup.io/#/privacy.</p>\n" +
    "                <h2>15. DMCA</h2>\n" +
    "                <p>The Digital Millennium Copyright Act of 1998 (the “DMCA”) provides recourse for copyright owners who believe that material appearing on the Internet infringes their rights under U.S. copyright law. company will promptly process and investigate\n" +
    "                    notices of alleged infringement and will take appropriate actions under the DMCA and other applicable intellectual property laws with respect to any alleged or actual infringement. A notification of claimed copyright infringement should\n" +
    "                    be emailed to company’s Copyright Agent at denis@hashup.io (subject line: “DMCA” Takedown Request”). </p>\n" +
    "                <p>\n" +
    "                    <strong>Notice:&nbsp;</strong>To be effective, the notification must be in writing and contain the following information:</p>\n" +
    "                <ul>\n" +
    "                    <li>an electronic or physical signature of the person authorized to act on behalf of the owner of the copyright or other intellectual property interest;</li>\n" +
    "                    <li>a description of the copyrighted work or other intellectual property that you claim has been infringed;</li>\n" +
    "                    <li>a description of where the material that you claim is infringing is located on the Site, with enough detail that we may find it on the Site;</li>\n" +
    "                    <li>your address, telephone number, and email address;</li>\n" +
    "                    <li>a statement by you that you have a good faith belief that the disputed use is not authorized by the copyright or intellectual property owner, its agent, or the law;</li>\n" +
    "                    <li>a statement by you, made under penalty of perjury, that the above information in your Notice is accurate and that you are the copyright or intellectual property owner or authorized to act on the copyright or intellectual property owner‘s\n" +
    "                        behalf.\n" +
    "                    </li>\n" +
    "                </ul>\n" +
    "                <p></p>\n" +
    "                <p>\n" +
    "                    <strong>Counter-Notice:&nbsp;</strong>If you believe that the relevant Content that was removed (or to which access was disabled) is not infringing, or that you have the authorization from the copyright owner, the copyright owner’s agent,\n" +
    "                    or pursuant to the law, to post and use such Content, you may send a written counter-notice containing the following information to the Copyright Agent:</p>\n" +
    "                <ul>\n" +
    "                    <li>your physical or electronic signature;</li>\n" +
    "                    <li>identification of the content that has been removed or to which access has been disabled and the location at which the content appeared before it was removed or disabled;</li>\n" +
    "                    <li>a statement that you have a good faith belief that the content was removed or disabled as a result of mistake or a misidentification of the content; and</li>\n" +
    "                    <li>your name, address, telephone number, and e-mail address, a statement that you consent to the jurisdiction of the federal court located within the Northern District of California and a statement that you will accept service of process\n" +
    "                        from the person who provided notification of the alleged infringement.</li>\n" +
    "                </ul>\n" +
    "                <p></p>\n" +
    "                <p>If a counter-notice is received by the Copyright Agent, company will send a copy of the counter- notice to the original complaining party informing that person that it may replace the removed content or cease disabling it in 10 business\n" +
    "                    days. Unless the copyright owner files an action seeking a court order against the content provider, member or user, the removed content may be replaced, or access to it restored, in 10 to 14 business days or more after receipt of\n" +
    "                    the counter-notice, at company’s sole discretion.</p>\n" +
    "                <p>\n" +
    "                    <strong>Repeat Infringer Policy: &nbsp;</strong>In accordance with the DMCA and other applicable law, company has adopted a policy of terminating, in appropriate circumstances and at company 's sole discretion, members who are deemed to be\n" +
    "                    repeat infringers. company may also at its sole discretion limit access to the Site and/or terminate the memberships of any users who infringe any intellectual property rights of others, whether or not there is any repeat infringement.</p>\n" +
    "            </div>\n" +
    "            <br />\n" +
    "            <br />\n" +
    "            <br />\n" +
    "            <br />\n" +
    "        </div>\n" +
    "    </section>\n" +
    "</div>\n" +
    "");
}]);

angular.module("pages/ux/ux.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("pages/ux/ux.tpl.html",
    "<div class=\"page-wrapper\" id=\"ux\">\n" +
    "  <section>\n" +
    "    <div class=\"container\">\n" +
    "      <h1>We make awesome <br />User Experiences</h1>\n" +
    "      <div class=\"row\">\n" +
    "          <div class=\"col-md-6 col-md-offset-3\">\n" +
    "              <img ng-src=\"assets/img/random/ux.png\" width=\"100%\" alt=\"User experience\" />\n" +
    "          </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </section>\n" +
    "  <section class=\"section-alternate\">\n" +
    "      <div class=\"container\">\n" +
    "          <div class=\"row\">\n" +
    "              <div class=\"col-md-6 col-md-offset-3\">\n" +
    "                  <h3>What is User experience?</h3>\n" +
    "                  <p>\n" +
    "                    User experience (abbreviated as UX) is how a person feels when interfacing with a system. The system could be a website, a web application or desktop software and, in modern contexts, is generally denoted by some form of human-computer interaction (HCI).<br />\n" +
    "                    Summary: \"User experience\" encompasses all aspects of the end-user's interaction with the company, its services, and its products.\n" +
    "                  </p>\n" +
    "                  <p>\n" +
    "                      Websites and Web applications have become progressively more complex as our industry's technologies and methodologies advance. What used to be a one-way static medium has evolved into a very rich and interactive experience. UX tries to make things simple, intuitive and fun. Bottom line, we want your users to have a great and pleasant experience on your app.\n" +
    "                  </p>\n" +
    "              </div>\n" +
    "          </div>\n" +
    "      </div>\n" +
    "  </section>\n" +
    "  <section class=\"\">\n" +
    "      <div class=\"container\">\n" +
    "          <div class=\"row\">\n" +
    "              <div class=\"col-md-6 col-md-offset-3\">\n" +
    "                  <h3>How do we make a great user experience?</h3>\n" +
    "                  <p>\n" +
    "                      User experience is a never ending process that can always be improved. <br />\n" +
    "                      We start with basic logic and guidelines and then iterate through testing. <br />\n" +
    "                      Most guidelines are common sense, but it's always good to remind yourself:\n" +
    "                  </p>\n" +
    "                  <ul>\n" +
    "                      <li>Remove anything that is not necessary</li>\n" +
    "                      <li>If you need something twice, it's probably not right</li>\n" +
    "                      <li>If it needs an explanation, it's probably not right</li>\n" +
    "                      <li>Use terms people will understand</li>\n" +
    "                  </ul>\n" +
    "              </div>\n" +
    "          </div>\n" +
    "      </div>\n" +
    "  </section>\n" +
    "</div>\n" +
    "");
}]);
