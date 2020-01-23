
class FollowToggle{
  constructor($el){
    this.$el = $el;
    this.userID = this.$el('user-id');
    this.followState = this.$el('initial-follow-state');

    render();
  }

  render(){
    let $btn = $('.follow-toggle');
    if (this.followState === 'followed'){
      $btn.text("Unfollow!");
    }else if (this.followState === 'unfollowed'){
      $btn.text("Follow!");
    }
  }

  handleClick(){

  }
}

module.exports = FollowToggle;