import FollowToggle from './follow-toggle.js';

$(function() {
  $('button.follow-toggle').each( (idx, btn) => {
    return new FollowToggle(btn);
  });


});