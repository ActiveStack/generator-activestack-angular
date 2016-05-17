'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.Base.extend({
  prompting: function () {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the astonishing ' + chalk.red('ActiveStack AngularJS') + ' generator!'
    ));

    // var done = this.async();
    // this.prompt([
    // {
    //   type: 'input',
    //   name: 'name',
    //   message: 'Your project name',
    //   //Defaults to the project's folder name if the input is skipped
    //   default: this.appname
    // },
    // {
    //   type: 'input',
    //   name: 'userAnchorClass',
    //   message: 'Your User Anchor Class',
    //   //Defaults to the project's folder name if the input is skipped
    //   default: "com." + this.appname.toLowerCase() + ".mo.User"
    // },
    // {
    //   type: 'list',
    //   name: 'angularVersion',
    //   message: 'Which version of AngularJS would you like to use?',
    //   choices: [
    //   {
    //     value: '1',
    //     name: 'AngularJS 1.2.0-rc.3',
    //     checked: true
    //   }
    //   ]
    // }
    // ], function(answers) {
    //   this.props = answers
    //   // this.log(answers.name);
    //   done();
    // }.bind(this));

    var prompts = [
    {
      type: 'input',
      name: 'name',
      message: 'Your project name',
      //Defaults to the project's folder name if the input is skipped
      default: this.appname
    },
    {
      type: 'input',
      name: 'userAnchorClass',
      message: 'Your User Anchor Class',
      //Defaults to the project's folder name if the input is skipped
      default: "com." + this.appname.toLowerCase() + ".mo.User"
    },
    {
      type: 'list',
      name: 'angularVersion',
      message: 'Which version of AngularJS would you like to use?',
      choices: [
      {
        value: '1',
        name: 'AngularJS 1.2.0-rc.3',
        checked: true
      }
      ]
    }
    ];

    return this.prompt(prompts).then(function (props) {
      // To access props later use this.props.someAnswer;
      this.props = props;
    }.bind(this));
  },

  writing: function () {
    this.fs.copyTpl(
      this.templatePath('package.json'),
      this.destinationPath('package.json'),
      {
        name: this.props.name
      }
    );
    this.fs.copy(
      this.templatePath('watchr.rb'),
      this.destinationPath('watchr.rb')
    );
    this.fs.copy(
      this.templatePath('web-server.js'),
      this.destinationPath('web-server.js')
    );
    this.fs.copyTpl(
      this.templatePath('_app/index.html'),
      this.destinationPath('app/index.html'),
      {
        name: this.props.name
      }
    );
    this.fs.copyTpl(
      this.templatePath('bower.json'),
      this.destinationPath('bower.json'),
      {
        name: this.props.name
      }
    );
    this.fs.copy(
      this.templatePath('bowerrc'),
      this.destinationPath('.bowerrc')
    );
    this.fs.copyTpl(
      this.templatePath('_app/templates/apps.html'),
      this.destinationPath('app/templates/apps.html'),
      {
        name: this.props.name
      }
    );
    this.fs.copyTpl(
      this.templatePath('_app/templates/login.html'),
      this.destinationPath('app/templates/login.html'),
      {
        name: this.props.name
      }
    );
    this.fs.copyTpl(
      this.templatePath('_app/templates/dashboard/dashboard.html'),
      this.destinationPath('app/templates/dashboard/dashboard.html'),
      {
        name: this.props.name
      }
    );
    this.fs.copyTpl(
      this.templatePath('_app/js/app.js'),
      this.destinationPath('app/js/app.js'),
      {
        name: this.props.name
      }
    );
    this.fs.copyTpl(
      this.templatePath('_app/js/controllers.js'),
      this.destinationPath('app/js/controllers.js'),
      {
        name: this.props.name
      }
    );
    this.fs.copyTpl(
      this.templatePath('_app/js/directives.js'),
      this.destinationPath('app/js/directives.js'),
      {
        name: this.props.name
      }
    );
    this.fs.copyTpl(
      this.templatePath('_app/js/filters.js'),
      this.destinationPath('app/js/filters.js'),
      {
        name: this.props.name
      }
    );
    this.fs.copyTpl(
      this.templatePath('_app/js/services.js'),
      this.destinationPath('app/js/services.js'),
      {
        name: this.props.name
      }
    );
    this.fs.copyTpl(
      this.templatePath('_app/js/controllers/apps.js'),
      this.destinationPath('app/js/controllers/apps.js'),
      {
        name: this.props.name
      }
    );
    this.fs.copyTpl(
      this.templatePath('_app/js/controllers/appController.js'),
      this.destinationPath('app/js/controllers/appController.js'),
      {
        name: this.props.name,
        userAnchorClass: this.props.userAnchorClass
      }
    );
    this.fs.copyTpl(
      this.templatePath('_app/js/controllers/dashboard/dashboard.js'),
      this.destinationPath('app/js/controllers/dashboard/dashboard.js'),
      {
        name: this.props.name
      }
    );
    this.fs.copy(
      this.templatePath('gitignore'),
      this.destinationPath('.gitignore')
    );
    this.fs.copy(
      this.templatePath('class_include_list.html'),
      this.destinationPath('class_include_list.html')
    );
    this.fs.copy(
      this.templatePath('_app/js/activestack'),
      this.destinationPath('app/js/activestack')
    );
    this.fs.copy(
      this.templatePath('_app/oauth.html'),
      this.destinationPath('app/oauth.html')
    );
    this.fs.copy(
      this.templatePath('_app/css/app.css'),
      this.destinationPath('app/css/app.css')
    );
    this.fs.copy(
      this.templatePath('_app/img/login_button.png'),
      this.destinationPath('app/img/login_button.png')
    );
    this.fs.copy(
      this.templatePath('_app/img/login_button_over.png'),
      this.destinationPath('app/img/login_button_over.png')
    );
    this.fs.copy(
      this.templatePath('_app/img/login_button_selected.png'),
      this.destinationPath('app/img/login_button_selected.png')
    );
  },

  install: function () {
    this.installDependencies();
  }
});
