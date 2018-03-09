import { Component, Prop, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.scss'
})
export class MyComponent {

  @Prop() min: number;
  @Prop() max: number;
  @Prop() value: number;

  @Event() valueChanged: EventEmitter;

  valueChangedHandler(event: any) {
    this.valueChanged.emit(event.target.value);
  }

  render() {
    return (
      <div class="slider-container">
        <input type="range" min={this.min} max={this.max} value={this.value} class="slider"
               onChange={(event) => this.valueChangedHandler(event)}>
        </input>
      </div>
    );
  }
}
