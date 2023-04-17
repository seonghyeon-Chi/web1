import React from "react";

const GlobalContext = React.createContext({
  color: {
    def: '#7B61FF',
    def_mute: '#F6F4FF',
    gray: '#979797',
    black: '#161414',
    pupple: '#9747FF',
    white: '#ffffff',
    gary2: '#5b5b5b'
  },
  font: {
    fs1: '2em',
    fs2: '1.5em',
    fs3: '1.125em',
    fs4: '1em',
    fs5: '0.875em',
    fs6: '0.75em'
  }
})

export default GlobalContext;