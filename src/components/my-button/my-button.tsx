import { Component, Prop, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'my-button'
})
export class MyButton {

  @Prop() link: string;
  @Prop() url: string;

  @Event() clickedButton: EventEmitter;

  buttonClickedHandler() {
    this.clickedButton.emit(this.url);
  }

  render() {
    return (
      <div class="my-button-wrapper">
        <button onClick={ () => this.buttonClickedHandler()}>{this.link}</button>
      </div>
    );
  }
}
