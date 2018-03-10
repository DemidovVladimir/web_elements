import { Component, Prop, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'my-button'
})
export class MyButton {

  @Prop() link: string;

  @Event() clickedButton: EventEmitter;

  buttonClickedHandler(event: any) {
    this.clickedButton.emit(event.target.value);
  }

  render() {
    return (
      <div class="my-button-wrapper">
        <button link={this.link} onClick={(event) => this.buttonClickedHandler(event)}>
        </button>
      </div>
    );
  }
}
