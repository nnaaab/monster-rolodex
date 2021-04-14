import React from 'react';

class App extends React.Component {
      constructor() {
            super();
            this.handleClick2 = this.handleClick1.bind(this);
      }

      handleClick1() {
            console.log('button 1 clicked');
      }

      handleClick3 = () => console.log('button 3 clicked');

      render() {
            return(
                  <div>
                        //第一个button是直接调用了function，所以直接出button 1 clicked，但是
                        //重复按几次button没有反应，因为只render一次
                        <button onClick={this.handleClick1()}>Click 1</button>
                        //第二个button也是出button 1 clicked，但是多次按，会多次出现这句话，因为
                        //会render多次
                        <button onClick={this.handleClick1}>Click 2</button>
                        //第三个button也是出button 1 clicked,因为bind this的这个this是window
                        <button onClick={this.handleClick2}>Click 3</button>
                        //第四个button出的是button 3 clicked
                        <button onClick={this.handleClick3}>Click 4</button>
                  </div>

            )
      }

}

