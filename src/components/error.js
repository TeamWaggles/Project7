import React, { Component } from 'react';

class Error extends Component {
  render(){
    return <div className='Error'>
    <h1>This thing must be broken...</h1>
    <img src="https://media1.tenor.com/images/075849c4c046e7b2951a31b0df30da06/tenor.gif?itemid=9870756" alt="Error popups"/>
    {/** Image source: https://tenor.com/assets/dist/licenses.txt **/}
    <p>Google Map's API is not available. Please contact this website's administrator for more information.</p>
</div>
  }
}


export default Error;