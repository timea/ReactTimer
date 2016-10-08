var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');
var Clock = require('Clock');

describe('Clock', () => {
  it('should exist', () => {
    expect(Clock).toExist();
  });

  describe('render', () => {
    it('should render clock to output', () => {
      var clock = TestUtils.renderIntoDocument(<Clock totalSeconds={62}/>)
      var $el = $(ReactDOM.findDOMNode(clock));
      var actualText = $el.find('.clock-text').text();

      expect(actualText).toBe('01:02');
    });
  });

  describe('formatSeconds', () => {
    it('should convert seconds to minutes', () => {
      var clock = TestUtils.renderIntoDocument(<Clock/>);
      var seconds = 615;
      var expected = '10:15';
      var actual = clock.formatSeconds(seconds);

      expect(actual).toBeA('string');
      expect(actual).toBe(expected);
    });

    it('should format seconds when min/sec are one digit', () => {
      var clock = TestUtils.renderIntoDocument(<Clock/>);
      var seconds = 69;
      var expected = '01:09';
      var actual = clock.formatSeconds(seconds);

      expect(actual).toBeA('string');
      expect(actual).toBe(expected);
    });

  });
});
