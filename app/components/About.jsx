var React = require('react');

var About = (props) => {
    return (
      <div>
        <h1 className="text-center page-title">About</h1>
        <p>Thank you for checking out this app!</p>
        <p>
          Here are some of the tools used:
        </p>
        <ul>
          <li>
            <a href="https://facebook.github.io/react/">React</a> -  JS framework
          </li>
          <li>
            <a href="http://foundation.zurb.com/">Foundation</a> - FE framework
          </li>
          <li>
            <a href="https://babeljs.io/">Babel</a> - transpiling
          </li>
          <li>
            <a href="https://webpack.github.io/">Webpack</a> - bundling
          </li>
          <li>
            <a href="https://karma-runner.github.io/1.0/index.html">Karma</a> - test running
          </li>
          <li>
            <a href="https://mochajs.org/">Mocha</a> - JS test framework
          </li>
        </ul>
        <p>You can check the code under the hood in this
          <a href='https://github.com/timea/ReactTimer'> GitHub repo</a>.
        </p>
      </div>
    )
};

module.exports = About;
