
class FollowToggle{
  constructor($el){
    this.$el = $el;
    this.userID = this.$el('user-id');
    this.followState = this.$el('initial-follow-state');

    render();
  }

  render(){
    if (this.followState === 'followed'){
      $
    }else if (this.followState === 'unfollowed'){
      
    }
  }
}

module.exports = FollowToggle;