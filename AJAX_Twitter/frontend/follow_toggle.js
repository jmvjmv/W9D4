
class FollowToggle{
  constructor($el){
    this.$el = $el;
    this.userID = this.$el('user-id');
    this.followState = this.$el('initial-follow-state');
  }
}

module.exports = FollowToggle;