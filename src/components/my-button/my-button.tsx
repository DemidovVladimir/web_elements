import { Component, Prop, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'my-button'
})
export class MyButton {

  @Prop() link: string;
  @Prop() url: string;

  @Event() clickedButton: EventEmitter;

  buttonClickedHandler(event: any) {
    this.clickedButton.emit(event.target.url);
  }

  render() {
    return (
      <div class="my-button-wrapper">
        <button onClick={ () => this.buttonClickedHandler(event)}>{this.link}</button>
      </div>
    );
  }
}
